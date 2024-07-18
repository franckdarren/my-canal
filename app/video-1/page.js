"use client"

import Image from "next/image";
import Link from 'next/link';
import Video from 'next-video';
import video1 from '/videos/creer-compte.mp4';
import { useState, useEffect } from 'react';


export default function Video1() {
    const [isLinkDisabled, setIsLinkDisabled] = useState(true);

    useEffect(() => {
        const videoElement = document.getElementById('myVideo');

        const handleVideoEnded = () => {
            setIsLinkDisabled(false);
        };

        videoElement.addEventListener('ended', handleVideoEnded);

        // Nettoyer l'écouteur d'événement lors du démontage du composant
        return () => {
            videoElement.removeEventListener('ended', handleVideoEnded);
        };
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center pt-[20px]">
            <div className="">
                <Video src={video1}
                    className="lg:h-[400px] lg:w-auto lg:mt-[20px]"
                    id="myVideo"
                />
            </div>

            <Link href="/indice-1" className={`text-white text-[20px] bg-[#d90000] hover:bg-[#571818] font-medium rounded-lg px-5 py-2.5 focus:outline-none mt-[40px] ${isLinkDisabled ? 'pointer-events-none opacity-20' : ''
                }`}>Continuer</Link>
        </main>
    );
}