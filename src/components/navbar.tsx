import PgModeSelect from "@/components/pg-mode-select";
import MobileSettings from "@/components/mobile-setting";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-5 pt-3 md:border-b md:px-6 md:py-3">
      <div className="flex items-center gap-x-4">
        <h1 className="text-2xl font-semibold">Playground</h1>
        <PgModeSelect />
      </div>
      <MobileSettings />
    </div>
  );
};

export default Navbar;
