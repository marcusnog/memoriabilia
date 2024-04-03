import { useParams } from "react-router-dom";
import * as React from "react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Product {
    id: number;
    title: string;
    description: string;
    status: string;
    currency: string;
    price: string;
    additional_info: string | null;
    images: Image[];
    auction: Auction;
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

interface Auction {
    id: number;
    title: string;
    description: string;
    initial_value: string;
    start_at: string;
    end_at: string;
    created_at: string;
    updated_at: string;
    products: Product[];
}

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Extrai o id da URL usando o hook useParams
    // const [product, setProduct] = useState<Product | null>(null);
    const [auction, setAuction] = useState<Auction | null>(null);
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [bidValue, setBidValue] = useState<number>(0);
    const [timeRemaining, setTimeRemaining] = useState<number>(0);



    useEffect(() => {
        checkAuthentication();
    }, []);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://ec2-3-145-6-44.us-east-2.compute.amazonaws.com/api/auctions/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setAuction(data.data);
                // setProduct(data.data.products[0]);
                setLoading(false);

                // Format dates
                const startTime = new Date(data.data.start_at);
                const endTime = new Date(data.data.end_at);

                // Calculate time remaining
                const currentTime = new Date().getTime();
                const timeDiffStart = startTime.getTime() - currentTime;
                const timeDiffEnd = endTime.getTime() - currentTime;
                setTimeRemaining(timeDiffStart > 0 ? timeDiffStart : timeDiffEnd); // Use whichever is earlier



            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(prevTime => Math.max(0, prevTime - 1000)); // Subtract 1 second
        }, 1000);

        // Cleanup timer on unmount
        return () => clearInterval(timer);
    }, []);

    const handleBidSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        if (token) {
            try {

                const initialBidValue = parseFloat(auction?.initial_value || "0");
                if (bidValue >= initialBidValue) {
                    const response = await fetch('http://ec2-3-145-6-44.us-east-2.compute.amazonaws.com/api/auctions/bids', {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            auction_id: auction?.id,
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

    const formatTime = (milliseconds: number): string => {
        const seconds = Math.floor(milliseconds / 1000) % 60;
        const minutes = Math.floor(milliseconds / (1000 * 60)) % 60;
        const hours = Math.floor(milliseconds / (1000 * 60 * 60)) % 24;
        const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

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
        <div className="flex justify-center content-center w-full mt-72">
            <div className="flex justify-center w-full">
                {loading ? (
                    <div className="text-center">Loading...</div>
                ) : (
                    <div>
                        {auction && (
                            <>
                                <div className="flex justify-center">
                                    <div className="w-6/12 border rounded-md flex justify-center shadow-md">
                                        <img className="mt-5 w-6/12" alt="produto" src={auction.products[0]?.images[0]?.url} />
                                    </div>

                                    <div className="border shadow-xl p-8 ml-10 rounded-md">
                                        <div className="mt-5">
                                            <div className="mt-10">
                                                <p className="text-md font-semibold text-blue-500">{formatTime(timeRemaining)} Restante</p>
                                            </div>
                                        </div>
                                        <h2 className="font-bold text-2xl mt-10">{auction.products[0]?.title}</h2>

                                        <div className="flex justify-center mt-10 border shadow-sm w-full rounded-md">
                                            <p className="text-2xl">Lance Atual: R$ {auction.initial_value}</p>
                                        </div>

                                        {isLoggedIn ? (
                                            <form className="mt-5" onSubmit={handleBidSubmit}>
                                                <div className="mt-5">
                                                    <label>Lance:</label>
                                                    <Input type="number" placeholder="R$" value={bidValue} onChange={(e) => setBidValue(parseFloat(e.target.value))}></Input>
                                                </div>
                                                <div className="mt-5 flex justify-end">
                                                    <Button type="submit">Enviar Lance</Button>
                                                </div>
                                            </form>
                                        ) : (
                                            <div className="hidden"></div>
                                        )}
                                    </div>

                                </div>
                                <div className="mt-10 border shadow-xl w-full h-72 rounded-md shadow-lg">
                                    <div className="bg-black flex justify-center rounded-md">
                                        <span className="text-bold text-white">Descrição</span>
                                    </div>
                                    <div className="flex justify-start w-full p-5">
                                        <div className="w-6/12 flex justify-start">
                                            <span className="mt-20">{auction.description}</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
