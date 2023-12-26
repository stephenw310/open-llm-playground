import NumberSetting from "@/components/number-setting";
import ModelSelect from "@/components/model-select";
import { cn } from "@/lib/utils";
import { useModelSettings } from "@/components/model-context";
import { Models } from "@/lib/config";
import { Button } from "@/components/ui/button";
import ApiKeyDialog from "@/components/api-key-dialog";
import { useState } from "react";

interface ModelSettingsProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModelSettings = ({ className, ...props }: ModelSettingsProps) => {
  const { modelSettings, setModelSettings } = useModelSettings();
  const modelConfig =
    Models.find((model) => model.modelName === modelSettings.modelName) ??
    Models[0];
  const [showApiKeyDialog, setShowApiKeyDialog] = useState(
    !modelSettings.apiKey,
  );

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
      <div className="flex w-full flex-col">
        <div className="text-sm font-light">API Key</div>
        <div className="flex items-center justify-between gap-x-1">
          {modelSettings.apiKey ? (
            <div className="mr-auto truncate text-[15px] font-light">
              {modelSettings.apiKey}
            </div>
          ) : (
            <div className="mr-auto text-sm font-normal text-red-600">
              ** Set your API key **
            </div>
          )}
          <Button
            variant="custom"
            onClick={() => setShowApiKeyDialog(true)}
            className="h-auto px-2 py-1.5"
          >
            🔑
          </Button>
        </div>
        <ApiKeyDialog
          showDialog={showApiKeyDialog}
          setShowDialog={setShowApiKeyDialog}
          initialValue={modelSettings.apiKey ?? ""}
          onSubmit={(apiKey) => {
            setModelSettings({
              ...modelSettings,
              apiKey,
            });
            setShowApiKeyDialog(false);
          }}
        />
      </div>
    </div>
  );
};

export default ModelSettings;
