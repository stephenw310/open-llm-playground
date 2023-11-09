import PgModeSelect from "@/components/pg-mode-select";

const Navbar = () => {
  return (
    <div className="px-6 py-3 border-b flex items-center gap-x-4">
      <h1 className="font-semibold text-2xl">Playground</h1>
      <PgModeSelect />
    </div>
  );
};

export default Navbar;
