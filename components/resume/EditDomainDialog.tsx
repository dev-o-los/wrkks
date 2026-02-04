"use client";
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
import { updateUser } from "@/lib/supabase/user/updateUserData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { Input } from "../ui/input";
import PenIcon from "../ui/pen-icon";
import { toastManager } from "../ui/toast";

export default function EditDomainDialog({ username }: { username: string }) {
  const ref = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newUsername: string) => updateUser({ username: newUsername }),
    onSuccess: (updatedData: string) => {
      toastManager.add({
        title: "Username updated successfully!",
        type: "success",
      });
      // refetch user data after update
      queryClient.invalidateQueries({ queryKey: ["user-slug"] });
      queryClient.setQueryData(["username"], updatedData);
    },

    onError: (err) => {
      toastManager.add({
        title: err.message,
        type: "error",
      });
    },
  });

  const handleUpdate = () => {
    if (ref.current?.value) {
      mutation.mutate(ref.current.value.trim());
    } else {
      return;
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          aria-label="Subscribe"
          className="inline-flex w-9 items-center justify-center rounded-e-md border border-input bg-background text-muted-foreground/80 text-sm outline-none transition-[color,box-shadow] hover:bg-accent hover:text-accent-foreground focus:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
        >
          <PenIcon aria-hidden="true" size={16} />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-left">
            Change Userhandle
          </AlertDialogTitle>
          <AlertDialogDescription className="text-left pt-2 pb-1">
            Old Userhandle
          </AlertDialogDescription>
          <Input placeholder={username} disabled />
          <AlertDialogDescription className="text-left pt-2 pb-1">
            Choose new Userhandle
          </AlertDialogDescription>
          <Input ref={ref} placeholder={"New " + username} />
        </AlertDialogHeader>
        <AlertDialogFooter className="">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleUpdate}>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
