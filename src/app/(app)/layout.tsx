import { ModelSettingsProvider } from "@/components/model-context";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Models } from "@/lib/config";
import MobileSidebar from "@/components/mobile-sidebar";

const PlaygroundLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-full">
      <div className="z-20 hidden h-full border-r md:fixed md:inset-y-0 md:flex md:w-14 md:flex-col">
        <Sidebar />
      </div>
      <div className="absolute inset-x-0 h-12 w-full border-b md:hidden">
        <MobileSidebar />
      </div>
      <main className="flex h-full flex-col pt-12 md:pl-14 md:pt-0">
        <ModelSettingsProvider defaultModel={Models[0]}>
          <Navbar />
          {children}
        </ModelSettingsProvider>
      </main>
    </div>
  );
};

export default PlaygroundLayout;
