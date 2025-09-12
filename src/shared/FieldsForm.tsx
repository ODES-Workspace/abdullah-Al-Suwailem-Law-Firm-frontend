import React from "react";
import AddPost from "./AddPost";
import UpdatePost from "./UpdatePost";
import { usePost } from "@/hooks/usePost";

export default function FieldsForm() {
  const { data, isLoading } = usePost("fields");
  if (isLoading) {
    return <div>جاري التحميل...</div>;
  }
  return (
    <div className="flex flex-col gap-10">
      <UpdatePost type="fields" data={data} label="المجالات" />
      <AddPost type="fields" />
    </div>
  );
}
