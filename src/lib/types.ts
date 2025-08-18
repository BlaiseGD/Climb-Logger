export interface Climb {
    id: number;
    name: string;
    type: "Boulder" | "Sport" | "Trad";
    grade: string;
    date?: Date;
    location?: string;
    notes?: string;
}