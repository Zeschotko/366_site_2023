import Image from 'next/image';
import Logo366 from '../assets/logo366.png';

export function Logo() {
    return (
        <div className="flex items-center gap-2.5">
            <Image src={Logo366} alt="366 Detalhamento Automotivo" className="h-24 w-auto" />
        </div>
    );
}
