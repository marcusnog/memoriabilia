import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EnterIcon } from "@radix-ui/react-icons";
import React from "react";

function CreateAccount() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        country: '',
        identifier: '',
        phone: '',
        birth_date: '',
        email: '',
        password: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/api/user/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Ajuste conforme necessário, por exemplo, redirecionamento ou exibição de mensagem de sucesso
                console.log('Usuário criado com sucesso!');
                window.location.href = '/login';
            } else {
                console.error('Erro ao criar usuário:', response.statusText);
            }
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
        }
    };

    return (
        <div className="flex justify-center mt-72">
            <div className="flex justify-center border rounded-sm shadow-xl p-5 w-3/12 h-6/12">
                <div className="">
                    <span className="font-bold text-xl">
                        Bem vindo(a), Memorabília
                    </span>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-5">
                            <label>
                                <span className="text-md font-sans text-emerald-900">Nome: </span>
                            </label>
                            <Input
                                type="text"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleChange}
                                placeholder="Nome"
                            />
                        </div>
                        <div className="mt-5">
                            <label>
                                <span className="text-md font-sans text-emerald-900">Sobrenome: </span>
                            </label>
                            <Input
                                type="text"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleChange}
                                placeholder="Sobrenome"
                            />
                        </div>
                        <div className="mt-5">
                            <label>
                                <span className="text-md font-sans text-emerald-900">País: </span>
                            </label>
                            <Input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="País"
                            />
                        </div>
                        <div className="mt-5">
                            <label>
                                <span className="text-md font-sans text-emerald-900">Identificador: </span>
                            </label>
                            <Input
                                type="text"
                                name="identifier"
                                value={formData.identifier}
                                onChange={handleChange}
                                placeholder="Identificador"
                            />
                        </div>
                        <div className="mt-5">
                            <label>
                                <span className="text-md font-sans text-emerald-900">Telefone: </span>
                            </label>
                            <Input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Telefone"
                            />
                        </div>
                        <div className="mt-5">
                            <label>
                                <span className="text-md font-sans text-emerald-900">Data de Nascimento: </span>
                            </label>
                            <Input
                                type="date"
                                name="birth_date"
                                value={formData.birth_date}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mt-5">
                            <label>
                                <span className="text-md font-sans text-emerald-900">Email: </span>
                            </label>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="exemplo@email.com"
                            />
                        </div>
                        <div className="mt-5">
                            <label>
                                <span className="text-md font-sans text-emerald-900">Senha: </span>
                            </label>
                            <Input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex justify-center mt-5 ml-5">
                            <Button type="submit"><EnterIcon className='size-5 mr-2' />Criar Conta</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;
