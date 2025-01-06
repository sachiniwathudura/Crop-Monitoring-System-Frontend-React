import {Link} from "react-router";
import "./Navigation.css"

export function Navigation() {
    return (
        <>
            <header>
                <nav className="navbar">
                    <ul>
                        <Link to='/' className="custom-link">Dashboard</Link>
                        <Link to='/staff' className="custom-link">staff</Link>
                        <Link to='/field' className="custom-link">field</Link>
                        <Link to='/monitoringlog' className="custom-link">monitoringLog</Link>
                        <Link to='/vehicle' className="custom-link">vehicle</Link>
                        <Link to='/crop' className="custom-link">crop</Link>
                        <Link to='/equipment' className="custom-link">equipment</Link>
                        <Link to='/user' className="custom-link">user</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}