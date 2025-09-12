import React from "react";
import UpdatePost from "./UpdatePost";
import { usePost } from "@/hooks/usePost";

export default function MissionForm() {
  const { data, isLoading } = usePost("mission");
  if (isLoading) {
    return <div>جاري التحميل...</div>;
  }
  return (
    <div className="flex flex-col gap-10">
      <UpdatePost type="mission" data={data} label="المهمة" remove={false} />
    </div>
  );
}
