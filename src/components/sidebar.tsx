"use client";

import { Bot, Settings2, TerminalSquare } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { IconLogo } from "./icons";

const routes = [
  {
    label: "Playground",
    icon: TerminalSquare,
    href: "/playground",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    label: "Assistant",
    icon: Bot,
    href: "/assistant",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    label: "Fine-tuning",
    icon: Settings2,
    href: "/finetune",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
];

interface SidebarProps {
  isMobile?: boolean;
}

const Sidebar = ({ isMobile }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center gap-y-2 pt-4">
      {!isMobile && (
        <Link href="/" className="mb-4 mt-1">
          <IconLogo className="h-6 w-6" />
        </Link>
      )}
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={`${isMobile ? "w-full" : "w-fit"}`}
        >
          <div
            className={cn(
              "flex cursor-pointer items-center gap-x-3 rounded-lg py-2",
              pathname === route.href ? route.bgColor : "hover:bg-gray-100",
              isMobile ? "px-4" : "px-2",
            )}
          >
            <route.icon
              className={cn(
                "h-[18px] w-[18px]",
                pathname === route.href ? route.color : "text-muted-foreground",
              )}
            />
            {isMobile && (
              <div
                className={cn(
                  "text-sm font-medium",
                  pathname === route.href
                    ? route.color
                    : "font-normal text-muted-foreground",
                )}
              >
                {route.label}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
