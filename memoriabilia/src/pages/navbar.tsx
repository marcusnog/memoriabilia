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
import { EnterIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { FaBasketShopping } from "react-icons/fa6";


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 100);
        }

        function handleResize() {
            setIsMobile(window.innerWidth < 600);
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize();
        checkAuthentication();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const checkAuthentication = () => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    };


    return (
        <>
            <div className={`fixed top-0 left-0 w-full bg-white shadow-lg z-50 transition-all duration-200 ${isScrolled ? 'flex justify-center h-16' : 'h-2/6'}`}>
                <div className="relative flex h-3/6 items-center mb-5 mt-10 justify-center">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href='/home'>
                                    <NavigationMenuLink>
                                        <img className={`w-50 h-20 ${isScrolled ? 'hidden' : 'block'}`} src='https://memorabiliadoesporte.com.br/wp-content/uploads/2020/12/MDE-1.jpg' alt="Logo do Memorabília" />
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    {!isMobile && (
                        <div className={`search-container ${isScrolled ? 'hidden' : 'block'}`}>
                            <Input className="search-input" type="text" placeholder="Buscar produtos... " />
                            <button type="submit" className="search-button">
                                <MagnifyingGlassIcon className='size-6' />
                            </button>
                        </div>
                    )}
                </div>

                <div className={`flex justify-center ${isScrolled ? 'fixed top-0 mt-3' : ''}`}>
                    <NavigationMenu className={`bg-white w-full z-50 ${isScrolled ? 'justify-center mt-3/6' : ''}`}>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className='font-poppins font-bold'>Esportes</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                                        <span className='font-poppins font-bold'>Atletas</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={`font-poppins font-bold ${navigationMenuTriggerStyle()}`}>
                                        <span className='font-poppins font-bold'>Miniatura Realista</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={`font-poppins ${navigationMenuTriggerStyle()}`}>
                                        <span className='font-poppins font-bold'>Quadros</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={`font-poppins ${navigationMenuTriggerStyle()}`}>
                                        <span className='font-poppins font-bold'>Jogo das Estrelas</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={`font-poppins ${navigationMenuTriggerStyle()}`}>
                                        <span className=' font-poppins font-bold'>Casa da Moeda do Brasil</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={`font-poppins ${navigationMenuTriggerStyle()}`}>
                                        <span className='font-poppins font-bold'>MDE Social</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={` font-poppins ${navigationMenuTriggerStyle()}`}>
                                        <span className=' font-poppins font-bold'>Parceiros</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/docs">
                                    <NavigationMenuLink className={` font-poppins ${navigationMenuTriggerStyle()}`}>
                                        <span className=' font-poppins font-bold'>Artigos</span>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                        {isLoggedIn ? (
                            <NavigationMenu className='ml-36'>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <Link href="./account">
                                            <NavigationMenuLink className={` font-poppins ${navigationMenuTriggerStyle()}`}>
                                                <span className=' font-poppins font-bold'>Minha Conta</span>
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
                        ) : ( // Se o usuário não estiver autenticado
                            <NavigationMenu className='ml-36 flex'>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <Link href="/login">
                                            <NavigationMenuLink className={`font-poppins ${navigationMenuTriggerStyle()}`}>
                                                <span className='flex font-poppins font-bold'><EnterIcon className='size-5 mr-2' />Login</span>
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        )}
                    </NavigationMenu>
                </div>
            </div>
        </>
    )
}