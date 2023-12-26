import PgModeSelect from "@/components/pg-mode-select";
import MobileSettings from "@/components/mobile-setting";
import { cn } from "@/lib/utils";
import { IconGitHub } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-5 pt-3 md:border-b md:px-6 md:py-3">
      <div className="flex items-center gap-x-4">
        <h1 className="text-2xl font-semibold">Playground</h1>
        <PgModeSelect />
      </div>
      <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="https://github.com/stephenw310/open-llm-playground"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-8 w-8 p-0 lg:h-fit lg:w-fit lg:px-3 lg:py-1.5",
          )}
        >
          <IconGitHub className="h-5 w-5" />
          <span className="ml-2 hidden lg:flex">Star on GitHub</span>
        </a>
        <MobileSettings />
      </div>
    </div>
  );
};

export default Navbar;
