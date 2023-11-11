import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";

interface ModelSelectProps {
  modelName: string;
  setModelName: (modelName: string) => void;
}

const ModelSelect = ({ modelName, setModelName }: ModelSelectProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-y-3">
      <div className="text-sm font-light">Model</div>
      <Select
        defaultValue="gpt-3.5-turbo"
        value={modelName}
        onValueChange={(value) => setModelName(value)}
      >
        <SelectTrigger className="h-9 w-[180px] rounded-lg border-muted-foreground/50 font-light focus:ring-1 focus:ring-offset-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="text-sm font-light">
            <SelectLabel>CHAT</SelectLabel>
            {/* TODO: Move model name and params to a config file later */}
            <SelectItem value="gpt-4-1106-preview">
              gpt-4-1106-preview
            </SelectItem>
            <SelectItem value="gpt-4">gpt-4</SelectItem>
            <SelectItem value="gpt-3.5-turbo">gpt-3.5-turbo</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ModelSelect;
