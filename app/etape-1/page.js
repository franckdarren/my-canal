"use client"
import React, { useState, useRef } from "react";
import Link from 'next/link';
import Image from "next/image";
import qrcode from '../../public/qrcode.jpeg';
import { QrReader } from "react-qr-reader";

export default function Etape1() {
    const [data, setData] = useState("No result");

    return (
        <div className="flex min-h-screen flex-col items-center pt-[20px] bg-black">
            <h1 className="font-bold text-whitefont-bold text-[30px] text-center text-white pt-[5px]">Arrêt 1</h1>
            <h2 className="font-bold text-[20px] text-center text-white pt-[20px] px-3">Scannez le QR code à l&apos;entrée pour débuter votre aventure MyCanal et découvrir une introduction spéciale.</h2>
            <div className="mx-auto mt-9">
                {/* <Image
                    src={qrcode}
                    alt="Description de l'image"
                    className="lg:h-[300px] lg:w-auto lg:mt-[20px]"
                /> */}
                <div className="lg:h-[300px] lg:w-auto lg:mt-[20px]">
                    <QrReader
                        onResult={(result, error) => {
                            if (!!result) {
                                setData(result?.text);
                            }

                            if (!!error) {
                                console.info(error);
                            }

                        }
                        }
                        //this is facing mode : "environment " it will open backcamera of the smartphone and if not found will 
                        // open the front camera
                        constraints={{ facingMode: "environment" }}
                        style={{ width: "40%", height: "40%" }}
                    />
                </div>
                <p className="text-white">{data}</p>
            </div>
            <Link href="/video-1" className="text-white text-[20px] bg-[#d90000] hover:bg-[#571818] font-medium rounded-lg px-5 py-2.5  focus:outline-none mt-[40px]">Continuer le défis</Link>
        </div>
    );
}