"use client";

import { XCircle } from "lucide-react";
import { Message } from "ai/react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import DynamicTextarea from "@/components/dynamic-textarea";
import MessageRole from "@/components/message-role";
import { MessageRoleType } from "@/lib/types";

interface ChatMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  message: Message;
  onDeleteMessage: (id: string) => void;
  onEditMessage: (id: string, content: string) => void;
  onChangeRole: (id: string, currentRole: MessageRoleType) => void;
}

const ChatMessage = ({
  message,
  onDeleteMessage,
  onEditMessage,
  onChangeRole,
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
      <div className="mt-2 w-24 flex-none">
        <MessageRole
          role={message.role}
          isHover={isHover}
          onClick={() => {
            onChangeRole(message.id, message.role);
          }}
        />
      </div>
      <DynamicTextarea
        value={message.content as string}
        placeholder={`Enter ${
          message.role === "user" ? "a user" : "an assistant"
        } message here.`}
        onChange={(e) => {
          onEditMessage(message.id, e.target.value);
        }}
        onFocus={(e) => {
          e.target.select();
          setIsFocus(true);
        }}
        onBlur={() => setIsFocus(false)}
        className="p-3 font-light focus-visible:ring-green-600"
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
