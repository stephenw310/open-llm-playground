"use client";

import { XCircle } from "lucide-react";
import { Message } from "ai/react";
import { useState } from "react";

import { IconOpenAI, IconUser } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ChatMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  message: Message;
  onDeleteMessage: (id: string) => void;
}

const ChatMessage = ({
  message,
  onDeleteMessage,
  className,
  ...props
}: ChatMessageProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={cn(
        "p-5 w-full flex items-start justify-between gap-x-5 border-b border-muted-foreground/30 cursor-pointer hover:bg-muted",
        className,
      )}
      {...props}
    >
      {message.role === "user" ? (
        <IconUser className="mt-0.5" />
      ) : (
        <IconOpenAI className="mt-0.5" />
      )}
      <div className="w-full font-light text-md whitespace-break-spaces">
        {message.content as string}
      </div>
      <Button
        size="icon"
        variant="ghost"
        className="w-fit h-fit"
        onClick={() => onDeleteMessage(message.id)}
      >
        <XCircle
          className={cn(
            "w-5 h-5 ml-1 mt-1 hover:text-muted-foreground",
            isHover ? "text-muted-foreground/50" : "text-transparent",
          )}
        />
      </Button>
    </div>
  );
};

export default ChatMessage;
