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
    <div className="flex w-full flex-col items-start gap-y-5">
      <div className="flex w-full justify-between">
        <div className="text-sm font-light">Temperature</div>
        <Input
          className="h-6 w-12 border-muted-foreground/50 p-1.5 text-end text-[13px] font-light focus-visible:ring-1 focus-visible:ring-green-600 focus-visible:ring-offset-0"
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
