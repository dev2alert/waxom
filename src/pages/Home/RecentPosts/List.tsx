import * as React from "react";
import Slider from "react-slick";
import Item from "./Item";

export interface ListProps {
    sliderRef?: React.RefObject<Slider>;
    onAfterChange?: (currentSlide: number) => void;
}

export default function List({sliderRef, onAfterChange}: ListProps): React.ReactElement {
    return <Slider
        ref={sliderRef}
        className="posts"
        slidesToShow={3}
        infinite={false}
        afterChange={onAfterChange}
    >
        <Item 
            photos={["/test/post-photo-1.png", "/test/post-photo-2.png", "/test/post-photo-3.png", "/test/post-photo-2.png", "/test/post-photo-3.png"]} 
            date={new Date(Date.now() - 8.64e+7)}
            name="Lorem ipsum dolor sit amet"
            desc="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium."
        />
        <Item 
            photos={["/test/post-photo-2.png"]} 
            date={new Date} 
            name="Lorem ipsum dolor sit amet"
            desc="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium."
        />
        <Item 
            photos={["/test/post-photo-3.png"]} 
            date={new Date(Date.now() + 8.64e+7)}
            name="Lorem ipsum dolor sit amet"
            desc="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium."    
        />
        <Item 
            photos={["/test/post-photo-1.png"]} 
            date={new Date}
            name="Lorem ipsum dolor sit amet"
            desc="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium."    
        />
        <Item 
            photos={["/test/post-photo-3.png", "/test/post-photo-2.png"]} 
            date={new Date(Date.now() - 8.64e+7 * 2)}
            name="Lorem ipsum dolor sit amet"
            desc="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium."    
        />
        <Item 
            photos={["/test/post-photo-3.png"]} 
            date={new Date(Date.now() + 8.64e+7)}
            name="Lorem ipsum dolor sit amet"
            desc="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium."    
        />
        <Item 
            photos={["/test/post-photo-1.png"]} 
            date={new Date}
            name="Lorem ipsum dolor sit amet"
            desc="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium."    
        />
    </Slider>;
}