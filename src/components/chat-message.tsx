"use client";

import { XCircle } from "lucide-react";
import { Message } from "ai/react";
import { useState } from "react";

import { IconOpenAI, IconUser } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import DynamicTextarea from "@/components/dynamic-textarea";

interface ChatMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  message: Message;
  onDeleteMessage: (id: string) => void;
  onEditMessage: (id: string, content: string) => void;
}

const ChatMessage = ({
  message,
  onDeleteMessage,
  onEditMessage,
  className,
  ...props
}: ChatMessageProps) => {
  const [isHover, setIsHover] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={cn(
        "flex w-full cursor-pointer items-start justify-between gap-x-5 border-b border-muted-foreground/50 p-5",
        isHover || isFocus ? "bg-muted" : "bg-transparent",
        className,
      )}
      {...props}
    >
      {message.role === "user" ? (
        <IconUser className="mt-3.5" />
      ) : (
        <IconOpenAI className="mt-3.5" />
      )}
      <DynamicTextarea
        value={message.content as string}
        onChange={(e) => {
          onEditMessage(message.id, e.target.value);
        }}
        onFocus={(e) => {
          e.target.select();
          setIsFocus(true);
        }}
        onBlur={() => setIsFocus(false)}
        className="p-3 focus-visible:ring-green-600"
      />
      <Button
        size="icon"
        variant="ghost"
        className="h-fit w-fit"
        onClick={() => onDeleteMessage(message.id)}
      >
        <XCircle
          className={cn(
            "ml-1 mt-3.5 h-5 w-5 hover:text-muted-foreground",
            isHover || isFocus
              ? "text-muted-foreground/50"
              : "text-transparent",
          )}
        />
      </Button>
    </div>
  );
};

export default ChatMessage;
