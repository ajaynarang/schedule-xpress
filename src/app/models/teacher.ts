export interface Teacher {
    id: number;
    name: string;
    subjects?: string[];
    parentTeacherId?: number | null;
    attendance: string;
    level: number;
  }