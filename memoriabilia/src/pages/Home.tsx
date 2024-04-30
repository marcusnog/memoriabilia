import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import '../global.css';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

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
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    // const [remainingTimes, setRemainingTimes] = useState<number[]>([]);



    useEffect(() => {
        const fetchproducts = async () => {
            try {
                const response = await fetch('http://ec2-3-145-6-44.us-east-2.compute.amazonaws.com/api/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const responseData = await response.json();
                setProducts(responseData.data);
                setLoading(false);

                // const calculateTimeDifference = (startAt: string, endAt: string): number => {
                //     const startTime = new Date(startAt).getTime();
                //     const endTime = new Date(endAt).getTime();
                //     return Math.max(0, endTime - startTime);
                // };


                // const times = responseData.data.map((auction: { start_at: string; end_at: string; }) => calculateTimeDifference(auction.start_at, auction.end_at));
                // setRemainingTimes(times);

                // const intervalId = setInterval(() => {
                //     setRemainingTimes(products.map(products => calculateTimeDifference(products.start_at, products.end_at)));
                // }, 1000);


                // return () => clearInterval(intervalId);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchproducts();

    }, []);



    return (
        <>
            <div className="justify-center mt-96 w-6/6 h-2/6">
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
                                    <CardContent>
                                        <img alt="banner" className="size-full" src="https://memorabiliadoesporte.com.br/wp-content/uploads/2023/11/socialmedia_cardautogtafado-1.jpg" />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <CardContent>
                                        <img alt="banner" className="size-full" src="https://memorabiliadoesporte.com.br/wp-content/uploads/2023/11/socialmedia_cardautogtafado-1.jpg" />
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
            <div className="flex mt-20 w-full space-x-4" >
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 3000,
                            playOnInit: true,
                        }),
                    ]}
                >
                    <CarouselContent className="flex w-full justify-center items-center">
                        <CarouselItem><img className="w-3/12" src="https://logopng.com.br/logos/nike-99.png" alt="logo parceiros"></img></CarouselItem>
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
                    {!loading && Array.isArray(products) && products.length > 0 ? (
                        products.map((products) => (
                            <div key={products.id} className="m-2">
                                <a href={`/product/${products.id}`}>
                                    <div className="flex justify-center mt-20">
                                        <span className="text-4xl font-poppins font-semibold">{products.title}</span>
                                    </div>
                                    <NavigationMenu>
                                        <NavigationMenuList>
                                            <NavigationMenuItem>
                                                <Card className="border-hidden rounded-none m-2 h-full w-72 hover:shadow-2xl mt-20">
                                                    <CardContent>
                                                        <img className="mt-5" alt="auction" src={products.images[0]?.url || 'url_da_imagem_padrao'} />
                                                        <CardTitle className="flex justify-center mt-10 mb-2 text-xs font-light">{products.title}</CardTitle>
                                                        <div className="flex">
                                                            <span className="text-sm font-poppins"><span className="font-semibold text-sm">Lance Atual:</span> R$ {products.price}</span>
                                                        </div>
                                                        <CardDescription>
                                                            <div className="mt-2">
                                                                <span className="flex text-xs font-poppins text-blue-500 font-semibold">
                                                                    {/* <div className="flex justify-center mt-2">
                                                                        {formatCountdown(remainingTimes[index])}<p className="flex ml-1">Restante</p>
                                                                    </div> */}
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
            {products.length > 4 && (
                <div className="flex justify-center mt-32 mb-20">
                    <Button className="h-12"><span className="font-poppins text-2xl">Ver Todos</span></Button>
                </div>
            )
            }
        </>
    )
}

export default Home;
