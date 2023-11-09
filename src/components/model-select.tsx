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
    <div className="flex flex-col items-start gap-y-3 w-full">
      <div className="text-sm font-light">Model</div>
      <Select
        defaultValue="gpt-3.5-turbo"
        value={modelName}
        onValueChange={(value) => setModelName(value)}
      >
        <SelectTrigger className="w-[180px] h-9 border-muted-foreground/50 font-light focus:ring-offset-0 focus:ring-1 focus:ring-green-600 rounded-lg">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="font-light text-sm">
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
