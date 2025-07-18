"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
    return (
        <div className="hidden sm:flex flex-row relative items-center justify-center min-h-screen w-full h-full mb-[70px]">
            <div className="absolute w-auto h-auto top-0 z-[5]">
                <motion.div
                    variants={slideInFromTop}
                    className="text-[40px] font-medium text-center text-gray-200"
                >
                    Performance
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        {" "}
                        &{" "}
                    </span>
                    Security
                </motion.div>
            </div>

            <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
                <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
                    <div className="relative w-[50px] h-[50px]">
                        <Image
                            src="/LockTop.png"
                            alt="Lock top"
                            fill
                            sizes="50px"
                            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11 object-contain"
                        />
                    </div>

                    <div className="relative w-[70px] h-[70px]">
                        <Image
                            src="/LockMain.png"
                            alt="Lock Main"
                            fill
                            sizes="70px"
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
                    <h1 className="Welcome-text text-[12px]">Encryption</h1>
                </div>
            </div>
            <div className="absolute z-[20] bottom-[100px] sm:bottom-[40px] px-[5px]">
                <div className="cursive text-[20px] font-medium text-center text-gray-300">
                    Secure your data with end-to-end encryption
                </div>
            </div>

            <div className="w-full flex items-start justify-center absolute">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    className="w-full h-auto"
                    src="/encryption.webm/"
                />
            </div>
        </div>
    );
};

export default Encryption;
