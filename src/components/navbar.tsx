import PgModeSelect from "@/components/pg-mode-select";

const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 border-b px-6 py-3">
      <h1 className="text-2xl font-semibold">Playground</h1>
      <PgModeSelect />
    </div>
  );
};

export default Navbar;
