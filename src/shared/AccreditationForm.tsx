import React from "react";
import AddPost from "./AddPost";
import UpdatePost from "./UpdatePost";
import { useAccreditations } from "@/hooks";

export default function AccreditationForm() {
  const { data, isLoading } = useAccreditations();
  if (isLoading) {
    return <div>جاري التحميل...</div>;
  }
  return (
    <div className="flex flex-col gap-10">
      <UpdatePost type="accreditations" data={data} label="الإعتمادات" />
      <AddPost type="accreditations" />
    </div>
  );
}
