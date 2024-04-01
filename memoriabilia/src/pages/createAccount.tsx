import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { EnterIcon } from "@radix-ui/react-icons";
import { Link } from "@radix-ui/react-navigation-menu";
import React from "react";

function CreateAccount() {
    return (
        <div className="flex justify-center mt-72">
            <div className="flex justify-center border rounded-sm shadow-xl p-5 w-3/12 h-6/12">
                <div className="">
                    <span className="font-bold text-xl">
                        Bem vindo(a), Memorabília
                    </span>
                    <form>
                        <div className="mt-5">
                            <label>
                                <span className="text-md font-sans text-emerald-900">Usuário: </span>
                            </label>
                            <Input type="text" placeholder="Nome" />
                        </div>
                        <div className="mt-5">
                            <label>
                                <span className="text-md font-sans text-emerald-900">Data de Nascimento: </span>
                            </label>
                            <Input type="date" />
                        </div>
                        <div className="mt-5">
                            <label>
                                <span className="text-md font-sans text-emerald-900">CPF: </span>
                            </label>
                            <Input type="text" placeholder="000.000.000-00" />
                        </div>
                        <div className="mt-5">
                            <label>
                                <span className="text-md font-sans text-emerald-900">Email: </span>
                            </label>
                            <Input type="email" placeholder="exemplo@email.com" />
                        </div>
                        <div className="mt-5">
                            <label>
                                <span className="text-md font-sans text-emerald-900">Senha: </span>
                            </label>
                            <Input type="password" />
                        </div>
                        <div className="mt-5">
                            <label>
                                <span className="text-md font-sans text-emerald-900">Repetir a Senha: </span>
                            </label>
                            <Input type="password" />
                        </div>
                        <div className="flex justify-start mt-5">
                        </div>
                        <div className="flex justify-center mt-5 ml-5">
                            <Button type="submit"><EnterIcon className='size-5 mr-2' />Criar Conta</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;