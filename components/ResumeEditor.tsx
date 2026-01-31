"use client";

import { useResumeStore } from "@/hooks/stores/useResumeStore";
import { Resume } from "@/lib/types";
import AnimatedIconButton from "./AnimatedBtn";
import EyeIcon from "./ui/eye-icon";
import PenIcon from "./ui/pen-icon";

type Props = { resume: Resume };

export default function ResumeEditor() {
  const resume = useResumeStore((s) => s.resume);
  console.log(resume);

  if (!resume) return <p>error</p>;

  return (
    <div>
      <div className="flex tracking-wide justify-start gap-2.5 max-sm:w-full md:w-[80vw] max-sm:px-6">
        <AnimatedIconButton icon={<EyeIcon className="-me-0.5" />}>
          Preview
        </AnimatedIconButton>
        <AnimatedIconButton icon={<PenIcon />}>Edit</AnimatedIconButton>
      </div>
      <div className="min-h-screen justify-center flex py-12 px-4">
        <ResumeCard resume={resume} />
      </div>
    </div>
  );
}

const ResumeCard = ({ resume }: Props) => {
  return (
    <div className="bg-white rounded-lg min-h-screen p-4 sm:p-10 font-sans text-black antialiased">
      <div className="max-w-2xl text-left">
        {/* Header */}
        <header className="flex justify-between items-start mb-8">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tighter leading-none">
              {resume.personalInfo.name}
            </h1>
            <p className="text-[15px] text-gray-600 font-medium">
              {resume.personalInfo.title}
            </p>
            <div className="text-[12px] text-gray-400 flex flex-wrap gap-x-3">
              <span>{resume.personalInfo.location}</span>
              <span>{resume.personalInfo.phone}</span>
              <span>{resume.personalInfo.email}</span>
            </div>

            <div className="flex gap-2 pt-2">
              <div className="w-6 h-6 border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">
                in
              </div>
              <div className="w-6 h-6 border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">
                GH
              </div>
              <div className="w-6 h-6 border border-gray-200 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">
                X
              </div>
            </div>
          </div>
          <div className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 flex-shrink-0"></div>
        </header>

        {/* About */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-2">About</h2>
          <p className="text-[13px] text-gray-500 leading-relaxed tracking-tight">
            {resume.summary}
          </p>
        </section>

        {/* Skills - New Section */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Skills</h2>
          <div className="flex flex-wrap gap-1.5">
            {resume.skills.frameworksAndTools.map((skill, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-black text-white text-[10px] rounded-md font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects (Replaces Work Experience) */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">Projects</h2>
          <div className="space-y-6">
            {resume.projects.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-[14px] font-bold tracking-tight">
                    {project.name}
                  </h3>
                  <span className="text-[10px] text-gray-400 font-mono">
                    {project.link}
                  </span>
                </div>
                <ul className="list-disc ml-4 space-y-1">
                  {project.description.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-[12px] text-gray-500 leading-normal"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Education</h2>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-[14px] font-bold">
                {resume.education.university}
              </h3>
              <p className="text-[12px] text-gray-600">
                {resume.education.degree} in {resume.education.branch}
              </p>
            </div>
            <span className="text-gray-400 text-xs">
              {resume.education.duration}
            </span>
          </div>
        </section>

        {/* Extracurricular */}
        <section>
          <h2 className="text-lg font-bold mb-3">Extracurricular</h2>
          <ul className="space-y-2">
            {resume.extracurricular.map((item, idx) => (
              <li
                key={idx}
                className="text-[12px] text-gray-500 border-l-2 border-gray-100 pl-3"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
