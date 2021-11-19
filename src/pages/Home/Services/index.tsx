import * as React from "react";
import Section, {Title, Paragraph as P} from "../../common/Main/Section";
import styles from "./style.scss";

export default function Services(): React.ReactElement {
    return <Section className={styles.main} container>
        <div className="services">
            <div className="service">
                <svg className="icon" width="50px" height="50px">
                    <path d="M48.668 18.47a1.587 1.587 0 0 0-2.248 0L32.573 32.314l-19.467 8.573-3-3 8.577-19.465L32.527 4.576a1.59 1.59 0 1 0-2.248-2.249L16.01 16.591 1.534 49.463l32.868-14.478 14.266-14.268a1.588 1.588 0 0 0 0-2.247zM28.495 29.466a1.594 1.594 0 0 0 2.25 0l13.332-13.332a1.587 1.587 0 0 0 0-2.25 1.585 1.585 0 0 0-2.25 0L28.495 27.217c-.62.62-.62 1.627 0 2.25zm-3.48-3.48a1.592 1.592 0 0 0 2.25 0l13.333-13.333a1.59 1.59 0 1 0-2.25-2.25L25.015 23.735a1.592 1.592 0 0 0 0 2.25zm-3.48-3.484c.31.312.718.466 1.124.466.406 0 .814-.154 1.125-.466l13.333-13.33a1.588 1.588 0 0 0 0-2.25 1.586 1.586 0 0 0-2.25 0L21.534 20.253c-.62.62-.62 1.63 0 2.25z" />
                </svg>
                <Title type={2} center>Web & App Design</Title>
                <P type={2} center>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</P>
                <div className="line" />
            </div>
            <div className="service active">
                <svg className="icon" width="45px" height="41px">
                    <path d="M22.85 1.106L1.415 12.666 22.85 24.227l21.436-11.561-21.436-11.56zm0 26.852L5.4 18.548l-3.985 2.149L22.85 32.253l21.436-11.556-3.985-2.15-17.451 9.41zm0 8.027L5.4 26.573l-3.985 2.148L22.85 40.283l21.436-11.562-3.985-2.148-17.451 9.412z" />
                </svg>
                <Title type={2} center>Development</Title>
                <P type={2} center>Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</P>
                <div className="line" />
            </div>
            <div className="service">
                <svg className="icon" width="45px" height="45px">
                    <path d="M44.927 22.85c0-1.62-1.166-3.35-2.605-3.857-1.44-.51-2.835-1.758-3.24-2.742-.407-.982-.301-2.855.354-4.234.656-1.38.259-3.426-.886-4.574-1.146-1.146-3.193-1.541-4.573-.885-1.38.656-3.25.764-4.231.357-.981-.405-2.229-1.803-2.74-3.242-.513-1.439-2.242-2.606-3.862-2.606s-3.35 1.167-3.862 2.606c-.512 1.44-1.76 2.836-2.74 3.242-.982.407-2.852.3-4.232-.357-1.378-.656-3.427-.261-4.573.885-1.145 1.148-1.542 3.195-.886 4.574.656 1.38.76 3.25.353 4.233-.408.982-1.799 2.233-3.238 2.743-1.44.508-2.606 2.237-2.606 3.857s1.166 3.349 2.606 3.86c1.44.513 2.832 1.764 3.24 2.744.408.98.301 2.85-.355 4.23-.656 1.378-.26 3.426.886 4.571 1.146 1.147 3.193 1.544 4.573.887 1.38-.656 3.25-.761 4.231-.353.982.407 2.23 1.805 2.741 3.243.512 1.436 2.241 2.601 3.862 2.601 1.62 0 3.35-1.165 3.861-2.6.512-1.439 1.758-2.837 2.74-3.247.98-.408 2.852-.3 4.232.356 1.379.657 3.427.26 4.573-.887 1.145-1.145 1.542-3.193.886-4.572-.655-1.38-.763-3.25-.357-4.23.406-.981 1.803-2.23 3.243-2.742 1.439-.512 2.605-2.24 2.605-3.861zm-21.783 7.992a7.984 7.984 0 0 1-7.994-7.983 7.988 7.988 0 0 1 7.994-7.994c4.41 0 7.984 3.575 7.984 7.994a7.981 7.981 0 0 1-7.984 7.983z" />
                </svg>
                <Title type={2} center>Customization</Title>
                <P type={2} center>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</P>
                <div className="line" />
            </div>
            <div className="service">
                <svg className="icon" width="53px" height="37px">
                    <path d="M10 14.245c1.002-2.058 3.475-3.608 5.742-3.608h26.207V8.983c0-1.364-1.107-2.482-2.458-2.482H28.675V5.058c0-2.056-1.655-3.723-3.684-3.723H18.7a3.64 3.64 0 0 0-2.607 1.095 3.694 3.694 0 0 0-1.082 2.628v1.444H4.196C2.843 6.501 1.738 7.62 1.738 8.983v22.164L10 14.245zm7.47-9.187c0-.328.132-.64.362-.875.23-.238.54-.368.866-.368h6.29c.679 0 1.23.555 1.23 1.243v1.444H17.47V5.058zM42.92 34.763c-.595 1.221-2.192 2.22-3.543 2.22H4.08c-1.35 0-1.968-1.001-1.369-2.22l9.492-19.422c.593-1.223 2.189-2.226 3.539-2.226H51.04c1.354 0 1.969 1.003 1.371 2.226l-9.49 19.422z" />
                </svg>
                <Title type={2} center>Marketing</Title>
                <P type={2} center>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</P>
                <div className="line" />
            </div>
        </div>
    </Section>;
}