import { InstagramLogoIcon } from "@radix-ui/react-icons";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <div className=" bg-black w-full h-96 transition-all duration-200">
                <div className="flex justify-center w-3/6 m-20">
                    <div>
                        <img className="flex size-40 mt-12" src="https://memorabiliadoesporte.com.br/wp-content/uploads/2020/12/logo-branca.png">
                        </img>
                        <div className="flex justify-center mt-6">
                            <a><FaInstagram className="bg-white size-8" /></a>
                            <a><FaFacebook className="bg-white size-8" /></a>
                        </div>
                    </div>
                    <div className="mt-12 m-10">
                        <span className=" text-white text-3xl">
                            Memoriabilia
                        </span>
                        <ul className="mt-6">
                            <li className="text-white">Fale Conosco</li>
                            <li className="text-white">Quem Somos</li>
                            <li className="text-white">Selo Sportsbilia</li>
                            <li className="text-white">Parceiros</li>
                        </ul>
                    </div>
                    <div className=" mt-12">
                        <span className=" text-white text-3xl">
                            Minha conta
                        </span>
                        <ul className="mt-6">
                            <li className="text-white">Minha conta</li>
                            <li className="text-white">Endereços</li>
                            <li className="text-white">Recuperar senha</li>
                            <li className="text-white"></li>
                        </ul>

                    </div>
                    <div className=" mt-12 m-10">
                        <span className=" text-white text-3xl">
                           Política
                        </span>
                        <ul className="mt-6">
                            <li className="text-white">Política de Privacidade</li>
                            <li className="text-white">Trocas / Arrependimento</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;