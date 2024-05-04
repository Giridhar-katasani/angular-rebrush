export interface Task {
    id?: number;
    title: string | null;
    description: string | null;
    dueDate: Date | null;
    priority: string | null;
    category: string | null;
    status: string| null;
}