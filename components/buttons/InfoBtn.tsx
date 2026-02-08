import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import QuestionMark from "../ui/question-mark";
import AnimatedIconButton from "./AnimatedBtn";

export default function InfoDialog({ gifUrl }: { gifUrl: string }) {
  return (
    <div className="mb-10">
      <Dialog>
        <DialogTrigger asChild>
          <AnimatedIconButton
            icon={<QuestionMark />}
            className="px-3 py-1 border rounded-md text-sm"
          >
            How to use linkedin
          </AnimatedIconButton>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle className="text-sm">
            Go to your linkedin → Tap on “Resources” → Select “Save to PDF.”
          </DialogTitle>
          <Image
            src={gifUrl}
            alt="Guide GIF"
            className="rounded"
            height={500}
            width={500}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
