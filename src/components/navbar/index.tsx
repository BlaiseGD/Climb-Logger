import Link from "next/link";

export default function Navbar(){
    /* 
    GOTTA USE APP ROUTER FOR NAVBAR
    your profile (on hover have little menu)
    settings (dedicated page)
    climb rewind (show page with hardest climb by discipline and when/where they were completed as well)
    about us <a>
    */
    return(
        <nav className="text-center">
            <p>Your Profile</p>
            <p>Climb Rewind</p>
            <Link href="/settings">Settings</Link>
            <p>About Us</p>
        </nav>
    );

}