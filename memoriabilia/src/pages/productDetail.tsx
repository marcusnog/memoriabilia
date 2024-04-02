import { useParams } from "react-router-dom";
import * as React from "react";
import { useEffect, useState } from "react";

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
    const [product, setProduct] = useState<Product | null>(null);
    const [auction, setAuction] = useState<Auction | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/auctions/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setAuction(data.data);
                setProduct(data.data.products[0]);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);

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
                                        <h2 className="font-bold text-2xl mt-10">{auction.products[0]?.title}</h2>

                                        <div className="flex justify-center mt-10 border shadow-sm w-full rounded-md">
                                            <p className="text-2xl">Lance Atual: R$ {auction.initial_value}</p>
                                        </div>
                                        <div className="mt-5">
                                            <div className="mt-10">
                                                <p className="text-md font-semibold text-blue-500">{auction.start_at} Restante</p>
                                            </div>
                                        </div>
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
