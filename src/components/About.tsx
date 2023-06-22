import Image from 'next/image';
import About from '../assets/about.svg';
import { TitleSections } from './TitleSections';

export function AboutUs() {
    return (
        <section className="w-full bg-black py-16 md:px-10">
            <div className="wrapper">
                <TitleSections title="sobre nós" />
                <div className="lg:flex lg:gap-20">
                    <Image src={About} alt="" />
                    <hr className="my-10 w-48 border-solid border-white/20 lg:hidden" />
                    <p className="text-lg leading-7 text-white lg:border-l lg:border-darkRed/50 lg:px-20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </div>
            </div>
        </section>
    );
}
