"use client";

import { Bot, Settings2, TerminalSquare } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { IconOpenAI } from "./icons";

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

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="pt-4 flex flex-col items-center gap-y-2">
      <Link href="/" className="mt-1 mb-4">
        <IconOpenAI className="w-6 h-6" />
      </Link>
      {routes.map((route) => (
        <Link href={route.href} key={route.href}>
          <div
            className={cn(
              "p-2 cursor-pointer rounded-lg",
              pathname === route.href ? route.bgColor : "hover:bg-gray-100",
            )}
          >
            <route.icon
              className={cn(
                "h-[18px] w-[18px]",
                pathname === route.href ? route.color : "text-muted-foreground",
              )}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
