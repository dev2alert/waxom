import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import * as React from "react";
import SlickSlider from "react-slick";
import Section from "../Section";
import styles from "./style.scss";

export {default as View} from "./View";

export interface SliderProps {
    backgroundImage?: string;
    children?: React.ReactNode;
}

export default class Slider extends React.Component<SliderProps> {
    public readonly ref: React.RefObject<SlickSlider> = React.createRef();

    public handleNext(): void {
        this.ref.current?.slickNext();
    }

    public handlePrev(): void {
        this.ref.current?.slickPrev();
    }

    public override render(): React.ReactElement {
        const {backgroundImage, children} = this.props;
        const style: any = {};
        if(backgroundImage)
            style["--background-image"] = `url(${JSON.stringify(backgroundImage)})`;
        return <Section 
            className={styles.main}
            style={style}
            container
        >
            <SlickSlider
                ref={this.ref} 
                dots
                customPaging={() => <span className="dot" />}
                nextArrow={<>
                    <button 
                        className="arrow next"
                        onClick={this.handleNext.bind(this)}    
                    />
                </>}
                prevArrow={<>
                    <button 
                        className="arrow prev"
                        onClick={this.handlePrev.bind(this)}    
                    />
                </>}
                initialSlide={1}
                autoplay
                autoplaySpeed={3000}
            >
                {children}
            </SlickSlider>
        </Section>;
    }
}