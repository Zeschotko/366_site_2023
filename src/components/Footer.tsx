import Image from 'next/image';
import Link from 'next/link';

import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
// import { Logo } from './Logo';

export function Footer() {
    return (
        <footer className="flex w-full flex-wrap justify-center px-6 py-6">
            <div>
                <h4 className="mb-2.5 text-lg font-bold">Siga-nós</h4>
                <ul className="mb-10 flex gap-5">
                    <li>
                        <Link
                            href="https://instagram.com/366detalhamentoautomotivo"
                            target="_blank"
                        >
                            <Image src={Instagram} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://instagram.com/366detalhamentoautomotivo"
                            target="_blank"
                        >
                            <Image src={Facebook} alt="" />
                        </Link>
                    </li>
                </ul>
            </div>
            <p className="w-full text-center text-xs text-gray-500">
                made by{' '}
                <Link href="https://sammyz.me" target="_blank">
                    sammyz.me
                </Link>
            </p>
        </footer>
    );
}
