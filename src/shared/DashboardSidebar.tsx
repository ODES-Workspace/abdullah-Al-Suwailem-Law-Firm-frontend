import useLogout from "@/hooks/useLogout";
import { cn } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const LINKS = [
  {
    name: "إدارة المحتوى",
    href: "/admin",
  },
  {
    name: "الاستشارات",
    href: "/admin/consultations",
  },
  { name: "الخدمات", href: "/admin/services" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [user] = useState(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    }
    return null;
  });

  const { mutate } = useLogout();

  function handleLogout() {
    mutate(undefined, {
      onSuccess: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
      },
    });
  }

  return (
    <div className="w-[300px] p-5 shadow-primary bg-neutral-200 flex flex-col gap-6">
      <Image
        src="/logo.svg"
        alt="logo"
        width={70}
        height={70}
        className="mx-auto"
      />
      <div className="text-center items-center flex flex-col gap-1 justify-center text-primary-950">
        <div className="font-bold text-3xl">{user?.name}</div>
        <div className="text-lg">{user?.email}</div>
      </div>

      <div className="flex flex-col gap-2">
        {LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={cn(
              pathname === link.href && "bg-primary-400 text-white",
              "text-lg hover:bg-primary-400 hover:text-white transition-colors duration-300 p-2 rounded-lg"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div
        onClick={() => handleLogout()}
        className="mt-auto mb-10 py-2 w-full bg-white border-primary-700 px-4 cursor-pointer rounded-lg text-primary font-bold text-lg flex justify-between"
      >
        تسجيل الخروج
        <Image src="/logout.svg" alt="logout" width={25} height={25} />
      </div>
    </div>
  );
}
