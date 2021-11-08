import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as React from "react";
import SlickSlider from "react-slick";
import Section from "../Section";
import styles from "./style.scss";

export interface SliderProps {
    backgroundImage?: string;
    children?: React.ReactNode;
}

export default function Slider({backgroundImage, children}: SliderProps): React.ReactElement {
    const style: any = {};
    if(backgroundImage)
        style["--background-image"] = `url(${JSON.stringify(backgroundImage)})`;
    return <Section 
        className={styles.main}
        style={style}
        container
    >
        <SlickSlider>
            {children}
        </SlickSlider>
    </Section>;
}