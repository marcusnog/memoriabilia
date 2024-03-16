import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

interface Product {
    id: number;
    initialValue: number;
    image: string;
    description: string;
    time: string;
}

function Home(): JSX.Element {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://8rgvy.wiremockapi.cloud/json/1');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <>
            <div className="justify-center p-5 mt-72 w-6/6 h-2/6">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 8000,
                        }),
                    ]}
                >
                    <CarouselContent>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex items-center justify-center">
                                        <img alt="banner" src="https://memorabiliadoesporte.com.br/wp-content/uploads/2023/11/socialmedia_cardautogtafado-1.jpg" />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex items-center justify-center">
                                        <img alt="banner" src="https://memorabiliadoesporte.com.br/wp-content/uploads/2023/11/socialmedia_cardautogtafado-1.jpg" />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
            <div className="p-5 mb-10 mt-10 border rounded-md w-full h-6/12">
                <div className="justify-center flex">
                    <h1>Participe de leilões de itens e experiências insubstituíveis</h1>
                    <p className="justify-center flex">Na Play For a Cause você pode realizar o sonho de ter artigos exclusivos
                        e ainda contribuir com instituições sociais.</p>
                </div>
                <div className="container">
                    <h1>Confira alguns dos nossos principais parceiros</h1>
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>
                                <img src="" alt="logo parceiros"></img>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 w-1/6">
                <Carousel className="col-span-4 flex items-center justify-center">
                    <CarouselContent className="-ml-2 md:-ml-4">
                        <CarouselItem className="flex">
                                    {products.map((product) => (
                                        <CarouselItem key={product.id}>
                                            <Card>
                                                <CardContent>
                                                    <img className="mt-5" alt="produto" src={product.image} />
                                                    <CardTitle className="mt-10 mb-2">{product.description}</CardTitle>
                                                    <CardDescription>Lance inicial: R${product.initialValue}</CardDescription>
                                                    <div className="flex justify-center bg-emerald">
                                                        <CardFooter>{product.time}</CardFooter>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                    ))}
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </>
    )
}

export default Home;
