import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface MessageRoleProps extends HTMLAttributes<HTMLDivElement> {
  role: string;
  isHover: boolean;
}

const MessageRole = ({
  role,
  isHover,
  className,
  ...props
}: MessageRoleProps) => {
  return (
    <div
      className={cn(
        "w-fit rounded-md p-1.5 text-sm font-medium uppercase",
        isHover ? "bg-muted-foreground/20" : "bg-transparent",
        className,
      )}
      {...props}
    >
      {role}
    </div>
  );
};

export default MessageRole;
