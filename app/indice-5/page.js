import Image from "next/image";
import image1 from '../../public/logo.png';
import Link from 'next/link'

export default function Indice6() {
    return (
        <main className="flex min-h-screen flex-col items-center pt-[20px] bg-black">
            <div className="">
                <h2 className="font-bold text-[30px] text-center text-white pt-[20px]">Indice pour l&apos;étape suivante</h2>
                <p className="mt-10 px-5 text-[20px] text-center text-white">Terminez votre aventure parmi les fleurs en découvrant les nouveautés et exclusivités de MyCanal. Scannez le QR code à l&apos;entrée pour débuter votre aventure MyCanal et découvrir une introduction spéciale.
                </p>
            </div>
            <Link href="/etape-6" className="text-white text-[20px] bg-[#d90000] hover:bg-[#571818] font-medium rounded-lg px-5 py-2.5  focus:outline-none mt-[40px]">Continuer</Link>

        </main>
    );
}