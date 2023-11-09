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
        "border p-2 border-muted-foreground/30 rounded-md w-full flex flex-col",
        className,
      )}
      {...props}
    >
      <div className="px-3 pt-4 pb-1 text-xs font-medium">SYSTEM</div>
      <Textarea
        className="h-full font-light text-md focus-visible:ring-0 focus-visible:ring-transparent border-0 resize-none"
        placeholder="You are a helpful assistant."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
    </div>
  );
};

export default SystemPromptInput;
