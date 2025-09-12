import React from "react";
import UpdatePost from "./UpdatePost";
import { usePost } from "@/hooks/usePost";

export default function VissionForm() {
  const { data, isLoading } = usePost("vission");
  if (isLoading) {
    return <div>جاري التحميل...</div>;
  }
  return (
    <div className="flex flex-col gap-10">
      <UpdatePost type="vission" data={data} label="الرؤية" remove={false} />
    </div>
  );
}
