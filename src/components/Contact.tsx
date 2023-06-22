import Image from 'next/image';
import { Form } from './Form';
import { TitleSections } from './TitleSections';

import Location from '../assets/location.svg';
import Mail from '../assets/mail.svg';
import Phone from '../assets/phone.svg';

export function Contact() {
    return (
        <section className="flex flex-wrap py-16">
            <div className="wrapper">
                <TitleSections title="entre em contato" />
                <div className="flex w-full flex-wrap gap-10">
                    <Form />
                    <ul className="lg:order-2 lg:w-5/12">
                        <li className="mb-10 flex items-center gap-5">
                            <Image src={Mail} alt="" className="h-10 w-10" />
                            <p className="text-xs md:text-lg">
                                366detalhamentoautomotivo@gmail.com
                            </p>
                        </li>
                        <li className="mb-10 flex items-center gap-5">
                            <Image src={Phone} alt="" className="h-10 w-10" />
                            <p className="text-sm md:text-lg">(41) 99974-0324</p>
                        </li>
                        <li className="flex items-center gap-5">
                            <Image src={Location} alt="" className="h-10 w-10" />
                            <p className="text-sm md:text-lg">
                                Av. Winston Churchill, 366 - Capão Raso, Curitiba, PR - 81130-000
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
