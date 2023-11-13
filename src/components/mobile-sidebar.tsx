"use client";

import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "@/components/sidebar";
import { IconOpenAI } from "@/components/icons";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex items-center justify-between px-3 py-1">
      <Link href="/" className="ml-2">
        <IconOpenAI className="h-6 w-6" />
      </Link>
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full px-0 pt-8">
          <Sidebar isMobile={true} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
