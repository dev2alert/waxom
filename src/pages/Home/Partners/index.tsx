import * as React from "react";
import styles from "./style.scss";
import Section from "../../common/Main/Section";

export default function Partners(): React.ReactElement {
    return <Section 
        className={styles.main} 
        style={{"--background": "url(\"/test/partners-background.png\")"} as any}
        container
    >
        <div className="partners">
            <a className="partner" href="#partner-1">
                <img className="logo" src="/test/partner-logo-1.png" />
            </a>
            <a className="partner" href="#partner-2">
                <img className="logo" src="/test/partner-logo-2.png" />
            </a>
            <a className="partner" href="#partner-3">
                <img className="logo" src="/test/partner-logo-3.png" />
            </a>
            <a className="partner" href="#partner-4">
                <img className="logo" src="/test/partner-logo-4.png" />
            </a>
        </div>
    </Section>;
}