import React, {
  RefObject,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
} from "react";

import { cn } from "@/lib/utils";

// textarea that renders content like div and allow click to edit
const DynamicTextarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  const internalRef = useRef<HTMLTextAreaElement>(null); // Internal ref
  // Combine refs - use parentRef if it's provided, otherwise use internalRef
  const combinedRef = (ref as RefObject<HTMLTextAreaElement>) || internalRef;

  // Function to auto adjust the textarea height given the content
  const adjustHeight = () => {
    const textarea = combinedRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  // Adjust height when the value changes
  useEffect(() => {
    adjustHeight();
  }, [props.value]);

  // Adjust height when window resize happens
  useEffect(() => {
    window.addEventListener("resize", adjustHeight);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", adjustHeight);
    };
  }, []);

  return (
    <textarea
      className={cn(
        "flex w-full cursor-pointer resize-none overflow-hidden whitespace-break-spaces rounded-md border-0 bg-transparent text-base focus-visible:cursor-auto focus-visible:bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0",
        className,
      )}
      rows={1}
      ref={combinedRef}
      {...props}
    />
  );
});

DynamicTextarea.displayName = "textarea";

export default DynamicTextarea;
