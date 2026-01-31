/* eslint-disable @typescript-eslint/no-explicit-any */
import { Resume } from "./types";

export function normalizeResume(raw: any): Resume {
  return {
    personalInfo: {
      name: raw?.personalInfo?.name ?? "",
      title: raw?.personalInfo?.title ?? "",
      location: raw?.personalInfo?.location ?? "",
      phone: raw?.personalInfo?.phone ?? "",
      email: raw?.personalInfo?.email ?? "",
      website: raw?.personalInfo?.website ?? "",
    },
    summary: raw?.summary ?? "",
    skills: {
      languages: raw?.skills?.languages ?? [],
      frameworksAndTools: raw?.skills?.frameworksAndTools ?? [],
      softSkills: raw?.skills?.softSkills ?? [],
    },
    projects:
      raw?.projects?.map((p: any) => ({
        name: p?.name ?? "",
        role: p?.role ?? "",
        duration: p?.duration ?? "",
        description: p?.description ?? [],
        technologies: p?.technologies ?? [],
        link: p?.link ?? "",
      })) ?? [],
    education: {
      university: raw?.education?.university ?? "",
      degree: raw?.education?.degree ?? "",
      branch: raw?.education?.branch ?? "",
      sgpa: raw?.education?.sgpa ?? "",
      duration: raw?.education?.duration ?? "",
    },
    extracurricular: raw?.extracurricular ?? [],
  };
}
