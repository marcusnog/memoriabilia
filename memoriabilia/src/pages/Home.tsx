import * as React from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";

function Home() {
    return (
        <div className="mt-10">
        <Carousel className="h-full">
            <CarouselContent>
                    <CarouselItem>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <img alt="banner" className="w-full" src="https://memorabiliadoesporte.com.br/wp-content/uploads/2023/08/Banner-Web-50x100.png" />
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