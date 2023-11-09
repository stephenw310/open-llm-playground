import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PgModeSelect = () => {
  return (
    <Select defaultValue="chat">
      <SelectTrigger className="w-fit rounded-full bg-muted px-4 h-9 focus:ring-0 focus:ring-transparent gap-x-2">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="chat">Chat</SelectItem>
          <SelectItem value="assistant">Assistant</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PgModeSelect;
