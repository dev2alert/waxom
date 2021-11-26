import * as React from "react";
import Section, {Title, Paragraph as P, Tabs, Button, Flex} from "../../common/Main/Section";
import styles from "./style.scss";
import All from "./All";
import WebDesign from "./WebDesign";
import MobileApp from "./MobileApp";
import Illustration from "./Illustration";
import Photography from "./Photography";

export default function Projects(): React.ReactElement {
    return <Section className={styles.main} container>
        <Title type={2} size={30} center>Our Latest Projects.</Title>
        <P type={2} width={757} size={16} center>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium.</P>
        <Tabs>
            {[
                {name: "All", component: All},
                {name: "Web Design", component: WebDesign},
                {name: "Mobile App", component: MobileApp},
                {name: "Illustration", component: Illustration},
                {name: "Photography", component: Photography}
            ]}
        </Tabs>
        <Flex justifyContent="center">
            <Button>Load More</Button>
        </Flex>
    </Section>;
}