import {Link} from "react-router";
import "./Navigation.css"
import {useEffect, useState} from "react";
import { RootState } from "../store/Store.ts";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../reducers/AuthSlice";

export function Navigation() {

    const authState = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleLogout = () => {
        dispatch(logOut());
    };

    return (
        <>
            <header className="header">
                    <nav className="navbar">
                        <div className="profile-section">
                            {/* Profile Image */}
                            <img
                                src="/src/assets/images/img_1.png"
                                alt="User Profile"
                                className="profile-img"
                            />
                            {/* Date and Time */}
                            <div className="date-time">
                                {currentTime.toLocaleDateString()}
                                {currentTime.toLocaleTimeString()}
                            </div>

                        </div>
                        <div>
                            <ul>
                                <li>
                                    <Link to="/" className="custom-link">
                                        <i className="fas fa-tachometer-alt"></i> Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/crop" className="custom-link">
                                        <i className="fas fa-seedling"></i> Crop
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/field" className="custom-link">
                                        <i className="fas fa-map"></i> Field
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/equipment" className="custom-link">
                                        <i className="fas fa-tools"></i> Equipment
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/monitoringLog" className="custom-link">
                                        <i className="fas fa-file-alt"></i> Monitoring Log
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/staff" className="custom-link">
                                        <i className="fas fa-users"></i> Staff
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/vehicle" className="custom-link">
                                        <i className="fas fa-truck"></i> Vehicle
                                    </Link>
                                </li>
                            </ul>

                            <div className="mb-5">
                                {authState.isAuthenticated ? (
                                    <div
                                        className="custom-link w-full cursor-pointer"
                                        onClick={handleLogout}
                                    >
                                        <i className="fas fa-right-from-bracket"></i> Logout
                                    </div>
                                ) : (
                                    <Link to="/login" className="custom-link">
                                        <i className="fas fa-right-from-bracket"></i> Login
                                    </Link>
                                )}
                            </div>
                        </div>
                    </nav>
            </header>
</>
);
}