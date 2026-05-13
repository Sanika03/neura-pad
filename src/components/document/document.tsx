"use client";

import { useState, useTransition, FormEvent, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import Editor from "../editor/editor";
import DeleteDocument from "./deleteDocument";
import useOwner from "@/lib/useOwner";
import InviteUser from "../common/inviteUser";
import ManageUsers from "../common/manageUsers";

function Document({ id }: { id: string }) {
  const [data, loading, error] = useDocumentData(doc(db, "documents", id));
  const [input, setInput] = useState("");
  const [isUpdating, startTransition] = useTransition();
  const isOwner = useOwner();

  useEffect(() => {
    if (data) {
      setInput(data.title);
    }
  }, [data]);

  const updateTitle = (e: FormEvent) => {
    e.preventDefault();

    if (input.trim()) {
      startTransition(async () => {
        await updateDoc(doc(db, "documents", id), {
          title: input,
        });
      });
    }
  };

  return (
    <div className="flex-1 bg-white p-5 h-full">
      <div className="flex max-w-6xl mx-auto justify-between pb-5">
        <form onSubmit={updateTitle} className="flex flex-1 space-x-2">
          <Input value={input} onChange={(e) => setInput(e.target.value)} />

          <Button disabled={isUpdating} type="submit">
            {isUpdating ? "Updating..." : "Update"}
          </Button>

          {isOwner && (
            <>
              <InviteUser />
              <DeleteDocument />
            </>
          )}
        </form>
      </div>

      <div className="flex max-w-6xl mx-auto justify-between items-center mb-5">
        <ManageUsers />

        {/* Avatars */}
      </div>

      <hr className="pb-10" />

      <Editor />
    </div>
  );
}
export default Document;
