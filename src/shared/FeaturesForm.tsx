import React from "react";
import AddPost from "./AddPost";
import UpdatePost from "./UpdatePost";
import { useFeatures } from "@/hooks";

export default function FeaturesForm() {
  const { data, isLoading } = useFeatures();
  if (isLoading) {
    return <div>جاري التحميل...</div>;
  }
  return (
    <div className="flex flex-col gap-10">
      <UpdatePost type="features" desc={false} data={data} label="المميزات" />
      <AddPost type="features" desc={false} />
    </div>
  );
}
