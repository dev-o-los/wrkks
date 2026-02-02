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
      linkedin: raw?.personalInfo?.linkedin ?? "",
      github: raw?.personalInfo?.github ?? "",
      twitter: raw?.personalInfo?.twitter ?? "",
    },
    summary: raw?.summary ?? "",
    skills: {
      languages: Array.isArray(raw?.skills?.languages)
        ? raw.skills.languages
        : [],
      frameworksAndTools: Array.isArray(raw?.skills?.frameworksAndTools)
        ? raw.skills.frameworksAndTools
        : [],
      softSkills: Array.isArray(raw?.skills?.softSkills)
        ? raw.skills.softSkills
        : [],
    },
    experience:
      raw?.experience?.map((exp: any) => ({
        company: exp?.company ?? "",
        position: exp?.position ?? "",
        location: exp?.location ?? "",
        startDate: exp?.startDate ?? "",
        endDate: exp?.endDate ?? "",
        isCurrentRole: !!exp?.isCurrentRole,
        description: Array.isArray(exp?.description) ? exp.description : [],
        technologies: Array.isArray(exp?.technologies) ? exp.technologies : [],
      })) ?? [],
    projects:
      raw?.projects?.map((p: any) => ({
        name: p?.name ?? "",
        role: p?.role ?? "",
        startDate: p?.startDate ?? "",
        endDate: p?.endDate ?? "",
        description: Array.isArray(p?.description) ? p.description : [],
        technologies: Array.isArray(p?.technologies) ? p.technologies : [],
        link: p?.link ?? "",
      })) ?? [],
    education:
      raw?.education?.map((edu: any) => ({
        university: edu?.university ?? "",
        degree: edu?.degree ?? "",
        branch: edu?.branch ?? "",
        location: edu?.location ?? "",
        sgpa: edu?.sgpa ?? "",
        startDate: edu?.startDate ?? "",
        endDate: edu?.endDate ?? "",
      })) ?? [],
    extracurricular: Array.isArray(raw?.extracurricular)
      ? raw.extracurricular
      : [],
    customSections:
      raw?.customSections?.map((section: any) => ({
        title: section?.title ?? "",
        items: Array.isArray(section?.items) ? section.items : [],
      })) ?? [],
  };
}

export function normalizeUrl(input: string): string {
  if (!input) return "";
  const trimmed = input.trim();

  // If it already has a protocol, return as-is
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  // Otherwise, prepend https://
  return `https://${trimmed}`;
}
