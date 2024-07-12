import Image from "next/image";
import logo from '../public/logo.png';
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[20px] bg-black">
      <div className="">
        <Image
          src={logo}
          alt="Description de l'image"
          className="lg:h-[80px] lg:w-auto lg:mb-[50px]"
        />
        <h2 className="font-bold text-[30px] lg:text-[45px] text-center text-white pt-[20px]">Bienvenue sur le jeux <br />Chasse au trésor</h2>
        <p className="mt-3 px-5 text-[20px] text-center text-white lg:mx-[10%]">Bienvenue à la Chasse au Trésor MyCanal à la Baie des Rois ! Explorez des lieux emblématiques, scannez des QR codes, et découvrez les fonctionnalités et contenus exclusifs de MyCanal. <br /> Prêts à relever le défi et à gagner des récompenses ?</p>
      </div>
      <Link href="/etape-1" className="text-white text-[20px] bg-[#d90000] hover:bg-[#571818] font-medium rounded-lg px-5 py-2.5  focus:outline-none mt-[40px]">Commencer le défis</Link>

    </main>
  );
}