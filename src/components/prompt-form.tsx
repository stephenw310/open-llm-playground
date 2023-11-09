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
      <div className="relative flex max-h-60 w-full items-center justify-between bg-background gap-x-4 p-0.5 pr-4 sm:rounded-md sm:border">
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
          className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] border-0 focus-within:outline-none focus-visible:ring-0 focus-visible:ring-transparent sm:text-sm"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="submit"
              className="w-18 h-10 bg-green-600 hover:bg-green-700"
              disabled={isLoading || input === ""}
            >
              Submit
            </Button>
          </TooltipTrigger>
          <TooltipContent className="flex gap-x-2 font-mono text-sm font-medium py-2">
            Submit
            <kbd className="pointer-events-none h-5 select-none rounded border bg-muted px-1.5 opacity-100">
              ⌘ + Enter
            </kbd>
          </TooltipContent>
        </Tooltip>
      </div>
    </form>
  );
};

export default PromptForm;
