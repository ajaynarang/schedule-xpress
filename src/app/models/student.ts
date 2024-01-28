export interface Student {
    id: number;
    name: string;
    subject: string;
    defaultAllocation: string;
    assignedTeacher: string | null;
  }