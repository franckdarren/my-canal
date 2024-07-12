import Link from 'next/link'

export default function Etape2() {
    return (
        <div className="flex min-h-screen flex-col items-center pt-[20px] bg-black">
            <h1 className="font-bold text-whitefont-bold text-[30px] text-center text-white pt-[5px]">Arrêt 2</h1>
            <h2 className="font-bold text-[20px] text-center text-white pt-[20px] px-3">Depuis ce point de vue, imaginez regarder vos films et séries préférés sur MyCanal. </h2>
            <div className="mx-auto mt-9">
                <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="600" height="600" style={{ fill: '#d8d2d2', strokeWidth: 3, stroke: 'white' }} />
                </svg>
            </div>
            <Link href="/video-2" className="text-white text-[20px] bg-[#d90000] hover:bg-[#571818] font-medium rounded-lg px-5 py-2.5  focus:outline-none mt-[40px]">Continuer le défis</Link>


        </div>
    );
}