"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormEvent, useState, useTransition } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { inviteUserToDocument } from "../../../actions/actions";
import { toast } from "sonner";

function ManageUsers() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  // TODO: Use useRoom to get room id instead of using pathname
  const pathname = usePathname();

  const handleInvite = async (e: FormEvent) => {
    e.preventDefault();

    const roomId = pathname.split("/").pop();
    // if (!roomId || !email) return;

    // startTransition(async () => {
    //   const { success } = await inviteUserToDocument(roomId, email);

    //   if (success) {
    //     setIsOpen(false);
    //     setEmail("");
    //     toast.success("User Added to Room successfully");
    //   } else {
    //     toast.error("Failed to add user to room");
    //   }
    // });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button asChild variant="outline">
        <DialogTrigger>Users</DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Users with Access</DialogTitle>
          <DialogDescription>
            Below is a list of users who have access to this document.
          </DialogDescription>
        </DialogHeader> 

        <hr className="my-2" />

      </DialogContent>
    </Dialog>
  );
}

export default ManageUsers;
