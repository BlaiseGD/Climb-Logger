'use client';
import {useSession, signIn, signOut} from "next-auth/react";

export default function Login() {
    const {data: session} = useSession();
    if(!session){
        return(
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => signIn("google")}>
                Sign In with Google
            </button>
        );
    }
    return (
        <button onClick={()=>signOut()} className="bg-red-500 text-white px-4 py-2 rounded">
            Sign Out
        </button>
    );
}