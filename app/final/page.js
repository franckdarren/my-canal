import Link from 'next/link';
import Image from "next/image";
import felicitation from '../../public/congratulations-7600_512.gif'

export default function Final() {
    return (
        <div className="flex min-h-screen flex-col items-center pt-[50px] bg-black">
            <h1 className="font-bold text-whitefont-bold text-[30px] text-center text-white pt-[5px]">Félicitations</h1>
            <h2 className="font-bold text-[20px] text-center text-white pt-[20px] px-3">Rendez-vous près du stand CANAL+ pour recevoir votre récompense. </h2>
            <Image
                src={felicitation}
                alt="Description de l'image"
                className="h-[400px] my-auto"
            />
        </div>

    );
}