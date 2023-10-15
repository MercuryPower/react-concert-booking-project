import React from 'react';
import {motion, Variants} from "framer-motion";
import {ReactComponent as Arrow} from "../../assets/svg/arrow1.svg";

interface SliderArrowsProps {
    textAnimation:Variants;
    prevSlide:() => void;
    nextSlide:() => void;
}
const SliderArrows = ({textAnimation, prevSlide, nextSlide}: SliderArrowsProps) => {
    return (
        <>
            <motion.div custom={2} variants={textAnimation} onClick={prevSlide}>
                <Arrow
                    className={'slider-arrow-prev'}
                    width={50}
                    height={50}
                />
            </motion.div>
            <motion.div custom={2} variants={textAnimation} onClick={nextSlide}>
                <Arrow
                    className={'slider-arrow-next'}
                    width={50}
                    height={50}
                />
            </motion.div>
        </>
    );
};

export default SliderArrows;