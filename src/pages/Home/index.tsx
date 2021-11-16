import * as React from "react";
import Page from "../common/Page";
import Slider, {View} from "../common/Main/Slider";
import {Subtitle, Title, Paragraph as P, Button} from "../common/Main/Section";

export default function Home(): React.ReactElement {
    return <Page title="Home">
        <Slider backgroundImage="/test/slider-background.jpeg">
            <View center>
                <Subtitle>Unique and Modern Design</Subtitle>
                <Title>Portfolio PSD Template</Title>
                <P>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</P>
                <br />
                <br />
                <Button>Get Started</Button>
            </View>
            <View>
                456
            </View>
            <View>
                789
            </View>
            <View>
                987
            </View>
            <View>
                654
            </View>
        </Slider>
    </Page>;
}