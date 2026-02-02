const steps = [
  {
    title: "Prepare Your Data",
    description:
      "Use your existing resume PDF or export your LinkedIn profile as a PDF from the 'Resources' section on your profile.",
  },
  {
    title: "Upload Document",
    description:
      "Drop your PDF into our secure uploader. Our system immediately begins parsing your experience, skills, and achievements.",
  },
  {
    title: "AI Transformation",
    description:
      "Our AI analyzes your professional history to structure it into a high-conversion, web-optimized format.",
  },
  {
    title: "Custom Generation",
    description:
      "Sit back while we build a custom-made personal website that mirrors a professional resume view with a modern digital touch.",
  },
  {
    title: "Review & Launch",
    description:
      "Finalize your details, choose your theme, and launch your professional portfolio to the world in seconds.",
  },
];

export default function Timeline() {
  return (
    <div className="mx-auto max-w-(--breakpoint-sm) px-6 py-12 md:py-20">
      <div className="relative ml-6">
        {/* Timeline line */}
        <div className="absolute inset-y-0 left-0 border-l-2" />

        {steps.map(({ title, description }, index) => (
          <div className="relative pb-10 pl-10 last:pb-0" key={index}>
            {/* Timeline Icon */}
            <div className="absolute left-px flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-muted-foreground/40 bg-accent ring-8 ring-background">
              <span className="font-semibold text-lg">{index + 1}</span>
            </div>

            {/* Content */}
            <div className="space-y-2 pt-1">
              <h3 className="font-semibold text-xl tracking-[-0.01em]">
                {title}
              </h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
