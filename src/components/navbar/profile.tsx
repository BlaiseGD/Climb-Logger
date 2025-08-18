
//if no account in database, prompt and create one
//if account exists, show profile with username, email, and logout button
//logout button will clear session and redirect to login page
export default function Profile(){
    return(
        <div className="gap-2 border-amber-200 border-2 bg-green-400">
            <p>Username</p>
            <img className="max-w-[50px] h-auto object-contain rounded-full" src="/userPhotos/pfp.jpg"></img>
            <p>Email</p>
            <p>Logout</p>
        </div>
    );
}