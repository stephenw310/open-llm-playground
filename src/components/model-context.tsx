"use client";

import React, { createContext, useContext, useState } from "react";

import { ModelConfig } from "@/lib/config";

interface ModelSettings {
  modelName: string;
  temperature: number;
  maxLength: number;
}

// Define the shape of the context state
interface ModelContextState {
  modelSettings: ModelSettings;
  setModelSettings: (settings: ModelSettings) => void;
}

const ModelSettingsContext = createContext<ModelContextState | null>(null);

interface ModelSettingsProviderProps {
  defaultModel: ModelConfig;
  children: React.ReactNode;
}

// Create a provider component
export const ModelSettingsProvider = ({
  defaultModel,
  children,
}: ModelSettingsProviderProps) => {
  const [modelSettings, setModelSettings] = useState<ModelSettings>({
    modelName: defaultModel.modelName,
    temperature: defaultModel.defaultTemperature,
    maxLength: defaultModel.defaultTokens,
  });

  return (
    <ModelSettingsContext.Provider value={{ modelSettings, setModelSettings }}>
      {children}
    </ModelSettingsContext.Provider>
  );
};

// Custom hook for using context
export const useModelSettings = (): ModelContextState => {
  const context = useContext(ModelSettingsContext);
  if (!context) {
    throw new Error("Model settings context is null");
  }
  return context;
};
