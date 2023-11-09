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
    <div className="flex flex-col items-start gap-y-5 w-full">
      <div className="flex justify-between w-full">
        <div className="text-sm font-light">Maximum length</div>
        <Input
          className="w-12 h-6 p-1.5 text-[13px] border-muted-foreground/50 font-light text-end focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-green-600"
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
