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
import '../global.css';
import { Link } from "@radix-ui/react-navigation-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

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

function Home(): JSX.Element {
    const [auctions, setAuctions] = useState<Auction[]>([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchAuctions = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/auctions');
                if (!response.ok) {
                    throw new Error('Failed to fetch auctions');
                }
                const responseData = await response.json();
                setAuctions(responseData.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching auctions:', error);
            }
        };
        fetchAuctions();
    }, []);

    // Função para calcular a diferença de tempo entre start_at e end_at
    const calculateTimeDifference = (startAt: string, endAt: string): number => {
        const startTime = new Date(startAt).getTime();
        const endTime = new Date(endAt).getTime();
        return Math.max(0, endTime - startTime);
    };

    // Estado para armazenar a diferença de tempo restante para cada leilão
    const [remainingTimes, setRemainingTimes] = useState<number[]>([]);

    useEffect(() => {
        // Atualiza a diferença de tempo restante a cada segundo
        const intervalId = setInterval(() => {
            setRemainingTimes(auctions.map((auction) => calculateTimeDifference(auction.start_at, auction.end_at)));
        }, 1000);

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(intervalId);
    }, [auctions]);

    // Função para formatar a diferença de tempo em um contador regressivo
    const formatCountdown = (difference: number): string => {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };


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
                <div className="justify-center flex text-3xl font-poppins font-bold">
                    <h1>Participe de leilões de itens e experiências insubstituíveis</h1>

                </div>
                <div>
                    <p className="flex justify-center text-2xl mt-10 font-poppins">Na Memorabília você pode realizar o sonho de ter artigos exclusivos
                        e ainda contribuir com instituições sociais.</p>
                </div>
                <div className="flex justify-center container text-3xl mt-10 font-poppins font-semiboldbold">
                    <span>Confira alguns dos nossos principais parceiros</span>
                </div>
            </div>
            <div className="flex mt-20 w-full">
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 3000,
                            playOnInit: true,
                        }),
                    ]}
                >
                    <CarouselContent className="flex justify-center items-center w-full">
                        <CarouselItem className="lg:basis-1/5"><img className="w-3/12" src="https://logopng.com.br/logos/nike-99.png" alt="logo parceiros"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-4/12" src="https://logodownload.org/wp-content/uploads/2017/08/centauro-logo-00.png" alt="logo parceiros"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-4/12" src="https://upload.wikimedia.org/wikipedia/commons/2/26/SporTV_2021.png" alt="logo parceiros"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-2/12" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Escudo_Vasco_2015.png" alt="logo parceiros"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-4/12" src="https://upload.wikimedia.org/wikipedia/commons/3/35/Stock_Car_BR.png" alt="logo"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-4/12" src="https://seeklogo.com/images/P/penalty-logo-69E8998938-seeklogo.com.png" alt="logo"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-4/12" src="https://upload.wikimedia.org/wikipedia/pt/b/bc/NBB_logo_2.png" alt="logo"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-3/12" src="https://logopng.com.br/logos/nike-99.png" alt="logo parceiros"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-4/12" src="https://logodownload.org/wp-content/uploads/2017/08/centauro-logo-00.png" alt="logo parceiros"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-4/12" src="https://upload.wikimedia.org/wikipedia/commons/2/26/SporTV_2021.png" alt="logo parceiros"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-2/12" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Escudo_Vasco_2015.png" alt="logo parceiros"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-4/12" src="https://upload.wikimedia.org/wikipedia/commons/3/35/Stock_Car_BR.png" alt="logo"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-4/12" src="https://seeklogo.com/images/P/penalty-logo-69E8998938-seeklogo.com.png" alt="logo"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-4/12" src="https://upload.wikimedia.org/wikipedia/pt/b/bc/NBB_logo_2.png" alt="logo"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-3/12" src="https://logopng.com.br/logos/nike-99.png" alt="logo parceiros"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-4/12" src="https://logodownload.org/wp-content/uploads/2017/08/centauro-logo-00.png" alt="logo parceiros"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-4/12" src="https://upload.wikimedia.org/wikipedia/commons/2/26/SporTV_2021.png" alt="logo parceiros"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-2/12" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Escudo_Vasco_2015.png" alt="logo parceiros"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-4/12" src="https://upload.wikimedia.org/wikipedia/commons/3/35/Stock_Car_BR.png" alt="logo"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-4/12" src="https://seeklogo.com/images/P/penalty-logo-69E8998938-seeklogo.com.png" alt="logo"></img></CarouselItem>
                        <CarouselItem className="lg:basis-1/5"><img className="w-4/12" src="https://upload.wikimedia.org/wikipedia/pt/b/bc/NBB_logo_2.png" alt="logo"></img></CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>

            <div className="flex justify-center p2 w-full mt-20">

                <div className="content-center w-2/6">
                    {!loading && Array.isArray(auctions) && auctions.length > 0 ? (
                        auctions.map((auction, index) => (
                            <div key={auction.id} className="m-2">
                                <a href={`/product/${auction.products[0]?.id}`}>
                                <div className="flex justify-center mt-20">
                                    <span className="text-4xl font-poppins font-semibold">{auction.title}</span>
                                </div>
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <Card className="border-hidden rounded-none m-2 h-full w-72 hover:shadow-2xl mt-20">
                                                <CardContent>
                                                    <img className="mt-5" alt="auction" src={auction.products[0]?.images[0]?.url || 'url_da_imagem_padrao'} />
                                                    <CardTitle className="flex justify-center mt-10 mb-2 text-xs font-light">{auction.products[0].title}</CardTitle>
                                                    <div className="flex">
                                                        <span className="text-sm font-poppins"><span className="font-semibold text-sm">Lance Atual:</span> R$ {auction.initial_value}</span>
                                                    </div>
                                                    <CardDescription>
                                                        <div className="mt-2">
                                                            <span className="flex text-xs font-poppins text-blue-500 font-semibold">
                                                                <div className="flex justify-center mt-2">
                                                                {formatCountdown(remainingTimes[index])}<p className="flex ml-1">Restante</p>
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </CardDescription>
                                                </CardContent>
                                            </Card>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                                </a>
                            </div>
                        ))
                    ) : (
                        <div className="text-center">Não há leilões disponíveis no momento.</div>
                    )}

                </div>

            </div>
            {auctions.map((auction) =>
                auction.products.length > 4 && (
                    <div className="flex justify-center mt-32 mb-20">
                        <Button className="h-12"><span className="font-poppins text-2xl">Ver Todos</span></Button>
                    </div>
                ))
            }
        </>
    )
}

export default Home;
