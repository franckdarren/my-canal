import Link from 'next/link';
import Image from "next/image";
import qrcode from '../../public/qrcode.jpeg'

export default function Etape4() {
    return (
        <div className="flex min-h-screen flex-col items-center pt-[20px] bg-black">
            <h1 className="font-bold text-whitefont-bold text-[30px] text-center text-white pt-[5px]">Arrêt 4</h1>
            <h2 className="font-bold text-[20px] text-center text-white pt-[20px] px-3">Parmi les étals colorés, trouvez celui avec des produits MyCanal et scannez le QR code pour découvrir des programmes à venir.</h2>
            <div className="mx-auto mt-9">
                <Image
                    src={qrcode}
                    alt="Description de l'image"
                    className="lg:h-[300px] lg:w-auto lg:mt-[20px]"
                />
            </div>
            <Link href="/video-4" className="text-white text-[20px] bg-[#d90000] hover:bg-[#571818] font-medium rounded-lg px-5 py-2.5  focus:outline-none mt-[40px]">Continuer le défis</Link>


        </div>
    );
}