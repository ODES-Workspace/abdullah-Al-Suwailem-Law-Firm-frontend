import React from "react";
import UpdatePost from "./UpdatePost";
import useMission from "@/hooks/useMission";

export default function MissionForm() {
  const { data, isLoading } = useMission();
  if (isLoading) {
    return <div>جاري التحميل...</div>;
  }
  return (
    <div className="flex flex-col gap-10">
      <UpdatePost type="mission" data={data} label="المهمة" remove={false} />
    </div>
  );
}
