import * as React from "react";
import Page from "../common/Page";
import Slider from "../common/Main/Slider";

export default function Home(): React.ReactElement {
    return <Page title="Home">
        <Slider backgroundImage="/test/slider-background.jpeg">
            <div className="view">
                123
            </div>
            <div className="view">
                456
            </div>
            <div className="view">
                789
            </div>
        </Slider>
    </Page>;
}