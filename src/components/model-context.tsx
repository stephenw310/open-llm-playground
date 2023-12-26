"use client";

import React, { createContext, useContext } from "react";
import { useLocalStorage } from "@/lib/hooks/use-local-storage";
import { Models } from "@/lib/config";

interface ModelSettings {
  modelName: string;
  temperature: number;
  maxLength: number;
  apiKey: string | null;
}

// Define the shape of the context state
interface ModelContextState {
  modelSettings: ModelSettings;
  setModelSettings: (settings: ModelSettings) => void;
}

const ModelSettingsContext = createContext<ModelContextState | null>(null);

interface ModelSettingsProviderProps {
  children: React.ReactNode;
}

// Create a provider component
export const ModelSettingsProvider = ({
  children,
}: ModelSettingsProviderProps) => {
  // use local storage for persisting model settings
  const [modelSettings, setModelSettings] = useLocalStorage<ModelSettings>(
    "model-settings",
    {
      modelName: Models[0].modelName,
      temperature: Models[0].defaultTemperature,
      maxLength: Models[0].defaultTokens,
      apiKey: null,
    },
  );

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
