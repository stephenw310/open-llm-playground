"use client";

import { Settings } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ModelSettings from "./model-settings";

const MobileSettings = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="inline-flex h-8 w-8 bg-muted hover:bg-muted-foreground/20 lg:hidden"
          variant="ghost"
          size="icon"
        >
          <Settings size="20" />
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <ModelSettings className="w-full" />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSettings;
