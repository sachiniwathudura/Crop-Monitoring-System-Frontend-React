
import {Outlet} from "react-router";
import {Navigation} from "./Navigation";

export function RootLayout() {
    return(
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </>
    );
}