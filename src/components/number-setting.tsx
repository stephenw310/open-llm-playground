import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface NumberSetttingProps {
  label: string;
  defaultValue: number;
  min: number;
  max: number;
  step: number;
  disableFloat?: boolean;
  setValue: (value: number) => void;
}

const NumberSetting = ({
  label,
  defaultValue,
  min,
  max,
  step,
  setValue,
  disableFloat = false,
}: NumberSetttingProps) => {
  const [inputText, setInputText] = useState(String(defaultValue));
  const [lastValidInput, setLastValidInput] = useState(String(defaultValue));

  const parseFunc = disableFloat ? parseInt : parseFloat;

  // check if input text is a valid in-range number
  const isInputValid = (input: string) => {
    const parsedValue = parseFunc(input);
    return !isNaN(parsedValue) && parsedValue >= min && parsedValue <= max;
  };

  // update value when input text changes
  useEffect(() => {
    if (isInputValid(inputText)) {
      setLastValidInput(inputText);
      setValue(parseFunc(inputText));
    }
  }, [inputText]);

  return (
    <div className="flex w-full flex-col items-start gap-y-5">
      <div className="flex w-full justify-between">
        <div className="text-sm font-light">{label}</div>
        <Input
          className="h-6 w-12 border-muted-foreground/50 p-1.5 text-end text-[13px] font-light focus-visible:ring-1 focus-visible:ring-offset-0"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          onBlur={() => {
            // sanitize input text after losing focus
            const parsedValue = parseFunc(inputText);
            if (isNaN(parsedValue)) {
              setInputText(lastValidInput);
            } else if (parsedValue > max) {
              setInputText(String(max));
            } else if (parsedValue < min) {
              setInputText(String(min));
            } else {
              // remove trailing zeros and decimal point if not needed
              setInputText(String(parsedValue));
            }
          }}
        />
      </div>
      <Slider
        value={[
          isNaN(parseFunc(inputText))
            ? parseFunc(lastValidInput)
            : parseFunc(inputText),
        ]}
        min={min}
        max={max}
        step={step}
        onValueChange={(value) => {
          setInputText(String(value[0]));
        }}
      />
    </div>
  );
};

export default NumberSetting;
