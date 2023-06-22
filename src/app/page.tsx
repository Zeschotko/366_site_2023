import { AboutUs } from '@/components/About';
import { Banner } from '@/components/Banner';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Services } from '@/components/Services';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Header />
            <Banner />
            <Services />
            <AboutUs />
            <Contact />
            <Footer />
        </main>
    );
}
