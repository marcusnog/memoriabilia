import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { EnterIcon } from "@radix-ui/react-icons";
import { Link } from "@radix-ui/react-navigation-menu";
import React, { useState } from "react";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch('http://ec2-3-145-6-44.us-east-2.compute.amazonaws.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (!response.ok) {
                throw new Error('Failed to log in');
            }
            const data = await response.json();
            localStorage.setItem('token', data.token); 
            window.location.href = '/'; 
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="flex justify-center mt-72">
            <div className="w-full md:w-3/12 flex justify-center border rounded-sm shadow-xl p-5 h-6/12">
                <div className="">
                    <span className="font-bold text-xl">
                        Bem vindo(a), Memorabília
                    </span>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-5">
                            <label>
                                <span className="text-md font-sans text-emerald-900">Usuário: </span>
                            </label>
                            <Input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mt-5">
                            <label>
                                <span className="text-md font-sans text-emerald-900">Senha: </span>
                            </label>
                            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="text-blue-500 mt-5">
                            <a href="#">Esqueceu a senha?</a>
                        </div>
                        <div className="flex p-10">
                            <div className="flex justify-start mt-5">
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <Link href="/createAccount">
                                                <NavigationMenuLink>
                                                    <p className="border rounded-md bg-black text-white font-semibold text-sm p-2 hover:animate-pulse">Criar Conta</p>
                                                </NavigationMenuLink>
                                            </Link>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>
                            <div className="flex justify-end mt-5 ml-5">
                                <Button type="submit"><EnterIcon className='size-5 mr-2' />Entrar</Button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
