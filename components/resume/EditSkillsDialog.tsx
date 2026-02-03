import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Resume, Skills } from "@/lib/types";
import { Plus } from "lucide-react";
import { useRef } from "react";
import { Input } from "../ui/input";

export default function EditSkillsDialog({
  resume,
  updateSkills,
}: {
  resume: Resume;
  updateSkills: (skills: Partial<Skills>) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full border-dashed border-2 bg-card py-6 text-muted-foreground"
        >
          <Plus size={16} className="mr-2" /> Add Skills
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-left">
            Add New Skill
          </AlertDialogTitle>
          <AlertDialogDescription className="text-left pt-2 pb-1">
            New Skill Name
          </AlertDialogDescription>
          <Input ref={ref} placeholder="blah blah blah.." />
        </AlertDialogHeader>
        <AlertDialogFooter className="">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              const val = ref.current?.value;
              if (val) {
                updateSkills({
                  languages: [...resume.skills.languages, val],
                });
              }
            }}
          >
            Save
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
