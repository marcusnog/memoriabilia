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
    auction_duration: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };
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
            <div className="p-5 mb-10 mt-10 rounded-md w-full h-6/12">
                <div className="justify-center flex text-3xl">
                    <h1>Participe de leilões de itens e experiências insubstituíveis</h1>

                </div>
                <div>
                    <p className="flex justify-center text-2xl mt-10">Na Memoriabilia você pode realizar o sonho de ter artigos exclusivos
                        e ainda contribuir com instituições sociais.</p>
                </div>
                <div className="flex justify-center container text-3xl mt-10">
                    <span>Confira alguns dos nossos principais parceiros</span>
                </div>
            </div>
            <div className="mt-20">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 1000,
                        }),
                    ]}
                >
                    <CarouselContent className="flex justify-center items-center">
                        <CarouselItem className="basis-1/6"><img className="w-3/12" src="https://logopng.com.br/logos/nike-99.png" alt="logo parceiros"></img></CarouselItem>
                        <CarouselItem className="basis-1/6"><img className="w-4/12" src="https://logodownload.org/wp-content/uploads/2017/08/centauro-logo-00.png" alt="logo parceiros"></img></CarouselItem>
                        <CarouselItem className="basis-1/6"><img className="w-4/12" src="https://upload.wikimedia.org/wikipedia/commons/2/26/SporTV_2021.png" alt="logo parceiros"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/6"><img className="w-2/12" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Escudo_Vasco_2015.png" alt="logo parceiros"></img></CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
            <div className="flex justify-center mt-20">
                <span className="text-4xl font-sans">Coleção Top</span>
            </div>
            <div className="flex justify-center p2 w-full mt-10">

                <div className="flex justify-center content-center w-1/6">
                    {products.map((product) => (
                        <div key={product.id}>
                            <Card className="border-hidden m-2 h-full">
                                <CardContent>
                                    <img className="mt-5" alt="produto" src={product.image} />
                                    <CardTitle className="flex justify-center mt-10 mb-5 text-md">{product.description}</CardTitle>

                                    <div className="flex justify-center bg-emerald">
                                        <CardFooter>
                                            <div className="bg-emerald-300 flex p-2 justify-center">
                                                <div className="p-2">
                                                    <span className="text-xl font-sans text-emerald-900">
                                                        {product.auction_duration.days}
                                                    </span>
                                                    <p className="mt-2 text-sm/[5px]">Dias</p>
                                                </div>
                                                <div className="p-2">
                                                    <span className="text-xl font-sans text-emerald-900">
                                                        {product.auction_duration.hours}
                                                    </span>
                                                    <p className="mt-2 text-sm/[5px]">Horas</p>
                                                </div>
                                                <div className="p-2">
                                                    <span className="text-xl font-sans text-emerald-900">
                                                        {product.auction_duration.minutes}
                                                    </span>
                                                    <p className="mt-2 text-sm/[5px]">Minutos</p>
                                                </div>
                                                <div className="p-2">
                                                    <span className="text-xl font-sans text-emerald-900">
                                                        {product.auction_duration.seconds}
                                                    </span>
                                                    <p className="mt-2 text-sm/[5px]">segundos</p>
                                                </div>
                                            </div>
                                        </CardFooter>
                                    </div>
                                    <div className="flex justify-center">
                                        <span className="text-2xl font-sans">Lance inicial: R${product.initialValue}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

            </div>
            <div className="flex justify-center mt-32 mb-20">
                <Button className="h-12"><span className="font-sans text-2xl">Ver Todos</span></Button>
            </div>
        </>
    )
}

export default Home;
