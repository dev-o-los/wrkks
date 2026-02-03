export interface Resume {
  personalInfo: PersonalInfo;
  summary: string;
  skills: Skills;
  experience: Experience[]; // Added
  projects: Project[];
  education: Education[]; // Changed to array for multiple degrees
  extracurricular: string[];
  customSections: CustomSection[]; // Added for "other" flexible data
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  linkedin: string; // Standard addition
  github: string; // Standard addition
  twitter: string; // Standard addition
  imageUrl: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string; // Added
  startDate: string; // Added
  endDate: string; // Added (e.g., "Present" or "Jan 2024")
  isCurrentRole: boolean;
  description: string[]; // Bullet points
  technologies: string[];
}

export interface Project {
  name: string;
  role: string;
  startDate: string; // Added consistency
  endDate: string; // Added consistency
  description: string[];
  technologies: string[];
  link: string;
}

export interface Education {
  university: string;
  degree: string;
  branch: string;
  location: string; // Added
  sgpa: string;
  startDate: string; // Added
  endDate: string; // Added
}

export interface Skills {
  languages: string[];
  frameworksAndTools: string[];
  softSkills: string[];
}

// Flexible "Other" field implementation
export interface CustomSection {
  title: string; // e.g., "Certifications" or "Languages"
  items: string[];
}
