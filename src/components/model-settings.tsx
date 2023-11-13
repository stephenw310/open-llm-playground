import NumberSetting from "@/components/number-setting";
import ModelSelect from "@/components/model-select";
import { cn } from "@/lib/utils";
import { useModelSettings } from "@/components/model-context";
import { Models } from "@/lib/config";

interface ModelSettingsProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModelSettings = ({ className, ...props }: ModelSettingsProps) => {
  const { modelSettings, setModelSettings } = useModelSettings();
  const modelConfig =
    Models.find((model) => model.modelName === modelSettings.modelName) ??
    Models[0];

  return (
    <div
      className={cn(
        "flex w-[240px] flex-col items-center gap-y-7 px-4",
        className,
      )}
      {...props}
    >
      <ModelSelect
        modelName={modelSettings.modelName}
        setModelName={(modelName) => {
          setModelSettings({
            ...modelSettings,
            modelName,
          });
        }}
      />
      <NumberSetting
        label="Temperature"
        initialValue={modelSettings.temperature}
        min={modelConfig.minTemperature}
        max={modelConfig.maxTemperature}
        step={0.01}
        setValue={(temperature) => {
          setModelSettings({
            ...modelSettings,
            temperature,
          });
        }}
      />
      <NumberSetting
        label="Maximum length"
        initialValue={modelSettings.maxLength}
        min={modelConfig.minTokens}
        max={modelConfig.maxTokens}
        step={25}
        setValue={(maxLength) => {
          setModelSettings({
            ...modelSettings,
            maxLength,
          });
        }}
        disableFloat={true}
      />
    </div>
  );
};

export default ModelSettings;
