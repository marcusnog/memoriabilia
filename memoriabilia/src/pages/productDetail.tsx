import { Input } from "@/components/ui/input";
import * as React from "react";
import { useEffect, useState } from "react";

interface Product {
    id: number;
    initialValue: number;
    image: string;
    description: string;
    auction_duration: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };
}

const ProductDetail: React.FC = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('https://8rgvy.wiremockapi.cloud/product/1');
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data.product);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, []);

    return (
        <div className="flex justify-center content-center w-full mt-72">
            <div className="flex justify-center w-full">
                {loading ? (
                    <div className="text-center">Loading...</div>
                ) : (
                    <div>
                        {product && (
                            <>
                                <div className="flex justify-center">
                                    <div className="w-6/12 border rounded-md flex justify-center shadow-md">
                                        <img className="mt-5 w-6/12" alt="produto" src={product.image} />
                                    </div>
                                    <div className="border shadow-xl p-8 ml-10 rounded-md">
                                        <p className="mt-10 text-md font-bold text-black">Restante: </p>
                                        <p className="text-xl font-poppins text-blue-500 font-semibold mt-2">
                                            {product.auction_duration.days} Dia(s), {product.auction_duration.hours} Hora(s), {product.auction_duration.minutes} Minuto(s)
                                        </p>
                                        <h2 className="font-bold text-2xl mt-10">{product.description}</h2>

                                        <div className="flex justify-center mt-10 border shadow-sm w-full rounded-md">
                                            <p className="text-2xl">Lance Atual: R$ {product.initialValue}</p>
                                        </div>
                                        <div>
                                        </div>
                                    </div>

                                </div>
                                <div className="mt-10 border shadow-xl w-full h-72">
                                    <div className="w-full flex justify-center">
                                        <div className="flex justify-center p-5 w-full border bg-black">
                                            <span className="text-2xl font-bold text-white">
                                                Descrição
                                            </span>

                                        </div>

                                    </div>
                                    <div className="flex justify-center">
                                        <p className="mt-10">
                                            {product.description}
                                        </p>
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
