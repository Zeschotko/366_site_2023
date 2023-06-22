import Image from 'next/image';
import Link from 'next/link';
import placeholder from '../assets/placeholder.jpg';
import placeholder02 from '../assets/placeholder_02.jpg';

export function Banner() {
    return (
        <section className="flex flex-wrap justify-center gap-5 pt-16 md:flex-nowrap">
            <div className="mb-16 max-w-sm lg:max-w-md">
                <h2 className="mb-4 text-5xl text-red">
                    Cuidar do seu carro nunca foi tão <span className="text-white">fácil.</span>
                </h2>
                <p className="mb-10 text-2xl leading-10">
                    Nós fornecemos serviços de detalhamento de alta qualidade
                </p>
                <Link
                    href="#services"
                    className="inline-block rounded-full bg-gradientRed bg-200% px-8 py-4 text-defaultBlack transition-all duration-300 hover:bg-right"
                >
                    Nossos Serviços
                </Link>
            </div>

            <ul className="flex max-w-full items-start gap-4 md:max-w-sm lg:max-w-md xl:max-w-2xl">
                <li className="w-1/2 pt-10">
                    <Image
                        src={placeholder}
                        alt=""
                        className="h-60 rounded-2xl object-cover object-center"
                    ></Image>
                </li>
                <li className="w-1/2">
                    <Image
                        src={placeholder02}
                        alt=""
                        className="mb-5 h-44 w-4/5 rounded-2xl object-cover object-center"
                    ></Image>
                    <Image
                        src={placeholder}
                        alt=""
                        className="h-48 w-full rounded-2xl object-cover object-center"
                    ></Image>
                </li>
            </ul>
        </section>
    );
}
