"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useResumeStore } from "@/hooks/stores/useResumeStore";
import { CustomSection, Education, Experience, Project } from "@/lib/types";
import { Plus, X } from "lucide-react";
import EditSkillsDialog from "./EditSkillsDialog";

export const ResumeEditor = () => {
  const {
    resume,
    updatePersonalInfo,
    updateSummary,
    updateExperience,
    updateEducation,
    updateSkills,
    updateProjects,
    updateCustomSections,
    updateExtracurricular,
  } = useResumeStore();

  if (!resume) {
    return (
      <div className="flex h-full items-start p-8 text-muted-foreground">
        No resume data found. Please upload or enter text to begin.
      </div>
    );
  }

  const sectionHeadingClass =
    "text-2xl text-start font-semibold text-foreground mb-4";
  const labelClass = "text-start font-medium text-foreground mb-1 block";
  const cardClass = "relative border rounded-lg p-5 space-y-4 mb-4 bg-card";
  const buttonClass =
    "w-full border-dashed border-2 bg-card py-6 text-muted-foreground";

  // Helper to add new items
  const addExperience = () => {
    const newExp: Experience = {
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      isCurrentRole: false,
      description: [""],
      technologies: [],
    };
    updateExperience([...resume.experience, newExp]);
  };

  const addEducation = () => {
    const newEdu: Education = {
      university: "",
      degree: "",
      branch: "",
      location: "",
      sgpa: "",
      startDate: "",
      endDate: "",
    };
    updateEducation([...resume.education, newEdu]);
  };

  const addProject = () => {
    const newProj: Project = {
      name: "",
      role: "",
      startDate: "",
      endDate: "",
      description: [""],
      technologies: [],
      link: "",
    };
    updateProjects([...(resume.projects || []), newProj]);
  };

  const addCustomSection = () => {
    const newSection: CustomSection = {
      title: "",
      items: [""],
    };
    updateCustomSections([...(resume.customSections || []), newSection]);
  };

  return (
    <aside className="w-full h-full bg-background flex flex-col max-w-3xl mx-auto border rounded-lg">
      <ScrollArea className="flex-1">
        <div className="p-8 space-y-10">
          {/* HEADER SECTION */}
          <section>
            <h2 className={sectionHeadingClass}>Personal Info</h2>
            <div className="flex gap-4 mb-4">
              <div>
                <label className={labelClass}>Name</label>
                <Input
                  value={resume.personalInfo.name}
                  placeholder="Elon Tusk"
                  onChange={(e) => updatePersonalInfo({ name: e.target.value })}
                />
              </div>
              <div>
                <label className={labelClass}>Headline</label>
                <Input
                  value={resume.personalInfo.title}
                  placeholder="CEO of X-tra Large Projects"
                  onChange={(e) =>
                    updatePersonalInfo({ title: e.target.value })
                  }
                />
              </div>
              <div>
                <label className={labelClass}>Location</label>
                <Input
                  value={resume.personalInfo.location}
                  placeholder="Starbase, Texas / Orbit"
                  onChange={(e) =>
                    updatePersonalInfo({ location: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mb-4">
              <label className={labelClass}>Short About</label>
              <Textarea
                className="min-h-25"
                placeholder="Highly motivated multi-planet entrepreneur with a proven track record of disrupting industries that didn't even know they were broken. Expert in first-principles thinking, 80-hour work weeks, and naming children after Wi-Fi passwords. Currently seeking to move humanity's 'production' environment to Mars because Earth's 'staging' server is getting too crowded."
                value={resume.summary}
                onChange={(e) => updateSummary(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className={labelClass}>Email</label>
                <Input
                  value={resume.personalInfo.email}
                  placeholder="tusk@x.com"
                  onChange={(e) =>
                    updatePersonalInfo({ email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className={labelClass}>Phone Number</label>
                <Input
                  value={resume.personalInfo.phone}
                  onChange={(e) =>
                    updatePersonalInfo({ phone: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-start font-medium text-muted-foreground uppercase tracking-wider text-[10px]">
                Social Links
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Website</label>
                  <Input
                    value={resume.personalInfo.website || ""}
                    onChange={(e) =>
                      updatePersonalInfo({ website: e.target.value })
                    }
                    placeholder="your-website.com"
                  />
                </div>
                <div>
                  <label className={labelClass}>GitHub</label>
                  <Input
                    value={resume.personalInfo.github || ""}
                    onChange={(e) =>
                      updatePersonalInfo({ github: e.target.value })
                    }
                    placeholder="github.com/username"
                  />
                </div>
                <div>
                  <label className={labelClass}>LinkedIn</label>
                  <Input
                    value={resume.personalInfo.linkedin || ""}
                    onChange={(e) =>
                      updatePersonalInfo({ linkedin: e.target.value })
                    }
                    placeholder="linkedin.com/in/username"
                  />
                </div>
                <div>
                  <label className={labelClass}>Twitter/X</label>
                  <Input
                    value={resume.personalInfo.twitter}
                    onChange={(e) =>
                      updatePersonalInfo({ twitter: e.target.value })
                    }
                    placeholder="Twitter"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* WORK EXPERIENCE */}
          <section>
            <h2 className={sectionHeadingClass}>Work Experience</h2>
            <div className="space-y-4">
              {resume.experience.map((exp, idx) => (
                <div key={idx} className={cardClass}>
                  <button
                    onClick={() =>
                      updateExperience(
                        resume.experience.filter((_, i) => i !== idx),
                      )
                    }
                    className="absolute top-4 right-4 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X size={16} />
                  </button>
                  <div className="space-y-4">
                    <div>
                      <label className={labelClass}>Job Title</label>
                      <Input
                        value={exp.position}
                        onChange={(e) => {
                          const newExp = [...resume.experience];
                          newExp[idx].position = e.target.value;
                          updateExperience(newExp);
                        }}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Company</label>
                        <Input
                          value={exp.company}
                          onChange={(e) => {
                            const newExp = [...resume.experience];
                            newExp[idx].company = e.target.value;
                            updateExperience(newExp);
                          }}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Location</label>
                        <Input
                          value={exp.location}
                          onChange={(e) => {
                            const newExp = [...resume.experience];
                            newExp[idx].location = e.target.value;
                            updateExperience(newExp);
                          }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Start Date</label>
                        <Input
                          value={exp.startDate}
                          onChange={(e) => {
                            const newExp = [...resume.experience];
                            newExp[idx].startDate = e.target.value;
                            updateExperience(newExp);
                          }}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>End Date</label>
                        <Input
                          value={exp.endDate}
                          onChange={(e) => {
                            const newExp = [...resume.experience];
                            newExp[idx].endDate = e.target.value;
                            updateExperience(newExp);
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Description</label>
                      <Textarea
                        className="min-h-25 resize-none text-sm"
                        value={exp.description.join("\n")}
                        onChange={(e) => {
                          const newExp = [...resume.experience];
                          newExp[idx].description = e.target.value.split("\n");
                          updateExperience(newExp);
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <Button
                onClick={addExperience}
                variant="outline"
                className={buttonClass}
              >
                <Plus size={16} className="mr-2" /> Add Work Experience
              </Button>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section>
            <h2 className={sectionHeadingClass}>Projects</h2>
            <div className="space-y-4">
              {resume.projects?.map((proj, idx) => (
                <div key={idx} className={cardClass}>
                  <button
                    onClick={() =>
                      updateProjects(
                        resume.projects.filter((_, i) => i !== idx),
                      )
                    }
                    className="absolute top-4 right-4 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X size={16} />
                  </button>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Project Name</label>
                      <Input
                        value={proj.name}
                        onChange={(e) => {
                          const newProjs = [...resume.projects];
                          newProjs[idx] = {
                            ...newProjs[idx],
                            name: e.target.value,
                          };
                          updateProjects(newProjs);
                        }}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Role</label>
                      <Input
                        value={proj.role}
                        onChange={(e) => {
                          const newProjs = [...resume.projects];
                          newProjs[idx] = {
                            ...newProjs[idx],
                            role: e.target.value,
                          };
                          updateProjects(newProjs);
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Start Date</label>
                      <Input
                        value={proj.startDate}
                        onChange={(e) => {
                          const newProjs = [...resume.projects];
                          newProjs[idx] = {
                            ...newProjs[idx],
                            startDate: e.target.value,
                          };
                          updateProjects(newProjs);
                        }}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>End Date</label>
                      <Input
                        value={proj.endDate}
                        onChange={(e) => {
                          const newProjs = [...resume.projects];
                          newProjs[idx] = {
                            ...newProjs[idx],
                            endDate: e.target.value,
                          };
                          updateProjects(newProjs);
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Project Link</label>
                    <Input
                      placeholder="https://github.com/..."
                      value={proj.link}
                      onChange={(e) => {
                        const newProjs = [...resume.projects];
                        newProjs[idx] = {
                          ...newProjs[idx],
                          link: e.target.value,
                        };
                        updateProjects(newProjs);
                      }}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Description</label>
                    <Textarea
                      className="min-h-25 resize-none text-sm"
                      value={proj.description.join("\n")}
                      onChange={(e) => {
                        const newProjs = [...resume.projects];
                        newProjs[idx] = {
                          ...newProjs[idx],
                          description: e.target.value.split("\n"),
                        };
                        updateProjects(newProjs);
                      }}
                    />
                  </div>
                </div>
              ))}
              <Button
                onClick={addProject}
                variant="outline"
                className={buttonClass}
              >
                <Plus size={16} className="mr-2" /> Add Project
              </Button>
            </div>
          </section>

          {/* EDUCATION */}
          <section>
            <h2 className={sectionHeadingClass}>Education</h2>
            <div className="space-y-4">
              {resume.education.map((edu, idx) => (
                <div key={idx} className={cardClass}>
                  <button
                    onClick={() =>
                      updateEducation(
                        resume.education.filter((_, i) => i !== idx),
                      )
                    }
                    className="absolute top-4 right-4 text-muted-foreground hover:text-destructive"
                  >
                    <X size={16} />
                  </button>
                  <div className="space-y-4">
                    <div>
                      <label className={labelClass}>Degree</label>
                      <Input
                        value={edu.degree}
                        onChange={(e) => {
                          const newEdu = [...resume.education];
                          newEdu[idx].degree = e.target.value;
                          updateEducation(newEdu);
                        }}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>School</label>
                      <Input
                        value={edu.university}
                        onChange={(e) => {
                          const newEdu = [...resume.education];
                          newEdu[idx].university = e.target.value;
                          updateEducation(newEdu);
                        }}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Start Date</label>
                        <Input
                          value={edu.startDate}
                          onChange={(e) => {
                            const newEdu = [...resume.education];
                            newEdu[idx].startDate = e.target.value;
                            updateEducation(newEdu);
                          }}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>End Date</label>
                        <Input
                          value={edu.endDate}
                          onChange={(e) => {
                            const newEdu = [...resume.education];
                            newEdu[idx].endDate = e.target.value;
                            updateEducation(newEdu);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Button
                onClick={addEducation}
                variant="outline"
                className={buttonClass}
              >
                <Plus size={16} className="mr-2" /> Add Education
              </Button>
            </div>
          </section>

          {/* SKILLS */}
          <section className="pb-10">
            <h2 className={sectionHeadingClass}>Skills</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {/* Combine languages and frameworks for the tag UI as seen in screenshot */}
              {resume.skills.languages.map((skill, i) => (
                <div
                  key={`lang-${i}`}
                  className="flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm border"
                >
                  {skill}
                  <X
                    size={14}
                    className="cursor-pointer opacity-60 hover:opacity-100"
                    onClick={() =>
                      updateSkills({
                        languages: resume.skills.languages.filter(
                          (_, idx) => idx !== i,
                        ),
                      })
                    }
                  />
                </div>
              ))}
              {resume.skills.frameworksAndTools.map((skill, i) => (
                <div
                  key={`tool-${i}`}
                  className="flex items-center gap-1 bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm border"
                >
                  {skill}
                  <X
                    size={14}
                    className="cursor-pointer opacity-60 hover:opacity-100"
                    onClick={() =>
                      updateSkills({
                        frameworksAndTools:
                          resume.skills.frameworksAndTools.filter(
                            (_, idx) => idx !== i,
                          ),
                      })
                    }
                  />
                </div>
              ))}
            </div>
            <EditSkillsDialog updateSkills={updateSkills} resume={resume} />
          </section>

          {/* EXTRACURRICULAR SECTION */}
          <section>
            <h2 className={sectionHeadingClass}>Extracurricular Activities</h2>
            <div className={cardClass}>
              <label className={labelClass}>Activities (One per line)</label>
              <Textarea
                placeholder="Volunteering at...\nWon 1st place in..."
                className="min-h-32 resize-none text-sm"
                value={resume.extracurricular?.join("\n") || ""}
                onChange={(e) =>
                  updateExtracurricular(e.target.value.split("\n"))
                }
              />
              <p className="text-[10px] text-muted-foreground italic">
                Each new line will appear as a separate bullet point.
              </p>
            </div>
          </section>

          {/* CUSTOM SECTIONS (Certifications, Languages, etc.) */}
          <section className="pb-4">
            <h2 className={sectionHeadingClass}>Custom Sections</h2>
            <div className="space-y-6">
              {resume.customSections?.map((section, sIdx) => (
                <div key={sIdx} className={cardClass}>
                  <button
                    onClick={() =>
                      updateCustomSections(
                        resume.customSections.filter((_, i) => i !== sIdx),
                      )
                    }
                    className="absolute top-4 right-4 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X size={16} />
                  </button>

                  <div className="space-y-4">
                    <div>
                      <label className={labelClass}>Section Title</label>
                      <Input
                        placeholder="e.g. Certifications"
                        value={section.title}
                        onChange={(e) => {
                          const newSections = [...resume.customSections];
                          newSections[sIdx] = {
                            ...newSections[sIdx],
                            title: e.target.value,
                          };
                          updateCustomSections(newSections);
                        }}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Items (One per line)</label>
                      <Textarea
                        className="min-h-24 resize-none text-sm"
                        placeholder="AWS Certified Solutions Architect"
                        value={section.items.join("\n")}
                        onChange={(e) => {
                          const newSections = [...resume.customSections];
                          newSections[sIdx] = {
                            ...newSections[sIdx],
                            items: e.target.value.split("\n"),
                          };
                          updateCustomSections(newSections);
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}

              <Button
                onClick={addCustomSection}
                variant="outline"
                className={buttonClass}
              >
                <Plus size={16} className="mr-2" /> Add Custom Section
              </Button>
            </div>
          </section>
        </div>
      </ScrollArea>
    </aside>
  );
};
