import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store.ts";
import { Navigation } from "./Navigation.tsx";
import { rehydrateAuthState } from "../reducers/AuthSlice.tsx";

export const RootLayout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authState = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        dispatch(rehydrateAuthState());
    }, [dispatch]);

    useEffect(() => {
        if (authState.isRehydrated && !authState.isAuthenticated) {
            navigate("/login");
        }
    }, [authState.isRehydrated, authState.isAuthenticated, navigate]);

    if (!authState.isRehydrated) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {authState.isAuthenticated && <Navigation />}
            <main>
                <Outlet />
            </main>
        </div>
    );
};