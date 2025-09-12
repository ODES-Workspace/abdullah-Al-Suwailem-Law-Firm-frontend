import React from "react";
import AddPost from "./AddPost";
import UpdatePost from "./UpdatePost";
import { usePost } from "@/hooks/usePost";

export default function ServicesForm() {
  const { data, isLoading } = usePost("services");
  if (isLoading) {
    return <div>جاري التحميل...</div>;
  }
  return (
    <div className="flex flex-col gap-10">
      <UpdatePost type="services" data={data} label=" الخدمات" />
      <AddPost type="services" />
    </div>
  );
}
