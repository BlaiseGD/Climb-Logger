
/* 
name,type, grade, image, location, date
*/

export default function ClimbRewindBtn(){
    return(
        <div className="inline-flex gap-2 border-amber-200 border-2 bg-green-400">
            <p>Name</p>
            <p>Type</p>
            <p>Grade</p>
            <img className="max-w-[100px] h-auto object-contain" src="/userClimbPhotos/climbingTestPhoto.jpg" alt="Cool Send Bro" width={100} height={100}/>
            <p>Location</p>
            <p>Date</p>
        </div>
    );
}