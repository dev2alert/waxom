import * as React from "react";
import Section, {Title, TitleSelect, Paragraph as P, Button} from "../../common/Main/Section";
import styles from "./style.scss";

export default function Theme(): React.ReactElement {
    return <Section className={styles.main} container>
        <div className="left">
            <Title type={3}>
                <TitleSelect>Waxom</TitleSelect> Multipurpose WordPress Theme
            </Title>
            <P type={3}>Don't Forget to Rate the Template. Thanks so much!</P>
        </div>
        <div className="right">
            <Button>Purchase Now</Button>
        </div>
    </Section>;
}