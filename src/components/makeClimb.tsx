'use client';
import type {Climb} from "@/app/lib/types";  


export default function MakeClimb() {
    return (
        <form id="makeClimbForm" className="border p-4 rounded flex flex-col gap-4" onSubmit={handleSubmit}>
            <label>
                Name:&nbsp;
                <input type="text" name="name" placeholder="Climb Name" className="border p-2 rounded" />
            </label>
            <label>
                Type:&nbsp;
                <select name="type" className="border p-2 rounded">
                    <option value="Boulder">Boulder</option>
                    <option value="Sport">Sport</option>
                    <option value="Trad">Trad</option>
                </select>
            </label>
            <label>
                Grade:&nbsp;
                <input type="text" name="grade" placeholder="Grade" className="border p-2 rounded"></input>
            </label>
            <label>
                Date:&nbsp;
                <input type="date" name="date" className="border p-2 rounded" />
            </label>
            <label>
                Location:&nbsp;
                <input type="text" name="location" placeholder="Location" className="border p-2 rounded" />
            </label>
            <label>
                Notes:&nbsp;
                <textarea name="notes" placeholder="Notes" className="border p-2 rounded"></textarea>
            </label>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Climb</button>
        </form>
    )
};

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const climb: Climb = {
       id: Date.now(), //replace with actual ID gen in DB after insertion
       name: formData.get('name') as string,
       type: formData.get('type') as "Boulder" | "Sport" | "Trad",
       grade: formData.get('grade') as string,
       date: formData.get('date') ? new Date(formData.get('date') as string) : undefined,
        location: formData.get('location') as string,
        notes: formData.get('notes') as string
    };
    console.log("Climb to be added:", climb);
}