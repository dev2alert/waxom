import * as React from "react";
import Header, {HeaderProps} from "./Header";
import Main, {MainProps} from "./Main";
import Footer, {FooterProps} from "./footer";

export interface PageProps {
    title: string;
    header?: HeaderProps;
    main?: MainProps;
    footer?: FooterProps;
    children: React.ReactNode;
}

export default function Page({title, header, main, footer, children}: PageProps): React.ReactElement {
    document.title = `${title} ― Waxom`;
    return <>
        <Header {...header} />
        <Main {...main}>{children}</Main>
        <Footer {...footer} />
    </>;
}