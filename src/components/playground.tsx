"use client";

import { useChat } from "ai/react";
import { nanoid, Message } from "ai";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

import ChatPanel from "@/components/chat-panel";
import EmptyScreen from "@/components/empty-screen";
import ChatMessagesList from "@/components/chat-messages-list";
import SystemPromptInput from "./system-prompt-input";
import ModelSettings from "@/components/model-settings";
import { type MessageRoleType } from "@/lib/types";
import { useModelSettings } from "@/components/model-context";
import { useLocalStorage } from "@/lib/hooks/use-local-storage";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Playground() {
  const [systemMsg, setSystemMsg] = useState<string>("");
  const { modelSettings } = useModelSettings();
  const [aiToken, setAiToken] = useLocalStorage<string | null>(
    "ai-token",
    null,
  );
  const [OpenAITokenInput, setOpenAITokenInput] = useState(aiToken ?? "");
  const [showTokenDialog, setShowTokenDialog] = useState(!aiToken);

  // ai sdk hook
  const {
    messages,
    isLoading,
    reload,
    stop,
    setMessages,
    handleSubmit,
    handleInputChange,
  } = useChat({
    api: "/api/chat",
    body: {
      modelName: modelSettings.modelName,
      temperature: modelSettings.temperature,
      maxLength: modelSettings.maxLength,
      apiKey: aiToken,
    },
    async onResponse(response) {
      if (response.status === 500) {
        const { error }: { error: string } = await response.json();
        toast.error(error);
      }
    },
  });

  const updateSystemMessage = () => {
    const systemMessage: Message = {
      id: nanoid(),
      role: "system",
      content: systemMsg,
    };

    // update the first system message if exists
    if (messages.length > 0 && messages[0].role === "system") {
      setMessages([systemMessage, ...messages.slice(1)]);
    } else {
      setMessages([systemMessage, ...messages]);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // update system message
    updateSystemMessage();
    // send endpoint using vercel sdk
    handleSubmit(e);
  };

  const deleteMessage = (id: string) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  const editMessage = (id: string, content: string) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, content } : message,
      ),
    );
  };

  const changeMessageRole = (id: string, currentRole: MessageRoleType) => {
    const role = currentRole === "user" ? "assistant" : "user";
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, role } : message,
      ),
    );
  };

  // fix hydration issue
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <div className="flex h-full w-full flex-col justify-between gap-x-6 md:flex-row">
        <SystemPromptInput
          prompt={systemMsg}
          setPrompt={setSystemMsg}
          className="h-full flex-1"
        />
        <div className="h-full max-h-3 border-y bg-muted-foreground/10 md:hidden" />
        <div className="flex w-full flex-[2_1_0%] flex-col justify-between gap-y-4 overflow-hidden pt-4 md:pt-0">
          {messages.filter((message) => message.role !== "system").length ? (
            <ChatMessagesList
              messages={messages}
              onDeleteMessage={deleteMessage}
              onEditMessage={editMessage}
              onChangeRole={changeMessageRole}
              className="max-h-[calc(100vh-28rem)] overflow-auto md:max-h-[calc(100vh-18rem)]"
            />
          ) : (
            <EmptyScreen />
          )}
          <ChatPanel
            isLoading={isLoading}
            stop={stop}
            handleInputChange={handleInputChange}
            onSubmit={onSubmit}
            reload={(e) => {
              updateSystemMessage();
              return reload(e);
            }}
            messages={messages}
          />
        </div>
        <ModelSettings className="hidden lg:flex" />
      </div>
      <Dialog open={showTokenDialog} onOpenChange={setShowTokenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter your OpenAI Key</DialogTitle>
            <DialogDescription>
              If you have not obtained your OpenAI API key, you can do so by{" "}
              <a
                href="https://platform.openai.com/signup/"
                className="underline"
              >
                signing up
              </a>{" "}
              on the OpenAI website. The token will be saved to your
              browser&apos;s local storage under the name{" "}
              <code className="font-mono">ai-token</code>.
            </DialogDescription>
          </DialogHeader>
          <Input
            value={OpenAITokenInput}
            placeholder="OpenAI API key"
            onChange={(e) => setOpenAITokenInput(e.target.value)}
          />
          <DialogFooter className="items-center">
            <Button
              onClick={() => {
                setAiToken(OpenAITokenInput);
                setShowTokenDialog(false);
              }}
            >
              Save Token
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
