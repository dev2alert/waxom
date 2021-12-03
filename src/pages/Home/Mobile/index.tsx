import * as React from "react";
import Section, {Title, Paragraph as P, List, Item} from "../../common/Main/Section";
import styles from "./style.scss";

export default function Mobile(): React.ReactElement {
    return <Section className={styles.main} container>
        <div className="photo left" />
        <div className="right">
            <Title type={2} size={30}>Excellent for Mobile Devices.</Title>
            <P type={2} size={16} line={28}>
                Qisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
            </P>
            <List>
                <Item>Nam liber tempor cum soluta nobis eleifend option.</Item>
                <Item>Option congue nihil imperdiet doming id quod mazim placerat facer.</Item>
                <Item>Eodem modo typi, qui nunc nobis videntur parum futurum.</Item>
                <Item>Investigationes demonstraverunt lectores.</Item>
            </List>
        </div>
    </Section>;
}