import * as React from "react";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function Home() {
    const carouselRef = useRef(null);
    let embla = null;

    useEffect(() => {
        if (carouselRef.current) {
            embla = Autoplay(carouselRef.current);
        }
    }, []);

    return (
        <div className="mt-10 w-6/6 h-4/6">
            <Carousel ref={carouselRef}>
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
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Home;
