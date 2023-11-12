export interface ModelConfig {
  modelName: string;
  defaultTemperature: number;
  minTemperature: number;
  maxTemperature: number;
  defaultTokens: number;
  minTokens: number;
  maxTokens: number;
}

export const Models: ModelConfig[] = [
  {
    modelName: "gpt-4-1106-preview",
    minTemperature: 0,
    maxTemperature: 1,
    defaultTemperature: 0.1,
    minTokens: 1,
    maxTokens: 4096,
    defaultTokens: 256,
  },
  {
    modelName: "gpt-4",
    minTemperature: 0,
    maxTemperature: 1,
    defaultTemperature: 0.1,
    minTokens: 1,
    maxTokens: 4096,
    defaultTokens: 256,
  },
  {
    modelName: "gpt-3.5-turbo",
    minTemperature: 0,
    maxTemperature: 1,
    defaultTemperature: 0.1,
    minTokens: 1,
    maxTokens: 4096,
    defaultTokens: 256,
  },
];
