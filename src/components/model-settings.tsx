import NumberSetting from "@/components/number-setting";
import ModelSelect from "@/components/model-select";
import { type ModelConfig } from "@/lib/config";

interface ModelSettingsProps {
  model: ModelConfig;
  setModel: (modelName: string) => void;
  setTemperature: (temperature: number) => void;
  setMaxLength: (maxLength: number) => void;
}

const ModelSettings = ({
  model,
  setModel,
  setTemperature,
  setMaxLength,
}: ModelSettingsProps) => {
  return (
    <div className="hidden w-[240px] items-center gap-y-7 px-4 lg:flex lg:flex-col">
      <ModelSelect modelName={model.modelName} setModelName={setModel} />
      <NumberSetting
        label="Temperature"
        defaultValue={model.defaultTemperature}
        min={model.minTemperature}
        max={model.maxTemperature}
        step={0.01}
        setValue={setTemperature}
      />
      <NumberSetting
        label="Maximum length"
        defaultValue={model.defaultTokens}
        min={model.minTokens}
        max={model.maxTokens}
        step={25}
        setValue={setMaxLength}
        disableFloat={true}
      />
    </div>
  );
};

export default ModelSettings;
