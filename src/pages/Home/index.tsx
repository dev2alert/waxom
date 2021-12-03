import * as React from "react";
import Page from "../common/Page";
import Counters from "./Counters";
import Description from "./Description";
import Mobile from "./Mobile";
import Partners from "./Partners";
import Projects from "./Projects";
import Services from "./Services";
import Theme from "./Theme";
import TopSlider from "./TopSlider";
import VideoPresentation from "./VideoPresentation";

export default function Home(): React.ReactElement {
    return <Page title="Home">
        <TopSlider />
        <Services />
        <Description />
        <Theme />
        <Projects />
        <VideoPresentation />
        <Mobile />
        <Counters />
        <Partners />
    </Page>;
}