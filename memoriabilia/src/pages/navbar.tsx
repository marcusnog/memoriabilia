import React, { useEffect, useState } from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from '@radix-ui/react-navigation-menu';
import { Input } from '@/components/ui/input';
import '../styles.css';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { FaBasketShopping } from "react-icons/fa6";




export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    return (
        <>
            <div className={`fixed top-0 left-0 w-full bg-white shadow-lg z-50 transition-all duration-200 ${isScrolled ? 'flex justify-center h-16' : 'h-2/6'}`}>
                <div className="relative flex h-3/6 items-center mb-10 mt-10 justify-center">
                    <a href='./home'><img className={`w-50 h-20 ${isScrolled ? 'hidden' : 'block'}`} src='https://memorabiliadoesporte.com.br/wp-content/uploads/2020/12/MDE-1.jpg' alt="Logo do Memoriabília" /></a>
                    <div className={`search-container ${isScrolled ? 'hidden' : 'block'}`}>
                        <Input className="search-input" type="text" placeholder="Buscar produtos... " />
                        <button type="submit" className="search-button">
                            <MagnifyingGlassIcon />
                        </button>
                    </div>
                </div>

                <div className={`flex justify-center ${isScrolled ? 'fixed top-0 mt-3' : ''}`}>
                    <NavigationMenu className={`bg-white w-full z-50 ${isScrolled ? 'justify-center mt-3/6' : ''}`}>


                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='text-lg font-poppins'>Esportes</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                                        <span className='text-lg font-poppins'>Atletas</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={`text-lg font-poppins ${navigationMenuTriggerStyle()}`}>
                                    <span className='text-lg font-poppins'>Miniatura Realista</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={`text-lg font-poppins ${navigationMenuTriggerStyle()}`}>
                                    <span className='text-lg font-poppins'>Quadros</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={`text-lg font-poppins ${navigationMenuTriggerStyle()}`}>
                                    <span className='text-lg font-poppins'>Jogo das Estrelas</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={`text-lg font-poppins ${navigationMenuTriggerStyle()}`}>
                                    <span className='text-lg font-poppins'>Casa da Moeda do Brasil</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={`text-lg font-poppins ${navigationMenuTriggerStyle()}`}>
                                    <span className='text-lg font-poppins'>MDE Social</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                <NavigationMenuLink className={`text-lg font-poppins ${navigationMenuTriggerStyle()}`}>
                                <span className='text-lg font-poppins'>Parceiros</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={`text-lg font-poppins ${navigationMenuTriggerStyle()}`}>
                                    <span className='text-lg font-poppins'>Artigos</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                        <NavigationMenu className='ml-36'>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Link href="/docs">
                                    <NavigationMenuLink className={`text-lg font-poppins ${navigationMenuTriggerStyle()}`}>
                                    <span className='text-lg font-poppins'>Minha Conta</span>
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/docs">
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            <FaBasketShopping className='size-6' />
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </NavigationMenu>

                </div>
            </div>
        </>
    )
}