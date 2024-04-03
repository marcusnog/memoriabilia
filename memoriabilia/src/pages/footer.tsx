import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

function Footer() {

    return (
        <>
            <div className=" bottom-0 bg-black w-full h-72 transition-all duration-200">
                <div className="flex justify-center w-3/6 m-20">
                    <div>
                        <img alt="logo" className="flex size-40 mt-12" src="https://memorabiliadoesporte.com.br/wp-content/uploads/2020/12/logo-branca.png">
                        </img>
                        <div className="flex justify-center mt-6 border rounded-lg bg-white">
                            <a href="https://www.instagram.com/memorabiliadoesporte/"><FaInstagram className="size-8 hover:animate-pulse" /></a>
                            <a href="https://www.facebook.com/memorabiliadoesporte"><FaFacebook className="size-8 hover:animate-pulse" /></a>
                        </div>
                    </div>
                    <div className="hidden md:flex">
                    <div className="mt-12 m-10">
                        <span className=" text-white text-3xl">
                            Memorabília
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
                    <div className="mt-12 m-10">
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
            </div>
        </>
    )
}

export default Footer;