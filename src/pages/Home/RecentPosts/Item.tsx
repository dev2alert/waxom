import * as React from "react";
import Slider from "react-slick";

export interface PhotoProps {
    url: string;
}

export function Photo({url}: PhotoProps): React.ReactElement {
    return <div className="photo">
        <img className="container" src={url} />
    </div>;
}

export interface PhotoSlider {
    list: string[];
}

export function PhotoSlider({list}: PhotoSlider): React.ReactElement {
    return <Slider 
        className="photo-slider"
        dots
        customPaging={() => <span className="dot" />}
        autoplay
        autoplaySpeed={2000}
        touchMove={false}
        arrows={false}
    >
        {list.map((url, index) => <Photo key={index} url={url} />)}
    </Slider>;
}

export interface ItemProps {
    photos: string[];
    date: Date;
    name: string;
    desc: string;
}

export default function Item({photos, date, name, desc}: ItemProps): React.ReactElement {
    return <div className="post">
        <div className="top">
            <time className="date">
                <div className="day">{date.toLocaleString("en-us", {day: "2-digit"})}</div>
                <div className="month">{date.toLocaleString("en-us", {month: "short"})}.</div>
            </time>
            {photos.length === 1 ? <Photo url={photos[0]} /> : <PhotoSlider list={photos} />}
        </div>
        <div className="bottom">
            <h1 className="name">{name}</h1>
            <p className="desc">{desc}</p>
            <button className="read-more">
                read more
                <svg className="icon" width="6" height="9" viewBox="1.003 2.033 4.943 7.927">
                    <path d="M1.951 9.815l3.834-3.467a.462.462 0 0 0 0-.7l-.02-.011-3.814-3.46a.595.595 0 0 0-.777 0l-.004.007a.47.47 0 0 0-.167.354v6.918c0 .141.068.268.173.358l-.002.001a.594.594 0 0 0 .777 0z" />
                </svg>
            </button>
        </div>
    </div>;
}