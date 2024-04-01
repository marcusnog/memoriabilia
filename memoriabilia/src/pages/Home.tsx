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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://8rgvy.wiremockapi.cloud/json/1');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data.products);
                setLoading(false);
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
            <div className="flex justify-center mt-20">
                <span className="text-4xl font-poppins font-semibold">Coleção Top</span>
            </div>
            <div className="flex justify-center p2 w-full mt-10">

                <div className="flex justify-center content-center w-2/6">
                    {loading ? (
                        <div className="text-center">Loading...</div>
                    ) : (

                        products.map((product) => (
                            <div key={product.id}>
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <Link href="/product/1">
                                                <NavigationMenuLink>
                                                    <Card className="border-hidden rounded-none m-2 h-full w-72 hover:shadow-2xl">
                                                        <CardContent>
                                                            <img className="mt-5" alt="produto" src={product.image} />
                                                            <CardTitle className="flex justify-center mt-10 mb-2 text-xs font-light">{product.description}</CardTitle>
                                                            <div className="flex">
                                                                <span className="text-sm font-poppins"><span className="font-semibold text-sm">Lance Atual:</span> R$ {product.initialValue}</span>
                                                            </div>
                                                            <CardDescription>
                                                                <div className="mt-2">
                                                                    <span className="flex text-xs font-poppins text-blue-500 font-semibold">
                                                                        <span className="flex ml-1">
                                                                            {product.auction_duration.days}
                                                                            <p className="ml-1">Dia</p>
                                                                        </span>
                                                                        <span className="flex ml-1">
                                                                            {product.auction_duration.hours}
                                                                            <p className="ml-1">Horas</p>
                                                                        </span>
                                                                        <span className="flex ml-1">
                                                                            {product.auction_duration.minutes}
                                                                            <p className="ml-1">min</p>
                                                                        </span>
                                                                        <p className="flex ml-1">Restante</p>
                                                                    </span>
                                                                </div>
                                                            </CardDescription>
                                                        </CardContent>
                                                    </Card>
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>
                        ))
                    )}
                </div>

            </div>
            {products.length > 3 && (
                <div className="flex justify-center mt-32 mb-20">
                    <Button className="h-12"><span className="font-poppins text-2xl">Ver Todos</span></Button>
                </div>
            )}
        </>
    )
}

export default Home;
