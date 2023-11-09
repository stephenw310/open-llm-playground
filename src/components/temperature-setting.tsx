import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface TemperatureSettingsProps {
  temperature: number;
  setTemperature: (temperature: number) => void;
}

const TemperatureSetting = ({
  temperature,
  setTemperature,
}: TemperatureSettingsProps) => {
  return (
    <div className="flex flex-col items-start gap-y-5 w-full">
      <div className="flex justify-between w-full">
        <div className="text-sm font-light">Temperature</div>
        <Input
          className="w-12 h-6 p-1.5 border-muted-foreground/50 text-[13px] font-light text-end focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-green-600"
          value={temperature}
          onChange={(e) => {
            const result = parseFloat(e.target.value);
            if (!isNaN(result)) {
              setTemperature(result);
            }
          }}
        />
      </div>
      <Slider
        value={[temperature]}
        max={1}
        step={0.01}
        onValueChange={(value) => {
          setTemperature(value[0]);
        }}
      />
    </div>
  );
};

export default TemperatureSetting;
