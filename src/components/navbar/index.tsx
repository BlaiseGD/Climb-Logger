'use client';
import Link from "next/link";
import {useState, lazy, Suspense} from "react";

const LazyLoadClimbRewind = lazy(() => import("./climbRewindBtn"));
const LazyLoadProfile = lazy(() => import("./profile"));

export default function Navbar(){
    /* 
    GOTTA USE APP ROUTER FOR NAVBAR
    your profile (on hover have little menu)
    settings (dedicated page)
    climb rewind (show page with hardest climb by discipline and when/where they were completed as well)
    about us <a>
    */
   const [showClimbRewind, setShowClimbRewind] = useState(false);
   const [showProfile, setShowProfile] = useState(false);
    return(
        <nav className="flex justify-center align-top border-amber-200 border-b-4 bg-purple-500 p-2">
            <div className="inline-flex gap-[10px]">
                <button onClick={() => setShowProfile(true)}>Profile</button>
                {showProfile && (
                    <div className="relative">
                        <Suspense fallback={<div>Loading..</div>}>
                            <div className="absolute py-10 w-full h-full z-50 opacity-90">
                            <button className="bg-red-600" onClick={() => setShowProfile(false)}>X</button>
                            <LazyLoadProfile/>
                            </div>
                        </Suspense>
                    </div>
                )}
                <button onClick={() =>setShowClimbRewind(true)}>Climb Rewind</button>
                {showClimbRewind && (
                    <div className="relative">
                    <Suspense fallback={<div>Loading..</div>}>
                        <div className="absolute py-10 w-full h-full z-50 opacity-90">
                        <button className="bg-red-600" onClick={() => setShowClimbRewind(false)}>X</button>
                        <LazyLoadClimbRewind/>
                        </div>
                    </Suspense>
                    </div>
                )}
                <Link href="/settings">Settings</Link>
                <Link href="/aboutUs">About Us</Link>
            </div>
        </nav>
        
    );

}