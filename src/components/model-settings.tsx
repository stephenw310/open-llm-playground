import { clamp } from "@/lib/utils";
import TemperatureSetting from "@/components/temperature-setting";
import MaxTokensSetting from "@/components/max-token-setting";
import ModelSelect from "@/components/model-select";

interface ModelSettingsProps {
  modelName: string;
  temperature: number;
  maxLength: number;
  setModelName: (modelName: string) => void;
  setTemperature: (temperature: number) => void;
  setMaxLength: (maxLength: number) => void;
}

const ModelSettings = ({
  modelName,
  temperature,
  maxLength,
  setModelName,
  setTemperature,
  setMaxLength,
}: ModelSettingsProps) => {
  // TODO: Move these ranges to a model config file later
  const safeSetTemperature = (temperature: number) => {
    setTemperature(clamp(temperature, 0, 1));
  };

  const safeSetMaxLength = (maxLength: number) => {
    setMaxLength(clamp(maxLength, 0, 4096));
  };

  return (
    <div className="hidden w-[240px] items-center gap-y-7 px-4 lg:flex lg:flex-col">
      <ModelSelect modelName={modelName} setModelName={setModelName} />
      <TemperatureSetting
        temperature={temperature}
        setTemperature={safeSetTemperature}
      />
      <MaxTokensSetting maxLength={maxLength} setMaxLength={safeSetMaxLength} />
    </div>
  );
};

export default ModelSettings;
