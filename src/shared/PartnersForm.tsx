import React from "react";
import AddPost from "./AddPost";
import UpdatePost from "./UpdatePost";
import { usePartners } from "@/hooks";

export default function PartnersForm() {
  const { data, isLoading } = usePartners();
  if (isLoading) {
    return <div>جاري التحميل...</div>;
  }
  return (
    <div className="flex flex-col gap-10">
      <UpdatePost
        type="partners"
        data={data}
        label="شركاؤنا"
        title={false}
        desc={false}
      />
      <AddPost type="partners" desc={false} />
    </div>
  );
}
