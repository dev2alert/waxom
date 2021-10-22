import * as React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import "./App.scss";
import Loading from "./pages/Loading";

export const Home = React.lazy(() => import("./pages/Home"));

export default class App extends React.Component {
    public render(): React.ReactNode {
        return <BrowserRouter>
            <Switch>
                <React.Suspense fallback={<Loading />}>
                    <Route path="/" component={Home} />
                </React.Suspense>
            </Switch>
        </BrowserRouter>;
    }
}