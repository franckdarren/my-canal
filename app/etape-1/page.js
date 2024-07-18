"use client"
import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { useRouter } from 'next/navigation';

export default function Etape1() {
    const [data, setData] = useState("No result");
    const router = useRouter();
    const test1 = "EtapeSuivante";

    useEffect(() => {
        if (data === test1) {
            router.push("/video-1");
        }
    }, [data, test1, router]);

    return (
        <div className="flex min-h-screen flex-col items-center pt-[20px] bg-black">
            <h1 className="font-bold text-whitefont-bold text-[30px] text-center text-white pt-[5px]">Arrêt 1</h1>
            <h2 className="font-bold text-[20px] text-center text-white pt-[20px] px-3">Scannez le QR code à l&apos;entrée pour débuter votre aventure MyCanal et découvrir une introduction spéciale.</h2>
            <div className="mx-auto mt-9">
                <div className="lg:h-[300px] lg:w-auto lg:mt-[20px] bg-white">
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
            </div>
        </div>
    );
}