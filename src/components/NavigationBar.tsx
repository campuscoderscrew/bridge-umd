import { Link } from "react-router-dom";
import React from "react";


export default function NavigationBar() {
    return (
        <>
            <div id="nav-bar" className="hidden md:flex space-x-10">
                <Link to="/" className="hover:underline font-semibold">
                    Home
                </Link>
                <Link to="/officers" className="hover:underline font-semibold">
                    Officers
                </Link>
                <Link to="/events" className="hover:underline font-semibold">
                    Events
                </Link>
            </div>
        </>
    )
}