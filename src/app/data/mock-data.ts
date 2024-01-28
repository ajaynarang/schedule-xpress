import { Student } from "../models/student";
import { Teacher } from "../models/teacher";

export const teachersMockData: Teacher[] = [
  {
    id: 1,
    name: "Professor Dumbledore",
    subjects: ["Potions Master", "Defense Against the Dark Arts"],
    parentTeacherId: null,
    attendance: "present",
    level: 1,
  },
  {
    id: 2,
    name: "Minerva McGonagall",
    subjects: ["Potions Master", "Defense Against the Dark Arts"],
    parentTeacherId: 1,
    attendance: "present",
    level: 2,
  },
  {
    id: 3,
    name: "Rubeus Hagrid",
    subjects: ["Potions Master"],
    parentTeacherId: 2,
    attendance: "present",
    level: 3,
  },
  {
    id: 4,
    name: "Horace Slughorn",
    subjects: ["Potions Master"],
    parentTeacherId: 3,
    attendance: "present",
    level: 4,
  },
  {
    id: 5,
    name: "Severus Snape",
    subjects: ["Potions Master"],
    parentTeacherId: 3,
    attendance: "present",
    level: 4,
  },
  {
    id: 6,
    name: "Alastor Moody",
    subjects: ["Defense Against the Dark Arts"],
    parentTeacherId: 2,
    attendance: "present",
    level: 3,
  },
  {
    id: 7,
    name: "Remus Lupin",
    subjects: ["Defense Against the Dark Arts"],
    parentTeacherId: 6,
    attendance: "present",
    level: 4,
  },
  {
    id: 8,
    name: "Gilderoy Lockhart",
    subjects: ["Defense Against the Dark Arts"],
    parentTeacherId: 6,
    attendance: "present",
    level: 4,
  },
];

export const studentsMockData: Student[] = [
  {
    id: 1,
    name: "Harry Potter",
    subject: "Potions Master",
    defaultAllocation: "Horace Slughorn",
    assignedTeacher: "Horace Slughorn",
  },
  {
    id: 2,
    name: "Hermione Granger",
    subject: "Potions Master",
    defaultAllocation: "",
    assignedTeacher: null,
  },
  {
    id: 3,
    name: "Ron Weasley",
    subject: "Potions Master",
    defaultAllocation: "Severus Snape",
    assignedTeacher: "Severus Snape",
  },
  {
    id: 4,
    name: "Draco Malfoy",
    subject: "Potions Master",
    defaultAllocation: "Horace Slughorn",
    assignedTeacher: "Horace Slughorn",
  },
  {
    id: 5,
    name: "Padma Patil",
    subject: "Potions Master",
    defaultAllocation: "",
    assignedTeacher: null,
  },
  {
    id: 6,
    name: "Luna Lovegood",
    subject: "Potions Master",
    defaultAllocation: "Severus Snape",
    assignedTeacher: "Severus Snape",
  },
  {
    id: 7,
    name: "Student A",
    subject: "Defense Against the Dark Arts",
    defaultAllocation: "Remus Lupin",
    assignedTeacher: "Remus Lupin",
  },
  {
    id: 8,
    name: "Student B",
    subject: "Defense Against the Dark Arts",
    defaultAllocation: "Gilderoy Lockhart",
    assignedTeacher: "Gilderoy Lockhart",
  },
];
