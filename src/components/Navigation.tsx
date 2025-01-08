import {Link} from "react-router";
import "./Navigation.css"

export function Navigation() {
    return (
        <>
            <header>
                <nav className="navbar">
                    {/*bg-[url('src/assets/ripe-rice-in-the-field-of-farmland.webp')] bg-cover bg-center h-16)*/}
                    <ul>
                        <Link to='/' className="custom-link">Dashboard</Link>
                        <Link to='/staff' className="custom-link">Staff</Link>
                        <Link to='/field' className="custom-link">Field</Link>
                        <Link to='/monitoringlog' className="custom-link">MonitoringLog</Link>
                        <Link to='/vehicle' className="custom-link">Vehicle</Link>
                        <Link to='/crop' className="custom-link">Crop</Link>
                        <Link to='/equipment' className="custom-link">Equipment</Link>
                        <Link to='/user' className="custom-link">User</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}