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
import Image from "next/image";
import Link from "next/link";

export default function BentoResume() {
  const resume = resume_x;

  // --- CONFIGURABLE THEME ---
  const theme = {
    accent: "emerald", // Main brand color (e.g., blue, violet, rose, amber)
    background: "#050505", // Page background hex
    cardBg: "bg-neutral-900/40",
    cardBorder: "border-neutral-800/60",
    cardHover: "hover:border-neutral-700/50",
    spotify: "#1DB954", // Spotify brand color
  };

  // Helper variables for Tailwind dynamic classes
  const accentText = `text-${theme.accent}-400`;
  const accentBg = `bg-${theme.accent}-500/10`;
  const accentBorder = `border-${theme.accent}-500/20`;
  const accentIcon = `text-${theme.accent}-500`;
  const accentSelection = `selection:bg-${theme.accent}-500/30`;

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
      className={`min-h-screen text-neutral-200  ${accentSelection}`}
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
                  className={`inline-block px-3 py-1 rounded-full ${accentBg} ${accentText} text-[10px] font-bold uppercase tracking-widest mb-4 border ${accentBorder}`}
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
              className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-linear-to-br from-neutral-800 to-neutral-950 border border-neutral-700/50 flex items-center justify-center text-5xl font-black text-neutral-400 group-hover:scale-105 group-hover:${accentText} transition-all duration-500 shadow-2xl overflow-hidden`}
            >
              {personalInfo?.imageUrl ? (
                <Image
                  src={personalInfo.imageUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                personalInfo?.name
                  ?.split(" ")
                  .map((n) => n[0])
                  .join("") || "?"
              )}
            </div>
          </div>

          {/* --- SOCIALS & LOCATION --- */}
          <div
            className={`md:col-span-2 lg:col-span-4 ${theme.cardBg} border ${theme.cardBorder} rounded-3xl p-6 flex flex-col justify-between ${theme.cardHover} transition-all`}
          >
            <div className="flex items-center gap-2 text-neutral-400 text-sm">
              <MapPin size={18} className={accentIcon} />
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

          {/* --- SPOTIFY (Extractable Brand Color) --- */}
          <div
            style={{
              backgroundColor: `${theme.spotify}0D`,
              borderColor: `${theme.spotify}33`,
            }}
            className="md:col-span-2 lg:col-span-4 border rounded-3xl p-10 flex flex-col items-center justify-center text-center group hover:bg-opacity-10 transition-all"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform"
              style={{ fill: theme.spotify }}
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.491 17.293c-.215.354-.675.464-1.03.249-2.863-1.748-6.468-2.144-10.713-1.175-.404.093-.811-.161-.904-.565-.093-.404.161-.811.565-.904 4.646-1.064 8.623-.613 11.833 1.343.354.215.464.675.249 1.032zm1.465-3.264c-.27.44-.846.58-1.287.31-3.275-2.013-8.266-2.595-12.138-1.42-.496.15-1.022-.13-1.173-.626-.15-.496.13-1.022.626-1.172 4.428-1.344 9.919-.687 13.66 1.613.44.27.58.847.312 1.295zm.127-3.414c-3.928-2.333-10.414-2.548-14.195-1.402-.603.183-1.237-.163-1.42-.766-.183-.603.163-1.237.766-1.42 4.34-1.318 11.503-1.067 16.012 1.61.543.322.72 1.025.398 1.568-.323.543-1.025.72-1.561.41z" />
            </svg>
            <p
              style={{ color: theme.spotify }}
              className="text-[10px] font-bold uppercase tracking-widest"
            >
              Focus Mode
            </p>
            <p className="text-white font-medium text-base mt-1 italic">
              Building the future...
            </p>
          </div>

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
                    className={`px-3 py-1.5 ${accentBg} border ${accentBorder} rounded-lg text-xs ${accentText} font-medium`}
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
                      className={`absolute -left-1.25 top-0 h-2.5 w-2.5 rounded-full bg-neutral-700 group-hover/item:${accentIcon.replace("text-", "bg-")} transition-colors`}
                    />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <div>
                        <h4 className="text-white font-bold text-lg">
                          {exp.position}
                        </h4>
                        <p className={`${accentText} text-sm font-medium`}>
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
                    className={`p-2 bg-neutral-800 rounded-lg ${accentText}`}
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
                  className={`text-xl font-bold text-white group-hover:${accentText} transition-colors`}
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
