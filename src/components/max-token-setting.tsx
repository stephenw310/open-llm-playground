import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface MaxTokensSettingProps {
  maxLength: number;
  setMaxLength: (maxLength: number) => void;
}

const MaxTokensSetting = ({
  maxLength,
  setMaxLength,
}: MaxTokensSettingProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-y-5">
      <div className="flex w-full justify-between">
        <div className="text-sm font-light">Maximum length</div>
        <Input
          className="h-6 w-12 border-muted-foreground/50 p-1.5 text-end text-[13px] font-light focus-visible:ring-1 focus-visible:ring-green-600 focus-visible:ring-offset-0"
          value={maxLength}
          onChange={(e) => {
            const result = parseFloat(e.target.value);
            if (!isNaN(result)) {
              setMaxLength(result);
            }
          }}
        />
      </div>
      <Slider
        max={4096}
        step={25}
        onValueChange={(value) => {
          setMaxLength(value[0]);
        }}
        value={[maxLength]}
      />
    </div>
  );
};

export default MaxTokensSetting;
