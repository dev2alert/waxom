import * as React from "react";
import Section, {Title, Paragraph as P} from "../../common/Main/Section";
import styles from "./style.scss";

export default function Description(): React.ReactElement {
    return <Section className={styles.main} container>
        <Title type={2} size={30} center>Waxom is Realization of your Ideas.</Title>
        <P type={2} width={757} size={16} center>
            Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.
        </P>
        <div className="browser">
            <div className="image left" />
            <div className="image center" />
            <div className="image right" />
        </div>
    </Section>;
}