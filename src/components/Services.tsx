import Image from 'next/image';
import Link from 'next/link';
import Diamond from '../assets/diamond.svg';
import Play from '../assets/play.svg';
import { TitleSections } from './TitleSections';

export function Services() {
    return (
        <section id="services">
            <div className="wrapper flex flex-wrap items-center justify-between py-16">
                <TitleSections title="nossos serviços" />
                <ul className="max-w-2xl md:grid md:grid-cols-2 md:grid-rows-2">
                    <li className="flex gap-7 py-10 md:border-b md:border-r md:border-darkRed md:px-5">
                        <div className="shrink-0">
                            <Image src={Diamond} alt="" className="h-16 w-16" />
                        </div>
                        <div>
                            <h3 className="mb-10 text-2xl text-red">paint correction</h3>
                            <p className="text leading-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-7 py-10 md:border-b md:border-darkRed md:px-5">
                        <div className="shrink-0">
                            <Image src={Diamond} alt="" className="h-16 w-16" />
                        </div>
                        <div>
                            <h3 className="mb-10 text-2xl text-red">paint correction</h3>
                            <p className="text leading-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-7 py-10 md:border-r  md:border-darkRed md:px-5">
                        <div className="shrink-0">
                            <Image src={Diamond} alt="" className="h-16 w-16" />
                        </div>
                        <div>
                            <h3 className="mb-10 text-2xl text-red">paint correction</h3>
                            <p className="text leading-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-7 py-10 md:px-5">
                        <div className="shrink-0">
                            <Image src={Diamond} alt="" className="h-16 w-16" />
                        </div>
                        <div>
                            <h3 className="mb-10 text-2xl text-red">paint correction</h3>
                            <p className="text leading-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </p>
                        </div>
                    </li>
                </ul>

                <div className="flex w-full gap-5 md:justify-center lg:w-64 lg:flex-wrap">
                    <p className="mt-5 hidden text-lg md:block">Faça seu orçamento</p>
                    <Link
                        href="https://wa.me/+5541999740324"
                        target="_blank"
                        className="inline-block rounded-full bg-gradientRed bg-200% px-8 py-4 tracking-widest text-defaultBlack transition-all duration-300 hover:bg-right"
                    >
                        Entre em contato
                        <Image src={Play} alt="" className="ml-2.5 inline-block h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
