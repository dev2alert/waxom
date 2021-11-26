import * as React from "react";
import List from "./List";

export default function All(): React.ReactElement {
    return <List>
        {[
            {photo: "./test/project-photo-1.png", name: "Claritas Etiam Processus", desc: "Photography, Nature"},
            {photo: "./test/project-photo-2.png", name: "Quam Nutamus Farum", desc: "Graphic Design, Mock-Up"},
            {photo: "./test/project-photo-3.png", name: "Usus Legentis Videntur", desc: "Photography, Holiday"},
            {photo: "./test/project-photo-4.png", name: "Claritas Etiam Processus", desc: "Photography, Nature"},
            {photo: "./test/project-photo-5.png", name: "Quam Nutamus Farum", desc: "Graphic Design, Mock-Up"},
            {photo: "./test/project-photo-6.png", name: "Usus Legentis Videntur", desc: "Photography, Holiday"}
        ]}
    </List>;
}