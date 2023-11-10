import NumberSetting from "@/components/number-setting";
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
  return (
    <div className="hidden w-[240px] items-center gap-y-7 px-4 lg:flex lg:flex-col">
      <ModelSelect modelName={modelName} setModelName={setModelName} />
      {/* TODO: Move these ranges to a model config file later */}
      <NumberSetting
        label="Temperature"
        defaultValue={temperature}
        min={0}
        max={1}
        step={0.01}
        setValue={setTemperature}
      />
      <NumberSetting
        label="Maximum length"
        defaultValue={maxLength}
        min={0}
        max={4096}
        step={25}
        setValue={setMaxLength}
        disableFloat={true}
      />
    </div>
  );
};

export default ModelSettings;
