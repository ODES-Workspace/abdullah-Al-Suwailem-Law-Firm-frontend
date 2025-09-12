import React from "react";
import UpdatePost from "./UpdatePost";
import { useAbout } from "@/hooks";

export default function AboutForm() {
  const { data, isLoading } = useAbout();
  if (isLoading) {
    return <div>جاري التحميل...</div>;
  }
  return (
    <div className="flex flex-col gap-10">
      <UpdatePost
        type="about"
        data={data}
        label="عن الشركة"
        image={false}
        remove={false}
      />
    </div>
  );
}
