import {Link} from "react-router";
import "./Navigation.css"
import {useEffect, useState} from "react";

export function Navigation() {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <>
            {/*<header>*/}
            {/*    <nav className="navbar">*/}
            {/*        /!*bg-[url('src/assets/ripe-rice-in-the-field-of-farmland.webp')] bg-cover bg-center h-16)*!/*/}
            {/*        <ul>*/}
            {/*            <Link to='/' className="custom-link"> <i className="fas fa-tachometer-alt"></i>Dashboard</Link>*/}
            {/*            <Link to='/staff' className="custom-link">Staff</Link>*/}
            {/*            <Link to='/field' className="custom-link">Field</Link>*/}
            {/*            <Link to='/crop' className="custom-link">Crop</Link>*/}
            {/*            <Link to='/vehicle' className="custom-link">Vehicle</Link>*/}
            {/*            <Link to='/equipment' className="custom-link">Equipment</Link>*/}
            {/*            <Link to='/monitoringlog' className="custom-link">MonitoringLog</Link>*/}
            {/*            <Link to='/user' className="custom-link">User</Link>*/}
            {/*        </ul>*/}
            {/*    </nav>*/}
            {/*</header>*/}
            <>
                {/*<header className="header">*/}
                {/*    <nav className="navbar">*/}
                {/*        <div className=" items-center space-x-4">*/}
                {/*            <div className=" items-center px-20 ">*/}
                {/*                <img src="/src/assets/images/img_1.png" alt="User Profile"*/}
                {/*                     className="w-10 h-10 rounded-full border"/>*/}
                {/*            </div>*/}
                {/*            <div className="text-green-800 font-bold text-align:center">*/}
                {/*                {currentTime.toLocaleDateString()}*/}
                {/*                <br/>{currentTime.toLocaleTimeString()}*/}
                {/*            </div>*/}
                {/*            /!*<button className="bg-gray-200 text-yellow-700 px-3 py-1 rounded-full hover:bg-gray-500">*!/*/}
                {/*            /!*    Sign In*!/*/}
                {/*            /!*</button>*!/*/}
                {/*        </div>*/}
                {/*        <ul>*/}
                {/*            <br/>*/}

                {/*            <li>*/}
                {/*                <Link to='/' className="custom-link">*/}
                {/*                    <i className="fas fa-tachometer-alt"></i> Dashboard*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to='/crop' className="custom-link">*/}
                {/*                    <i className="fas fa-seedling"></i> Crop*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to='/field' className="custom-link">*/}
                {/*                    <i className="fas fa-map"></i> Field</Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to='/equipment' className="custom-link">*/}
                {/*                    <i className="fas fa-tools"></i> Equipment*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to='/monitoringLog' className="custom-link">*/}
                {/*                    <i className="fas fa-file-alt"></i> Monitoring Log*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to='/staff' className="custom-link">*/}
                {/*                    <i className="fas fa-users"></i> Staff*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to='/user' className="custom-link">*/}
                {/*                    <i className="fas fa-user"></i> User*/}
                {/*                </Link>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <Link to='/vehicle' className="custom-link">*/}
                {/*                    <i className="fas fa-truck"></i> Vehicle*/}
                {/*                </Link>*/}
                {/*            </li>*/}

                {/*        </ul>*/}
                {/*    </nav>*/}
                {/*</header>*/}


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
                                <br/>
                                {currentTime.toLocaleTimeString()}
                            </div>
                        </div>
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
                                <Link to="/user" className="custom-link">
                                    <i className="fas fa-user"></i> User
                                </Link>
                            </li>
                            <li>
                                <Link to="/vehicle" className="custom-link">
                                    <i className="fas fa-truck"></i> Vehicle
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>

            </>
        </>
    )
}