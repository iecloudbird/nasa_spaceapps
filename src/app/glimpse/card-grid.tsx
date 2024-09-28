import React, { useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import Image from "next/image";
import { OverviewImages, RevisitImages, MomentsImages, PhotoWallImages, VolunteerImages } from "./glimpse.dto";
import router, { useRouter } from "next/router";
import Slider from "react-slick";
import Code from "@/assets/images/general/landing-page/Code.png"
import PlayButon from "@/assets/images/general/landing-page/glimpse/playbutton.png"

const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
    cssEase: "ease-out",
    swipe: false,
    draggable: false,
};
// navigate to old website
interface CountUpProps {
    target: number;
    className?: string;
    suffix?: string;
    duration?: number;
    decimals?: number;
}

export const CardGrid = () => {
    const CountUp = ({ target, className, suffix = "", duration = 3, decimals = 0 }: CountUpProps) => {
        const [value, setValue] = useState(0);
        const [hasReachedTarget, setHasReachedTarget] = useState(false);

        useEffect(() => {
            const controls = animate(0, target, {
                duration: duration,
                onUpdate: (v) => setValue(parseFloat(v.toFixed(decimals))),
                onComplete: () => setHasReachedTarget(true), // Stop animation when the count reaches the target
            });

            return () => controls.stop(); // Cleanup animation on unmount
        }, [target]);

        return (
            <motion.h3
                className={className}
                initial={{ y: 10, opacity: 0 }}
                animate={hasReachedTarget ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
            >
                {value}{suffix}
            </motion.h3>
        );
    };
    return (
        <div className="overflow-hidden gap-8">
            <div className="flex mb-4 gap-8">
                <div className="flex flex-col w-2/5 gap-8">
                    {/*Overview: Block 1 */}
                    <div className="bg-gray-800 h-fit rounded-2xl border border-transparent justify-start text-start items-start">
                        <div className="bg-hackathone-font-rocket-red rounded-md border w-fit m-6 justify-center">
                            <motion.button
                                className="bg-hackathone-font-rocket-red rounded-md border justify-center ease-in-out"
                                whileHover={{
                                    scale: 1.1,
                                }}
                                whileTap={{
                                    scale: 0.9,
                                }}
                            >
                                <span className="block text-hackathoneCabinetGrotesk text-black text-lg font-bold px-4 py-2">Overview</span>
                            </motion.button>
                        </div>
                        <div className="flex flex-row justify-center items-start gap-4 pb-4">
                            <div className="w-1/3 mx-4">
                                <CountUp target={15} suffix="+" duration={2} className="text-[3rem] font-bold" />
                                <p className="">Subject Matter Expert mentors</p>
                            </div>
                            <div className="w-1/3">
                                <CountUp target={140} suffix="+" duration={5} className="text-[3rem] font-bold" />
                                <p >Participants</p>
                            </div>
                            <div className="w-1/3">
                                <CountUp target={2.5} suffix="k" duration={4} decimals={1} className="text-[3rem] font-bold" />                                <p>Cash Prize</p>
                            </div>
                        </div>
                    </div>
                    {/*Revisit: Block 2 */}
                    <div className="bg-gray-800 h-fit rounded-2xl border border-4  border-black justify-start text-start items-start relative overflow-hidden">
                        {/* Image as background cover */}
                        <Image
                            src={Code}
                            alt="Code"
                            layout="fill"  // Ensures the image scales with the parent div size
                            objectFit="cover"    // Ensures the image covers the container without distortion
                            className="rounded-t-2xl"  // Add rounded corners to match the parent div
                        />
                        {/* Content */}
                        <div className="relative z-10">
                            <div className="bg-hackathone-font-rocket-red rounded-md border w-fit m-6 justify-center">
                                <motion.button
                                    className="bg-hackathone-font-rocket-red rounded-md border justify-center ease-in-out"
                                    whileHover={{
                                        scale: 1.1,
                                    }}
                                    whileTap={{
                                        scale: 0.9,
                                    }}
                                >
                                    <span className="block text-hackathoneCabinetGrotesk text-black text-lg font-bold px-4 py-2">Revisit</span>
                                </motion.button>
                            </div>
                        </div>
                        {/* Text */}
                        <div className="relative flex justify-between items-end z-10">
                            <div className="text-start justify-bottom text-start px-6">
                                <p className="text-[2.5rem] leading-tight font-bold py-4"><span className="text-hackathone-font-rocket-red">Hackath</span>l<span className="text-hackathone-font-rocket-red">on</span>e <span className="block">2023</span></p>
                            </div>
                            <div className="p-4">
                                <motion.button
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-white rounded-full border p-4 hover:bg-hackathone-font-rocket-red transition duration-300 ease-in-out"
                                    onClick={() =>
                                        window.open(
                                            "https://66b8783ce930a118fc45939c--voluble-conkies-fba672.netlify.app/",
                                            "_blank"
                                        )
                                    }
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-6 text-black">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Block 3: Moments to relive */}
                <div className="w-3/5 bg-gray-800 h-[500px] rounded-2xl border border-4 border-black relative overflow-hidden">
                    <Slider {...settings} className="absolute inset-0 z-0">
                        {PhotoWallImages.map((item, index) => (
                            <div key={index} className="relative w-full h-full">
                                <div className="relative w-full h-full">
                                    <Image
                                        className="rounded-2xl lg:h-[500px] h-[300px] object-cover w-full h-full"
                                        src={item.img}
                                        alt={"Moments"}
                                    ></Image>
                                    {/* Image and shadow overlay */}
                                    <div className="absolute inset-0 bg-black opacity-50 rounded-2xl z-10"></div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className="absolute z-10 top-6 left-6">
                        <motion.button
                            className="bg-hackathone-font-rocket-red rounded-md border justify-center ease-in-out"
                            whileHover={{
                                scale: 1.1,
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                        >
                            <span className="block text-hackathoneCabinetGrotesk text-black text-lg font-bold px-4 py-2">Moments to relive</span>
                        </motion.button>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center z-5">
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="rounded-2xl"
                        >
                            <Image
                                className="rounded-2xl"
                                width={60}
                                height={60}
                                src={PlayButon}
                                alt="Play Button"
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
            <div className="flex flex-row mt-8 gap-8">
                {/* Block 4: PhotoWall */}
                <div className="w-3/5 bg-gray-800 h-96 rounded-2xl border border-4 border-black relative overflow-hidden">
                    {/* <Image
                        src={Participants}
                        alt="Participants"
                        layout="fill"  // Ensures the image scales with the parent div size
                        objectFit="cover"    // Ensures the image covers the container without distortion
                        className="rounded-t-2xl"  // Add rounded corners to match the parent div
                    /> */}

                    <Slider {...settings} className="absolute inset-0 z-0">
                        {PhotoWallImages.map((item, index) => (
                            <div key={index} className="relative w-full h-full">
                                <Image
                                    className="rounded-2xl lg:h-[400px] h-[300px] w-full h-full object-cover"
                                    src={item.img}
                                    alt={"Participants"}
                                ></Image>
                            </div>
                        ))}
                    </Slider>
                    <div className="absolute z-10 top-6 left-6">
                        <motion.button
                            className="bg-hackathone-font-rocket-red rounded-md border justify-center ease-in-out"
                            whileHover={{
                                scale: 1.1,
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                        >
                            <span className="block text-hackathoneCabinetGrotesk text-black text-lg font-bold px-4 py-2">PhotoWall</span>
                        </motion.button>
                    </div>
                </div>
                {/* Block 5 : Volunteer */}
                <div className="w-2/5 bg-gray-800 h-96 rounded-2xl border border-4  border-black justify-start text-start items-start relative overflow-hidden">
                    {/* Image as background cover */}
                    <Slider {...settings} className="absolute inset-0 z-0">
                        {VolunteerImages.map((item, index) => (
                            <div key={index} className="relative w-full h-full">
                                <Image
                                    className="rounded-2xl lg:h-[400px] h-[300px] w-full h-full object-cover"
                                    src={item.img}
                                    alt={"Volunteers"}
                                />
                            </div>
                        ))}
                    </Slider>
                    <div className="absolute z-10 top-6 left-6">
                        <motion.button
                            className="bg-hackathone-font-rocket-red rounded-md border justify-center ease-in-out"
                            whileHover={{
                                scale: 1.1,
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                        >
                            <span className="block text-hackathoneCabinetGrotesk text-black text-lg font-bold px-4 py-2">Volunteer</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};
