'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from 'react-intersection-observer'


interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}
const SkillDataProvider = ({ src, width, height, index }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const animationDelay = 0.3;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}

            className="relative"
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            <Image 
                src={src} 
                fill
                sizes={`${width}px`} 
                alt="skill image" 
                className="object-contain"
            />
        </motion.div>
    );
};

export default SkillDataProvider;
