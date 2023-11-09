import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const PlaygroundLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:w-14 md:fixed md:inset-y-0 z-[80] border-r">
        <Sidebar />
      </div>
      <main className="h-full flex flex-col md:pl-14">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default PlaygroundLayout;
