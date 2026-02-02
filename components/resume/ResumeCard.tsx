import { normalizeUrl } from "@/lib/helpers";
import { Resume } from "@/lib/types";
import { Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import GithubIcon from "../ui/github-icon";
import TwitterXIcon from "../ui/twitter-x-icon";

type Props = { resume: Resume };

export const ResumeCard = ({ resume }: Props) => {
  const githubUrl = normalizeUrl(resume.personalInfo.github);
  const linkedInUrl = normalizeUrl(resume.personalInfo.linkedin);
  const websiteUrl = normalizeUrl(resume.personalInfo.website);
  const twitterUrl = normalizeUrl(resume.personalInfo.twitter);

  // Helper to check if a string has actual content
  const hasContent = (val?: string) => val && val.trim().length > 0;

  return (
    <div className="bg-background rounded-lg min-h-screen p-4 sm:p-10 font-sans text-foreground antialiased border transition-colors duration-300">
      <div className="max-w-2xl mx-auto text-left">
        {/* Header */}
        <header className="flex justify-between items-start mb-10 gap-4">
          <div className="space-y-2">
            {hasContent(resume.personalInfo.name) && (
              <h1 className="text-4xl font-bold tracking-tighter leading-tight">
                {resume.personalInfo.name}
              </h1>
            )}

            {hasContent(resume.personalInfo.title) && (
              <p className="text-lg text-muted-foreground font-medium">
                {resume.personalInfo.title}
              </p>
            )}

            <div className="text-sm text-muted-foreground/70 flex flex-wrap gap-x-4 mt-3">
              {hasContent(resume.personalInfo.location) && (
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} /> {resume.personalInfo.location}
                </span>
              )}
              {hasContent(resume.personalInfo.phone) && (
                <span className="flex items-center gap-1.5">
                  <Phone size={14} /> {resume.personalInfo.phone}
                </span>
              )}
              {hasContent(resume.personalInfo.email) && (
                <span className="flex items-center gap-1.5">
                  <Mail size={14} /> {resume.personalInfo.email}
                </span>
              )}
            </div>

            {/* Social Links conditional block */}
            {(linkedInUrl || githubUrl || websiteUrl) && (
              <div className="flex gap-3 pt-3">
                {linkedInUrl && (
                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  >
                    <Linkedin size={18} strokeWidth={2} />
                  </a>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 pt-0.5 border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  >
                    <GithubIcon size={18} strokeWidth={2} />
                  </a>
                )}
                {twitterUrl && (
                  <a
                    href={twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  >
                    <TwitterXIcon size={18} strokeWidth={2} />
                  </a>
                )}
                {websiteUrl && (
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-border rounded-md text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  >
                    <Globe size={18} strokeWidth={2} />
                  </a>
                )}
              </div>
            )}
          </div>
          <div className="w-24 h-24 rounded-xl bg-muted border border-border shrink-0"></div>
        </header>

        {/* About */}
        {hasContent(resume.summary) && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-3 border-b pb-1 border-border">
              About
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed tracking-tight">
              {resume.summary}
            </p>
          </section>
        )}

        {/* Skills */}
        {(resume.skills.languages.length > 0 ||
          resume.skills.frameworksAndTools.length > 0) && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4 border-b pb-1 border-border">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                ...resume.skills.languages,
                ...resume.skills.frameworksAndTools,
              ].map(
                (skill, idx) =>
                  hasContent(skill) && (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-md font-medium"
                    >
                      {skill}
                    </span>
                  ),
              )}
            </div>
          </section>
        )}

        {/* Work Experience */}
        {resume.experience.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-5 border-b pb-1 border-border">
              Work Experience
            </h2>
            <div className="space-y-8">
              {resume.experience.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-bold tracking-tight">
                      {exp.company}
                    </h3>
                    {(hasContent(exp.startDate) || hasContent(exp.endDate)) && (
                      <span className="text-xs text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded">
                        {exp.startDate}{" "}
                        {hasContent(exp.endDate) && `— ${exp.endDate}`}
                      </span>
                    )}
                  </div>
                  {hasContent(exp.position) && (
                    <p className="text-[15px] text-primary font-medium italic">
                      {exp.position}
                    </p>
                  )}
                  {exp.description.length > 0 && (
                    <ul className="list-disc ml-5 mt-2 space-y-2">
                      {exp.description.map(
                        (bullet, idx) =>
                          hasContent(bullet) && (
                            <li
                              key={idx}
                              className="text-[14px] text-muted-foreground leading-normal"
                            >
                              {bullet}
                            </li>
                          ),
                      )}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {resume.projects.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-5 border-b pb-1 border-border">
              Projects
            </h2>
            <div className="space-y-8">
              {resume.projects.map((project, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-bold tracking-tight">
                      {project.name}
                    </h3>
                    {(hasContent(project.startDate) ||
                      hasContent(project.endDate)) && (
                      <span className="text-xs text-muted-foreground font-mono">
                        {project.startDate}{" "}
                        {hasContent(project.endDate) && `— ${project.endDate}`}
                      </span>
                    )}
                  </div>
                  {hasContent(project.link) && (
                    <p className="text-[13px] text-primary font-mono hover:underline cursor-pointer truncate max-w-sm">
                      {project.link}
                    </p>
                  )}
                  {project.description.length > 0 && (
                    <ul className="list-disc ml-5 space-y-2">
                      {project.description.map(
                        (bullet, idx) =>
                          hasContent(bullet) && (
                            <li
                              key={idx}
                              className="text-[14px] text-muted-foreground leading-normal"
                            >
                              {bullet}
                            </li>
                          ),
                      )}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {resume.education.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4 border-b pb-1 border-border">
              Education
            </h2>
            <div className="space-y-6">
              {resume.education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold">{edu.university}</h3>
                    <div className="text-[15px] text-muted-foreground">
                      {edu.degree}{" "}
                      {hasContent(edu.branch) && `in ${edu.branch}`}
                    </div>
                    {hasContent(edu.sgpa) && (
                      <p className="text-sm font-medium text-primary">
                        SGPA: {edu.sgpa}
                      </p>
                    )}
                  </div>
                  {(hasContent(edu.startDate) || hasContent(edu.endDate)) && (
                    <span className="text-muted-foreground text-xs font-mono whitespace-nowrap bg-muted px-2 py-0.5 rounded">
                      {edu.startDate}{" "}
                      {hasContent(edu.endDate) && `- ${edu.endDate}`}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Extracurricular Activities */}
        {resume.extracurricular && resume.extracurricular.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xl font-bold mb-4 border-b pb-1 border-border">
              Extracurricular Activities
            </h2>
            <ul className="list-disc ml-5 space-y-2">
              {resume.extracurricular.map(
                (activity, idx) =>
                  hasContent(activity) && (
                    <li
                      key={idx}
                      className="text-[14px] text-muted-foreground leading-normal"
                    >
                      {activity}
                    </li>
                  ),
              )}
            </ul>
          </section>
        )}

        {/* Custom Sections (Certifications, Languages, etc.) */}
        {resume.customSections && resume.customSections.length > 0 && (
          <div className="space-y-10">
            {resume.customSections.map(
              (section, sIdx) =>
                hasContent(section.title) &&
                section.items.length > 0 && (
                  <section key={sIdx} className="mb-10">
                    <h2 className="text-xl font-bold mb-4 border-b pb-1 border-border">
                      {section.title}
                    </h2>
                    <ul className="list-disc ml-5 space-y-2">
                      {section.items.map(
                        (item, iIdx) =>
                          hasContent(item) && (
                            <li
                              key={iIdx}
                              className="text-[14px] text-muted-foreground leading-normal"
                            >
                              {item}
                            </li>
                          ),
                      )}
                    </ul>
                  </section>
                ),
            )}
          </div>
        )}
      </div>
    </div>
  );
};
