import Image from 'next/image';
import Link from 'next/link';

import Instagram from '../assets/instagram.svg';
import { Logo } from './Logo';

export function Header() {
    return (
        <header className="w-full py-3">
            <div className="wrapper flex w-full items-center justify-between lg:!px-0">
                <Logo />

                <ul className="flex gap-5">
                    <li>
                        <Link
                            href="https://instagram.com/366detalhamentoautomotivo"
                            target="_blank"
                        >
                            <Image src={Instagram} alt="" className="w-7" />
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            href="https://instagram.com/366detalhamentoautomotivo"
                            target="_blank"
                        >
                            <Image src={Facebook} alt="" className="w-7" />
                        </Link>
                    </li> */}
                </ul>
            </div>
        </header>
    );
}
