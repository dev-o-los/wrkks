import { Input } from "@/components/ui/input";
import { useId } from "react";
import EditDomainDialog from "./resume/EditDomainDialog";

export default function DomainInputField({ username }: { username: string }) {
  const id = useId();

  return (
    <div className="*:not-first:mt-2">
      <div className="flex rounded-md shadow-xs">
        <Input
          className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
          id={id}
          placeholder={username}
          disabled
          type="text"
        />

        <EditDomainDialog username={username} />
      </div>
    </div>
  );
}
