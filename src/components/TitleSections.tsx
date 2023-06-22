import Image from 'next/image';
import dots from '../assets/dot-grid.png';

export function TitleSections({ title }: { title: string }) {
    return (
        <div className="relative mb-10 w-full ">
            <Image src={dots} alt="" className="absolute bottom-2" />
            <h2 className="relative pl-2.5 text-left text-3xl text-red lg:text-6xl">{title}</h2>
        </div>
    );
}
