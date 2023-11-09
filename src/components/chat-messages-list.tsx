import { Message } from "ai/react";

import { cn } from "@/lib/utils";
import ChatMessage from "@/components/chat-message";

interface ChatMessagesListProps extends React.HTMLAttributes<HTMLDivElement> {
  messages: Message[];
  onDeleteMessage: (id: string) => void;
}

const ChatMessagesList = ({
  messages,
  onDeleteMessage,
  className,
  ...props
}: ChatMessagesListProps) => {
  return (
    <div className={cn("w-full flex flex-col", className)} {...props}>
      {messages
        .filter((message) => message.role !== "system")
        .map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            onDeleteMessage={onDeleteMessage}
          />
        ))}
    </div>
  );
};

export default ChatMessagesList;
