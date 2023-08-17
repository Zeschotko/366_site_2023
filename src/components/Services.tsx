import Image from 'next/image';
import Link from 'next/link';
import Diamond from '../assets/diamond.svg';
import Play from '../assets/play.svg';
import { TitleSections } from './TitleSections';

export function Services() {
    return (
        <section id="services">
            <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between px-5 py-16">
                <TitleSections title="nossos serviços" />
                <ul className="max-w-5xl md:grid md:grid-cols-3 md:grid-rows-2">
                    <li className="flex gap-7 py-10 md:border-b md:border-r md:border-darkRed md:px-5">
                        <div className="shrink-0">
                            <Image src={Diamond} alt="" className="h-16 w-16" />
                        </div>
                        <div>
                            <h3 className="mb-10 text-2xl text-red">vitrificação 9H</h3>
                            <p className="text leading-6">
                                Ceramic coating 9H protege veículo contra danos (UV, chuva ácida,
                                dejetos de pássaros, seivas). Realça beleza e brilho.
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-7 py-10 md:border-b md:border-darkRed md:px-5">
                        <div className="shrink-0">
                            <Image src={Diamond} alt="" className="h-16 w-16" />
                        </div>
                        <div>
                            <h3 className="mb-10 text-2xl text-red">polimento</h3>
                            <p className="text leading-6">
                                O polimento automotivo visa nivelar verniz, remover defeitos,
                                manchas, oxidação. Tipos: comercial e técnico.
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-7 py-10 md:border-b md:border-l md:border-darkRed md:px-5">
                        <div className="shrink-0">
                            <Image src={Diamond} alt="" className="h-16 w-16" />
                        </div>
                        <div>
                            <h3 className="mb-10 text-2xl text-red">higienização</h3>
                            <p className="text leading-6">
                                Higienização automotiva interna: vapor, anti-bactericida e
                                Oxi-sanatização eliminam impurezas e desinfetam o ambiente do
                                motorista
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-7 py-10 md:border-r md:border-darkRed md:px-5">
                        <div className="shrink-0">
                            <Image src={Diamond} alt="" className="h-16 w-16" />
                        </div>
                        <div>
                            <h3 className="mb-10 text-2xl text-red">oxi-sanitização</h3>
                            <p className="text leading-6">
                                Ozônio elimina odores, sanitiza ambiente, oxida microorganismos
                                prejudiciais. Previne doenças respiratórias e ajuda rinites
                                alérgicas.
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-7 py-10 md:border-r md:border-darkRed md:px-5">
                        <div className="shrink-0">
                            <Image src={Diamond} alt="" className="h-16 w-16" />
                        </div>
                        <div>
                            <h3 className="mb-10 text-2xl text-red">cristalização</h3>
                            <p className="text leading-6">
                                Aplicação de cera cristalizadora protege carro, evita danos, realça
                                brilho intenso e elimina marcas (swirls) na pintura.
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-7 py-10 md:px-5">
                        <div className="shrink-0">
                            <Image src={Diamond} alt="" className="h-16 w-16" />
                        </div>
                        <div>
                            <h3 className="mb-10 text-2xl text-red">lavagem detalhada</h3>
                            <p className="text leading-6">
                                Lavagem em 7 etapas: extremidades, geral, secagem, aspiração,
                                limpeza, vidros e pneus. Elimina toda a sujeira do veículo.
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
