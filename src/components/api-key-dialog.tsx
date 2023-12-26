"use client";

import { useState } from "react";
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

interface ApiKeyDialogProps {
  showDialog: boolean;
  setShowDialog: (show: boolean) => void;
  initialValue: string;
  onSubmit: (key: string) => void;
}

const ApiKeyDialog = ({
  showDialog,
  setShowDialog,
  initialValue,
  onSubmit,
}: ApiKeyDialogProps) => {
  const [inputValue, setInputValue] = useState(initialValue);

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogContent className="z-[80]">
        <DialogHeader>
          <DialogTitle>Enter your OpenAI Key</DialogTitle>
          <DialogDescription>
            If you have not obtained your OpenAI API key, you can do so by{" "}
            <a href="https://platform.openai.com/signup/" className="underline">
              signing up
            </a>{" "}
            on the OpenAI website. The key will be saved to your browser
            locally.
          </DialogDescription>
        </DialogHeader>
        <Input
          value={inputValue}
          placeholder="OpenAI API key"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <DialogFooter className="items-center">
          <Button
            variant="custom"
            className="h-9 px-3"
            onClick={() => {
              onSubmit(inputValue);
            }}
          >
            Save Key
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ApiKeyDialog;
