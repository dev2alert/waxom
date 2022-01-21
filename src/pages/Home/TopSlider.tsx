import * as React from "react";
import Slider, {View} from "../common/Main/Slider";
import {Subtitle, Title, Paragraph as P, Button, NewLine} from "../common/Main/Section";

export default function TopSlider(): React.ReactElement {
    return <Slider backgroundImage="/test/top-slider-background.jpeg">
        <View center>
            <Subtitle>Unique and Modern Design</Subtitle>
            <Title>Portfolio PSD Template</Title>
            <P center>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</P>
            <NewLine />
            <NewLine />
            <Button>Get Started</Button>
        </View>
        <View center>
            <Subtitle>Unique and Modern Design</Subtitle>
            <Title>Portfolio PSD Template</Title>
            <P center>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</P>
            <NewLine />
            <NewLine />
            <Button>Get Started</Button>
        </View>
        <View center>
            <Subtitle>Unique and Modern Design</Subtitle>
            <Title>Portfolio PSD Template</Title>
            <P center>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</P>
            <NewLine />
            <NewLine />
            <Button>Get Started</Button>
        </View>
        <View center>
            <Subtitle>Unique and Modern Design</Subtitle>
            <Title>Portfolio PSD Template</Title>
            <P center>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</P>
            <NewLine />
            <NewLine />
            <Button>Get Started</Button>
        </View>
        <View center>
            <Subtitle>Unique and Modern Design</Subtitle>
            <Title>Portfolio PSD Template</Title>
            <P center>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</P>
            <NewLine />
            <NewLine />
            <Button>Get Started</Button>
        </View>
    </Slider>;
}