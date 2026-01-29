export interface Resume {
  personalInfo: PersonalInfo;
  summary: string;
  skills: Skills;
  projects: Project[];
  education: Education;
  extracurricular: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  website: string;
}

export interface Skills {
  languages: string[];
  frameworksAndTools: string[];
  softSkills: string[];
}

export interface Project {
  name: string;
  role: string;
  duration: string;
  description: string[];
  technologies: string[];
  link?: string;
}

export interface Education {
  university: string;
  degree: string;
  branch: string;
  sgpa: string;
  duration: string;
}
