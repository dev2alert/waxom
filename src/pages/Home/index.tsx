import * as React from "react";
import Page from "../common/Page";
import Description from "./Description";
import Projects from "./Projects";
import Services from "./Services";
import Theme from "./Theme";
import TopSlider from "./TopSlider";

export default function Home(): React.ReactElement {
    return <Page title="Home">
        <TopSlider />
        <Services />
        <Description />
        <Theme />
        <Projects />
    </Page>;
}