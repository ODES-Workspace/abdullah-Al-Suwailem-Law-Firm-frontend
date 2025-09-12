"use client";
import { getMetaTranslation } from "@/Helpers/getMetaTranslation";
import { getTranslation } from "@/Helpers/getTranslation";
import { usePost } from "@/hooks/usePost";
import { Item } from "@/lib";
import React from "react";

export default function Page() {
  const { data, isLoading } = usePost("consultant");

  console.log(data);

  if (isLoading) {
    return <div>جاري التحميل...</div>;
  }

  return (
    <div className="flex flex-col gap-10 ">
      <div className="text-3xl font-bold ">الاستشارات</div>

      <div className="overflow-x-auto  rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-primary text-white">
            <tr>
              <th className="px-6 py-4 text-right text-sm font-bold uppercase tracking-wider">
                العنوان
              </th>
              <th className="px-6 py-4 text-right text-sm font-bold uppercase tracking-wider">
                الوصف
              </th>
              <th className="px-6 py-4 text-right text-sm font-bold uppercase tracking-wider">
                رقم الهاتف
              </th>
              <th className="px-6 py-4 text-right text-sm font-bold uppercase tracking-wider">
                البريد الإلكتروني
              </th>
              <th className="px-6 py-4 text-right text-sm font-bold uppercase tracking-wider">
                الخدمة
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data?.map((item: Item, index: number) => {
              const title =
                getTranslation(item?.translations, "ar", "title") || "غير محدد";
              const desc =
                getTranslation(item?.translations, "ar", "description") ||
                "غير محدد";
              const phone =
                getMetaTranslation(item?.metas, "phone", "ar") || "غير محدد";
              const email =
                getMetaTranslation(item?.metas, "email", "ar") || "غير محدد";
              const service =
                getMetaTranslation(item?.metas, "service", "ar") || "غير محدد";

              return (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-colors duration-200`}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                    <div title={desc} className="truncate">
                      {desc}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <a
                      href={`tel:${phone}`}
                      dir="ltr"
                      className="text-primary hover:text-primary-600 transition-colors"
                    >
                      {phone}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <a
                      href={`mailto:${email}`}
                      className="text-primary hover:text-primary-600 transition-colors"
                    >
                      {email}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium">
                      {service}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {(!data || data.length === 0) && (
          <div className="text-center py-12 text-gray-500">
            لا توجد استشارات متاحة
          </div>
        )}
      </div>
    </div>
  );
}
