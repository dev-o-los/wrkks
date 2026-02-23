import { resume_x } from "@/output";
import {
  Award,
  Cpu,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Terminal,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import ResumeImage from "./ResumeImage";

export default function BentoResume({ userid }: { userid: string }) {
  const resume = resume_x;

  // --- CONFIGURABLE THEME ---
  const theme = {
    accent: "blue" as const, // Options: "red", "blue", "violet", "rose", "amber", "emerald"
    background: "#050505",
    cardBg: "bg-neutral-900/40",
    cardBorder: "border-neutral-800/60",
    cardHover: "hover:border-neutral-700/50",
  };

  // TAILWIND MAPPER: This ensures Tailwind picks up the classes
  const accentMap = {
    red: {
      text: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
      icon: "text-red-500",
      selection: "selection:bg-red-500/30",
      hoverText: "group-hover:text-red-400",
      timeline: "group-hover/item:bg-red-500",
    },
    blue: {
      text: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      icon: "text-blue-500",
      selection: "selection:bg-blue-500/30",
      hoverText: "group-hover:text-blue-400",
      timeline: "group-hover/item:bg-blue-500",
    },
    violet: {
      text: "text-violet-400",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
      icon: "text-violet-500",
      selection: "selection:bg-violet-500/30",
      hoverText: "group-hover:text-violet-400",
      timeline: "group-hover/item:bg-violet-500",
    },
    amber: {
      text: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      icon: "text-amber-500",
      selection: "selection:bg-amber-500/30",
      hoverText: "group-hover:text-amber-400",
      timeline: "group-hover/item:bg-amber-500",
    },
  };

  const activeAccent = accentMap[theme.accent] || accentMap.red;

  if (!resume) return null;

  const {
    personalInfo,
    summary,
    skills,
    experience,
    projects,
    education,
    customSections,
  } = resume;

  return (
    <div
      className={`min-h-screen text-neutral-200 ${activeAccent.selection}`}
      style={{ backgroundColor: theme.background }}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4 auto-rows-[minmax(140px,auto)] grid-flow-dense">
          {/* --- HERO SECTION --- */}
          <div
            className={`md:col-span-4 lg:col-span-8 lg:row-span-2 ${theme.cardBg} border ${theme.cardBorder} rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group ${theme.cardHover} transition-all`}
          >
            <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity text-white">
              <Cpu size={120} />
            </div>
            <div className="relative z-10">
              {personalInfo?.title && (
                <span
                  className={`inline-block px-3 py-1 rounded-full ${activeAccent.bg} ${activeAccent.text} text-[10px] font-bold uppercase tracking-widest mb-4 border ${activeAccent.border}`}
                >
                  Available for 2026 Internships
                </span>
              )}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-none">
                {personalInfo?.name || "Anonymous"}
              </h1>
              {personalInfo?.title && (
                <p className="mt-4 text-lg md:text-xl text-neutral-400 font-medium max-w-xl">
                  {personalInfo.title}
                </p>
              )}
            </div>
          </div>

          {/* --- PROFILE PHOTO --- */}
          <div
            className={`md:col-span-2 lg:col-span-4 lg:row-span-2 ${theme.cardBg} border ${theme.cardBorder} rounded-3xl flex items-center justify-center ${theme.cardHover} transition-all group overflow-hidden`}
          >
            <div
              className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-linear-to-br from-neutral-800 to-neutral-950 border border-neutral-700/50 flex items-center justify-center text-5xl font-black text-neutral-400 group-hover:scale-105 ${activeAccent.text} transition-all duration-500 shadow-2xl overflow-hidden`}
            >
              <ResumeImage userid={userid} removeDecoration />
            </div>
          </div>

          {/* --- SOCIALS & LOCATION --- */}
          <div
            className={`md:col-span-2 lg:col-span-4 ${theme.cardBg} border ${theme.cardBorder} rounded-3xl p-6 flex flex-col justify-between ${theme.cardHover} transition-all`}
          >
            <div className="flex items-center gap-2 text-neutral-400 text-sm">
              <MapPin size={18} className={activeAccent.icon} />
              {personalInfo?.location || "Remote"}
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {[
                {
                  icon: <Github size={20} />,
                  href: personalInfo?.github,
                  prefix: "https://github.com/",
                },
                {
                  icon: <Linkedin size={20} />,
                  href: personalInfo?.linkedin,
                  prefix: "https://linkedin.com/in/",
                },
                {
                  icon: <Twitter size={20} />,
                  href: personalInfo?.twitter,
                  prefix: "https://twitter.com/",
                },
                {
                  icon: <Mail size={20} />,
                  href: personalInfo?.email,
                  prefix: "mailto:",
                },
              ]
                .filter((s) => s.href)
                .map((social, i) => (
                  <Link
                    key={i}
                    href={
                      social.href?.includes("://")
                        ? social.href
                        : `${social.prefix}${social.href}`
                    }
                    target="_blank"
                    className="p-3 bg-neutral-800/50 rounded-xl hover:bg-neutral-700 hover:text-white transition-all border border-neutral-800"
                  >
                    {social.icon}
                  </Link>
                ))}
            </div>
          </div>

          {/* --- ABOUT ME --- */}
          {summary && (
            <div
              className={`md:col-span-2 lg:col-span-4 lg:row-span-2 ${theme.cardBg} border ${theme.cardBorder} rounded-3xl p-8 ${theme.cardHover} transition-all overflow-hidden flex flex-col`}
            >
              <h3 className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-4">
                About Me
              </h3>
              <div className="grow overflow-y-auto pr-2 custom-scrollbar">
                <p className="text-base leading-relaxed text-neutral-300 italic">
                  {summary}
                </p>
              </div>
            </div>
          )}

          {/* --- TECH STACK --- */}
          {(skills?.frameworksAndTools?.length > 0 ||
            skills?.languages?.length > 0) && (
            <div
              className={`md:col-span-4 lg:col-span-8 ${theme.cardBg} border ${theme.cardBorder} rounded-3xl p-6 ${theme.cardHover} transition-all`}
            >
              <h3 className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-4">
                Core Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworksAndTools?.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-neutral-800/30 border border-neutral-700/30 rounded-lg text-xs text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
                {skills.languages?.map((lang, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1.5 ${activeAccent.bg} border ${activeAccent.border} rounded-lg text-xs ${activeAccent.text} font-medium`}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* --- EXPERIENCE --- */}
          {experience?.length > 0 && (
            <div
              className={`md:col-span-4 lg:col-span-8 lg:row-span-2 ${theme.cardBg} border ${theme.cardBorder} rounded-3xl p-8 ${theme.cardHover} transition-all`}
            >
              <h3 className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-6">
                Experience
              </h3>
              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <div
                    key={i}
                    className="relative pl-6 border-l border-neutral-800 group/item"
                  >
                    <div
                      className={`absolute -left-1.25 top-0 h-2.5 w-2.5 rounded-full bg-neutral-700 transition-colors ${activeAccent.timeline}`}
                    />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <div>
                        <h4 className="text-white font-bold text-lg">
                          {exp.position}
                        </h4>
                        <p
                          className={`${activeAccent.text} text-sm font-medium`}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-neutral-500 bg-neutral-800/50 px-2 py-1 rounded">
                        {exp.startDate} —{" "}
                        {exp.isCurrentRole ? "Present" : exp.endDate}
                      </span>
                    </div>
                    {exp.description?.length > 0 && (
                      <ul className="mt-3 space-y-2">
                        {exp.description.map((desc, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-neutral-400 leading-snug"
                          >
                            • {desc}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --- PROJECTS --- */}
          {projects?.map((proj, i) => (
            <div
              key={i}
              className={`md:col-span-2 lg:col-span-4 ${theme.cardBg} border ${theme.cardBorder} rounded-3xl p-6 flex flex-col justify-between ${theme.cardHover} transition-all group`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`p-2 bg-neutral-800 rounded-lg ${activeAccent.text}`}
                  >
                    <Terminal size={20} />
                  </div>
                  {proj.link && (
                    <Link
                      href={proj.link}
                      target="_blank"
                      className="text-neutral-500 hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                    </Link>
                  )}
                </div>
                <h3
                  className={`text-xl font-bold text-white ${activeAccent.hoverText} transition-colors`}
                >
                  {proj.name}
                </h3>
                <p className="text-sm text-neutral-400 mt-2 line-clamp-3 leading-relaxed">
                  {proj.description?.[0]}
                </p>
              </div>
              {proj.technologies?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {proj.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium text-neutral-500 uppercase tracking-tighter"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* --- EDUCATION --- */}
          {education?.length > 0 && (
            <div
              className={`md:col-span-2 lg:col-span-4 ${theme.cardBg} border ${theme.cardBorder} rounded-3xl p-6 ${theme.cardHover} transition-all`}
            >
              <h3 className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Globe size={14} /> Education
              </h3>
              {education.map((edu, i) => (
                <div
                  key={i}
                  className={
                    i > 0 ? "mt-4 pt-4 border-t border-neutral-800" : ""
                  }
                >
                  <p className="text-white font-bold">{edu.university}</p>
                  <p className="text-sm text-neutral-400">
                    {edu.degree} {edu.branch && `in ${edu.branch}`}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    {edu.startDate} — {edu.endDate}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* --- CUSTOM SECTIONS --- */}
          {customSections?.map((section, i) => (
            <div
              key={i}
              className={`md:col-span-2 lg:col-span-4 ${theme.cardBg} border ${theme.cardBorder} rounded-3xl p-6 ${theme.cardHover} transition-all`}
            >
              <h3 className="text-neutral-500 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Award size={14} /> {section.title}
              </h3>
              <div className="space-y-2">
                {section.items?.map((item, idx) => (
                  <p key={idx} className="text-xs text-neutral-400 truncate">
                    • {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-12 text-center text-neutral-600 text-xs">
          <p>© 2026 {personalInfo?.name} • Built with wrkks.site</p>
        </footer>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #262626;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
