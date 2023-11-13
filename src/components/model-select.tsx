import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { Models } from "@/lib/config";

interface ModelSelectProps {
  modelName: string;
  setModelName: (modelName: string) => void;
}

const ModelSelect = ({ modelName, setModelName }: ModelSelectProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-y-3">
      <div className="text-sm font-light">Model</div>
      <Select value={modelName} onValueChange={(value) => setModelName(value)}>
        <SelectTrigger className="h-9 w-full rounded-lg border-muted-foreground/50 font-light focus:ring-1 focus:ring-offset-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="text-sm font-light">
            <SelectLabel>CHAT</SelectLabel>
            {Models.map((model, index) => (
              <SelectItem key={index} value={model.modelName}>
                {model.modelName}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ModelSelect;
