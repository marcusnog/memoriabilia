import { useParams } from "react-router-dom";
import * as React from "react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface Product {
    id: number;
    title: string;
    description: string;
    status: string;
    currency: string;
    price: string;
    additional_info: {
        weight: string;
    } | null;
    created_at: string;
    updated_at: string;
    images: Image[];
    bids: Bid[];
    logs: Log[];
}

interface Image {
    id: number;
    url: string;
    alt: string;
    format: string;
    product_id: number;
    created_at: string;
    updated_at: string;
}

interface Bid {
    id: number;
    product_id: number;
    user_id: number;
    value: string;
    created_at: string;
    updated_at: string;
}

interface Log {
    id: number;
    description: string;
    type: string;
    product_id: number;
    created_at: string;
    updated_at: string;
}



const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [bidValue, setBidValue] = useState<number>(0);



    useEffect(() => {
        checkAuthentication();
    }, []);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://ec2-3-145-6-44.us-east-2.compute.amazonaws.com/api/products/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);


    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setTimeRemaining(prevTime => Math.max(0, prevTime - 1000)); // Subtract 1 second
    //     }, 1000);

    //     // Cleanup timer on unmount
    //     return () => clearInterval(timer);
    // }, []);

    const handleBidSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        if (token) {
            try {

                const initialBidValue = parseFloat(product?.price || "0");
                if (bidValue >= initialBidValue) {
                    const response = await fetch('http://ec2-3-145-6-44.us-east-2.compute.amazonaws.com/api/products/bids', {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            auction_id: product?.id,
                            value: bidValue
                        })
                    });

                    if (!response.ok) {
                        throw new Error('Failed to submit bid');
                    }

                    // Recarrega a página após o envio bem-sucedido do lance
                    window.location.reload();
                } else {
                    alert('O valor do lance deve ser maior ou igual ao lance atual.');
                }

            } catch (error) {
                console.error('Error submitting bid:', error);
            }
        }
    };

    // const formatTime = (milliseconds: number): string => {
    //     const seconds = Math.floor(milliseconds / 1000) % 60;
    //     const minutes = Math.floor(milliseconds / (1000 * 60)) % 60;
    //     const hours = Math.floor(milliseconds / (1000 * 60 * 60)) % 24;
    //     const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

    //     return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    // };

    // Function to format date and time
    // const formatDateTime = (dateTimeString: string): string => {
    //     const dateTime = new Date(dateTimeString);
    //     return dateTime.toLocaleString(); // Use appropriate options to customize date and time format
    // };


    const checkAuthentication = () => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    };

    return (
        <div className="flex justify-center w-full mt-72">
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <div className="items-center md:w-6/12">
                    {product && (
                        <>
                            <div className="md:flex w-full md:justify-center">
                                
                                <div className="md:flex md:w-6/12 rounded-md md:justify-center shadow-md">
                                    <img className="w-full size-72 md:w-full md:size-72 :mt-5" alt="produto" src={product.images[0]?.url} />
                                </div>
                                <div className="md:items-center text-center mt-20 md:mt-0">
                                <div className="w-full shadow-xl p-8 md:ml-10 rounded-md">
                                    <div className="mt-5">
                                        {/* <div className="mt-10">
                                                <p className="text-md font-semibold text-blue-500">{formatTime(timeRemaining)} Restante</p>
                                            </div> */}
                                    </div>
                                    <h2 className="font-bold text-2xl mt-10">{product.title}</h2>

                                    <div className="flex justify-center mt-10 w-full rounded-md">
                                        <p className="text-2xl">Lance Atual: R$ {product.price}</p>
                                    </div>

                                    {isLoggedIn ? (
                                        <form className="ml-16 md:ml-0 md:mt-5 text-start" onSubmit={handleBidSubmit}>
                                            <div className="mt-5">
                                                <label>Lance:</label>
                                                <Input className="w-10/12 md:w-full" type="number" placeholder="R$" value={bidValue} onChange={(e) => setBidValue(parseFloat(e.target.value))}></Input>
                                            </div>
                                            <div className="mt-5 flex justify-end w-5/6 md:w-full">
                                                <Button type="submit">Enviar Lance</Button>
                                            </div>
                                        </form>
                                    ) : (
                                        <div className="hidden"></div>
                                    )}
                                </div>
                                </div>
                            </div>
                            <div className="flex justify-center md:w-full">
                                <Tabs className="mt-20 border shadow-xl p-8 ml-10 rounded-md md:w-full">
                                    <TabsList className="border top-0 rounded-md bg-black md:w-full">
                                        <div className="flex justify-center md:space-x-4">
                                            <TabsTrigger value="description">Descrição</TabsTrigger>
                                            <TabsTrigger value="logs">Logs</TabsTrigger>
                                            <TabsTrigger value="additional_info">Informações Adicional</TabsTrigger>
                                        </div>
                                    </TabsList>

                                    <TabsContent value="description" className="flex justify-center mt-10 w-full">
                                        <Table>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className="font-medium">{product.description}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TabsContent>
                                    <TabsContent value="logs" className="flex justify-center w-full">
                                        <div className="w-full flex justify-start">
                                            {product.logs.map((log, index) => (
                                                <div key={index}>
                                                    <Table>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell className="font-medium">{log.description}</TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </div>
                                            ))}
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="additional_info" className="flex justify-center w-full">
                                        <div className="w-full flex justify-center">
                                            <Table>
                                                <TableCaption>Informações adicionais</TableCaption>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead className="w-[100px]">Peso</TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell className="font-medium">{product.additional_info?.weight}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </TabsContent>

                                </Tabs>
                            </div>

                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
