import DomainInputField from "@/components/DomainInputField";
import ResumePreview from "@/components/ResumeEditor";
import StatusBtn from "@/components/StatusBtn";
import { Button } from "@/components/ui/button";
import LinkIcon from "@/components/ui/link-icon";

export default function WebSite() {
  const isLive = false;

  return (
    <div>
      <div className="flex mt-12 text-lg text-center flex-col justify-center items-center">
        <div className="md:w-[80vw] mx-4 max-[915px]:block p-4 rounded-lg border justify-between mb-4 flex items-center gap-2.5">
          <div className="flex gap-1.5 items-center max-[915px]:text-sm">
            <LinkIcon size={17} className="mt-1" />
            <div>wrkks.vercel.app /</div>
            <DomainInputField />
          </div>
          <div className="gap-2.5 flex justify-center tracking-wide max-[915px]:mt-4">
            <StatusBtn status={isLive ? "live" : "Archive"} isDraft={!isLive} />
            {isLive && (
              <Button variant="secondary" className="w-full">
                Unpublish
              </Button>
            )}
            <Button className="w-full">
              {isLive ? "Visit site" : "Publish"}
            </Button>
          </div>
        </div>
        <ResumePreview />
      </div>
    </div>
  );
}
