"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useCmdEnterSubmit } from "@/lib/hooks/use-cmd-enter-submit";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface PromptProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isLoading: boolean;
}

const PromptForm = ({
  onSubmit,
  handleInputChange,
  isLoading,
}: PromptProps) => {
  const [input, setInput] = useState<string>("");
  const { formRef, onKeyDown } = useCmdEnterSubmit();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setInput("");
        onSubmit(e);
      }}
      ref={formRef}
    >
      <div className="relative flex max-h-60 w-full items-center justify-between gap-x-4 bg-background p-0.5 pr-4 sm:rounded-md sm:border">
        <Textarea
          tabIndex={0}
          rows={1}
          value={input}
          onKeyDown={onKeyDown}
          onChange={(e) => {
            setInput(e.target.value);
            handleInputChange(e);
          }}
          placeholder="Tell me a dad joke..."
          spellCheck={false}
          className="min-h-[60px] w-full resize-none border-0 bg-transparent px-4 py-[1.3rem] focus-within:outline-none focus-visible:ring-0 focus-visible:ring-transparent sm:text-sm"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="submit"
              className="h-auto w-auto bg-green-600 p-2 hover:bg-green-700"
              disabled={isLoading || input === ""}
            >
              Submit
            </Button>
          </TooltipTrigger>
          <TooltipContent className="mb-2 flex gap-x-2 rounded-lg bg-slate-700 py-2 font-mono text-sm font-medium text-white">
            Submit
            <kbd className="pointer-events-none h-5 select-none rounded border border-slate-600 bg-slate-600 px-1.5 opacity-100">
              ⌘ + Enter
            </kbd>
          </TooltipContent>
        </Tooltip>
      </div>
    </form>
  );
};

export default PromptForm;
