import React from "react";
import UpdatePost from "./UpdatePost";
import useVission from "@/hooks/useVission";

export default function VissionForm() {
  const { data, isLoading } = useVission();
  if (isLoading) {
    return <div>جاري التحميل...</div>;
  }
  return (
    <div className="flex flex-col gap-10">
      <UpdatePost type="vission" data={data} label="الرؤية" remove={false} />
    </div>
  );
}
