import * as React from "react";
import styles from "./style.scss";
import Section, {Title, Paragraph as P} from "../../common/Main/Section";

export default function VideoPresentation(): React.ReactElement {
    return <Section 
        className={styles.main}
        style={{"--background": "url(\"/test/video-background.png\")"} as any}
    >
        <div className="play">
            <svg className="icon" viewBox="4.998 4.997 70.001 70.001">
                <path d="M34.934 56.82a2.06 2.06 0 0 1-2.06-2.06V25.235a2.06 2.06 0 0 1 3.379-1.582l17.714 14.762a2.059 2.059 0 0 1 0 3.165L36.253 56.343a2.06 2.06 0 0 1-1.32.477zm2.06-27.187v20.73l12.437-10.366-12.437-10.364zm2.943 45.365a34.807 34.807 0 0 1-17.106-4.47 2.06 2.06 0 1 1 2.02-3.59c12.019 6.765 27.231 4.673 36.994-5.093 12.047-12.047 12.047-31.648 0-43.695-12.047-12.049-31.649-12.048-43.695 0-12.046 12.047-12.046 31.648 0 43.695a2.06 2.06 0 0 1-2.913 2.914c-13.653-13.654-13.653-35.869 0-49.523 13.654-13.652 35.867-13.653 49.522 0 13.653 13.654 13.653 35.869 0 49.523C58.033 71.484 49.026 75 39.937 75z" />
            </svg>
        </div>
        <Title type={4}>Waxom Video Presentation</Title>
        <P color="white" center>
            Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius, qui sequitur mutationem consuetudium.
        </P>
        <time className="time">03:26</time>
    </Section>;
}