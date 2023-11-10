import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface SystemPromptInputProps extends React.HTMLAttributes<HTMLDivElement> {
  prompt: string;
  setPrompt: (msg: string) => void;
}

const SystemPromptInput = ({
  prompt,
  setPrompt,
  className,
  ...props
}: SystemPromptInputProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col rounded-md border border-muted-foreground/50 p-2",
        className,
      )}
      {...props}
    >
      <div className="px-3 pb-1 pt-4 text-xs font-semibold">SYSTEM</div>
      <Textarea
        className="h-full resize-none border-0 text-[16px] font-light focus-visible:ring-0 focus-visible:ring-transparent"
        placeholder="You are a helpful assistant."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
    </div>
  );
};

export default SystemPromptInput;
