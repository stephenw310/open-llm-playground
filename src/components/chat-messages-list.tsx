import { Message } from "ai/react";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import ChatMessage from "@/components/chat-message";
import { MessageRoleType } from "@/lib/types";

interface ChatMessagesListProps extends React.HTMLAttributes<HTMLDivElement> {
  messages: Message[];
  onDeleteMessage: (id: string) => void;
  onEditMessage: (id: string, content: string) => void;
  onChangeRole: (id: string, currentRole: MessageRoleType) => void;
}

const ChatMessagesList = ({
  messages,
  onDeleteMessage,
  onEditMessage,
  onChangeRole,
  className,
  ...props
}: ChatMessagesListProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom when the last message content changes
  // This is due to textarea auto expanding height
  // TODO: Fix scrolling when user is editing the last message
  useEffect(() => {
    // Scroll the container to the bottom
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages.slice(-1)[0]?.content]);

  return (
    <div
      ref={containerRef}
      className={cn("flex w-full flex-col", className)}
      {...props}
    >
      {messages
        .filter((message) => message.role !== "system")
        .map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            onDeleteMessage={onDeleteMessage}
            onEditMessage={onEditMessage}
            onChangeRole={onChangeRole}
          />
        ))}
    </div>
  );
};

export default ChatMessagesList;
