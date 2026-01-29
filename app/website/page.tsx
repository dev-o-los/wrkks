import DomainInputField from "@/components/DomainInputField";
import { Button } from "@/components/ui/button";
import LinkIcon from "@/components/ui/link-icon";

export default function Site() {
  const isLive = false;

  return (
    <div>
      <div className="flex mt-12 text-lg text-center flex-col justify-center items-center">
        <div className="md:w-[80vw] mx-4 max-sm:block p-4 rounded-lg border justify-between mb-12 flex items-center gap-2.5">
          <div className="flex gap-1.5 items-center">
            <LinkIcon size={17} className="mt-1" />
            wrkks.in /
            <DomainInputField />
          </div>
          <div className="gap-2.5 flex justify-center max-sm:mt-4">
            {isLive && (
              <Button variant="secondary" className="w-full">
                Unpublish
              </Button>
            )}
            <Button className="w-full">Publish</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
