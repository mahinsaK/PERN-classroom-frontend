import type { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Computer Science",
    department: "CS",
    description:
      "Introduces programming fundamentals, algorithms, and problem-solving techniques.",
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: 2,
    code: "MATH101",
    name: "Calculus I",
    department: "Math",
    description:
      "Covers limits, derivatives, and integrals with applications to real-world problems.",
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: 3,
    code: "ENG101",
    name: "Academic Writing",
    department: "English",
    description:
      "Develops skills in essay writing, critical reading, and evidence-based academic argument.",
    createdAt: "2026-01-01T00:00:00.000Z",
  },
];