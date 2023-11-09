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
      <SelectTrigger className="h-9 w-fit gap-x-2 rounded-full bg-muted px-4 focus:ring-0 focus:ring-transparent">
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
