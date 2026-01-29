import { Button } from "@/components/ui/button";
import { SparklesIcon } from "lucide-react";

export default function GenerateBtn() {
  return (
    <Button variant="outline" className="py-5 px-6 rounded-full">
      Generate Site
      <SparklesIcon aria-hidden="true" className="-me-1 opacity-60" size={16} />
    </Button>
  );
}
