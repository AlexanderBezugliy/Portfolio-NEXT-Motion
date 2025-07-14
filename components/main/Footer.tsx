import React from "react";
// import { RxInstagramLogo, RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx";
// import { PiFacebookLogo, PiTelegramLogo } from "react-icons/pi";
// import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] mt-[70px] mb-10">
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full h-full flex items-center justify-center gap-8">
                    {/* Social Media */}
                    {/* <div className="min-w-[200px] h-auto flex flex-col items-center">
                        <div className="font-bold text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            Social Media
                        </div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxInstagramLogo />
                            <Link 
                                href="https://www.instagram.com/bright_sunset_92/"
                                className="text-[15px] ml-[6px]"
                            >
                                Instagram
                            </Link>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <PiTelegramLogo />
                            <span className="text-[15px] ml-[6px]">
                                Telegram
                            </span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <PiFacebookLogo />
                            <span className="text-[15px] ml-[6px]">
                                Facebook
                            </span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">
                                Git Hub
                            </span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">
                                Linkedin
                            </span>
                        </p>
                    </div> */}
                    {/* GOOGLE Maps */}
                    <div className="rounded-2xl border-2 border-purple-600">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1358410.588792526!2d33.62889929474976!3d48.31928018082637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbdc5f62e8eba1%3A0x59cec337be011897!2z0JTQvdC10L_RgNC-0L_QtdGC0YDQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sua!4v1752501182968!5m2!1sru!2sua"
                            width="650"
                            height="280"
                            style={{ border: "0" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-2xl"
                        />
                    </div>
                    {/* Location */}
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            My Location:
                        </div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Ukraine, Dnipro</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a
                                href="tel:+380501044610"
                                className="text-[15px] ml-[6px]"
                            >
                                +38 (050) 104 4610
                            </a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a
                                href="mailto:alexanderbezugliy92@gmail.com"
                                className="text-[15px] ml-[6px]"
                            >
                                alexanderbezugliy92@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
