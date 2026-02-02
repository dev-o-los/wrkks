"use client";

import { Resume } from "@/lib/types";
import { create } from "zustand";

type ResumeStore = {
  rawText: string;
  resume: Resume | null;

  setRawText: (text: string) => void;
  setResume: (resume: Resume) => void;

  updatePersonalInfo: (info: Partial<Resume["personalInfo"]>) => void;
  updateSummary: (summary: string) => void;
  updateSkills: (skills: Partial<Resume["skills"]>) => void;

  updateExperience: (experience: Resume["experience"]) => void;
  updateProjects: (projects: Resume["projects"]) => void;
  updateEducation: (education: Resume["education"]) => void;

  updateExtracurricular: (extracurricular: Resume["extracurricular"]) => void;
  updateCustomSections: (customSections: Resume["customSections"]) => void;

  reset: () => void;
};

export const useResumeStore = create<ResumeStore>((set) => ({
  rawText: "",
  resume: null,

  setRawText: (text) => set({ rawText: text }),
  setResume: (resume) => set({ resume }),

  updatePersonalInfo: (info) =>
    set((state) => ({
      resume: state.resume
        ? {
            ...state.resume,
            personalInfo: {
              ...state.resume.personalInfo,
              ...info,
            },
          }
        : null,
    })),

  updateSummary: (summary) =>
    set((state) => ({
      resume: state.resume ? { ...state.resume, summary } : null,
    })),

  updateSkills: (skills) =>
    set((state) => ({
      resume: state.resume
        ? {
            ...state.resume,
            skills: {
              ...state.resume.skills,
              ...skills,
            },
          }
        : null,
    })),

  updateExperience: (experience) =>
    set((state) => ({
      resume: state.resume ? { ...state.resume, experience } : null,
    })),

  updateProjects: (projects) =>
    set((state) => ({
      resume: state.resume ? { ...state.resume, projects } : null,
    })),

  updateEducation: (education) =>
    set((state) => ({
      resume: state.resume ? { ...state.resume, education } : null,
    })),

  updateExtracurricular: (extracurricular) =>
    set((state) => ({
      resume: state.resume ? { ...state.resume, extracurricular } : null,
    })),

  updateCustomSections: (customSections) =>
    set((state) => ({
      resume: state.resume ? { ...state.resume, customSections } : null,
    })),

  reset: () => set({ rawText: "", resume: null }),
}));
