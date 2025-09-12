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
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="w-full lg:w-[300px] p-5 shadow-primary bg-neutral-200 flex lg:flex-col justify-between items-center lg:items-start gap-6">
      <Image
        src="/menu-black.svg"
        alt="menu"
        width={25}
        height={25}
        className="lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className="relative w-15 h-15 lg:h-[70px] lg:w-[70px] lg:mx-auto">
        <Image src="/logo.svg" alt="logo" fill />
      </div>
      <div className=" flex-col gap-6 h-full hidden lg:flex w-full">
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" flex flex-col h-[100vh] w-[250px] gap-5 fixed top-0 right-0 lg:hidden bg-neutral-200 z-50 p-5 shadow-primary">
          <Image
            src="/close.svg"
            alt="close"
            width={25}
            height={25}
            onClick={() => setIsOpen(!isOpen)}
            className="mr-auto"
          />

          <div className="text-center items-center flex flex-col gap-1 justify-center text-primary-950 ">
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
      )}
    </div>
  );
}
