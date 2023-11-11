import { Message } from "ai/react";

import { cn } from "@/lib/utils";
import ChatMessage from "@/components/chat-message";

interface ChatMessagesListProps extends React.HTMLAttributes<HTMLDivElement> {
  messages: Message[];
  onDeleteMessage: (id: string) => void;
  onEditMessage: (id: string, content: string) => void;
}

const ChatMessagesList = ({
  messages,
  onDeleteMessage,
  onEditMessage,
  className,
  ...props
}: ChatMessagesListProps) => {
  return (
    <div className={cn("flex w-full flex-col", className)} {...props}>
      {messages
        .filter((message) => message.role !== "system")
        .map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            onDeleteMessage={onDeleteMessage}
            onEditMessage={onEditMessage}
          />
        ))}
    </div>
  );
};

export default ChatMessagesList;
