import * as React from "react";
import Slider from "react-slick";
import {makeObservable, action, observable} from "mobx";
import {observer} from "mobx-react";
import Section, {Title, Paragraph as P} from "../../common/Main/Section";
import List from "./List";
import styles from "./style.scss";

@observer
export default class RecentPosts extends React.Component {
    public readonly sliderRef: React.RefObject<Slider> = React.createRef();

    public currentSlide?: number;
    public arrowPrevActive: boolean = false;
    public arrowNextActive: boolean = true;

    constructor(props: {}) {
        super(props);
        makeObservable(this, {
            arrowPrevActive: observable,
            arrowNextActive: observable,
            handleSlideAfterChange: action
        });
    }

    public getCount(): number {
        if(screen.width <= 1100 && screen.width > 750)
            return 2;
        else if(screen.width <= 750)
            return 1;
        else return 3;
    }

    public isStart(currentSlide: number): boolean {
        return currentSlide === 0;
    }

    public isEnd(currentSlide: number): boolean {
        return currentSlide === this.getSlideCount() - this.getCount();
    }

    public getSlideCount(): number {
        return (this.sliderRef.current as any)?.innerSlider.state.slideCount;
    }

    public getCurrentSlide(): number {
        return this.currentSlide ?? 0;
    }

    public handleSlideAfterChange(currentSlide: number): void {
        this.currentSlide = currentSlide;
        this.arrowPrevActive = !this.isStart(currentSlide);
        this.arrowNextActive = !this.isEnd(currentSlide);
    }

    public handleSliderPrev(): void {
        this.sliderRef.current?.slickPrev();
    }

    public handleSliderNext(): void {
        if(this.isEnd(this.getCurrentSlide()))
            return;
        this.sliderRef.current?.slickNext();
    }

    public override render(): React.ReactElement {
        const arrowPrevClassList: string[] = ["arrow", "prev"];
        if(this.arrowPrevActive)
            arrowPrevClassList.push("active");
        const arrowNextClassList: string[] = ["arrow", "next"];
        if(this.arrowNextActive)
            arrowNextClassList.push("active");
        return <Section className={styles.main} container>
            <Title type={2} size={30} center>Recent Posts.</Title>
            <P type={2} width={757} size={16} center>
                Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.
            </P>
            <List sliderRef={this.sliderRef} onAfterChange={this.handleSlideAfterChange.bind(this)} />
            <div className="arrows">
                <button className={arrowPrevClassList.join(" ")} onClick={this.handleSliderPrev.bind(this)}>
                    <svg className="icon" width="23" height="23" viewBox="1.003 1.026 21.969 21.969">
                        <path d="M8.583 11.434l4.772-4.773a.737.737 0 0 1 1.04 1.041l-4.254 4.255 4.254 4.254a.736.736 0 0 1-1.04 1.04L8.583 12.48a.73.73 0 0 1-.216-.523c0-.19.07-.378.216-.523zm3.404-10.408c6.066 0 10.985 4.917 10.985 10.985 0 6.065-4.919 10.984-10.985 10.984S1.003 18.076 1.003 12.01c0-6.068 4.918-10.985 10.984-10.985zm0 20.497c5.245 0 9.514-4.27 9.514-9.512 0-5.246-4.269-9.514-9.514-9.514-5.244 0-9.512 4.268-9.512 9.514 0 5.242 4.268 9.512 9.512 9.512z" />
                    </svg>
                </button>
                <button className={arrowNextClassList.join(" ")} onClick={this.handleSliderNext.bind(this)}>
                    <svg className="icon" width="23" height="23" viewBox="1.028 1.026 21.969 21.969">
                        <path d="M15.417 11.434l-4.772-4.773a.737.737 0 0 0-1.04 1.041l4.254 4.255-4.254 4.254a.736.736 0 0 0 1.04 1.04l4.772-4.771a.73.73 0 0 0 .216-.523c0-.19-.07-.378-.216-.523zM12.012 1.026c-6.066 0-10.984 4.917-10.984 10.985 0 6.065 4.918 10.984 10.984 10.984 6.067 0 10.985-4.919 10.985-10.984 0-6.068-4.918-10.985-10.985-10.985zm0 20.497c-5.244 0-9.513-4.27-9.513-9.512 0-5.246 4.269-9.514 9.513-9.514 5.245 0 9.513 4.268 9.513 9.514 0 5.242-4.268 9.512-9.513 9.512z" />
                    </svg>
                </button>
            </div>
        </Section>;
    }
}