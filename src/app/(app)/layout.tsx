import { ModelSettingsProvider } from "@/components/model-context";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Models } from "@/lib/config";

const PlaygroundLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-full">
      <div className="z-[80] hidden h-full border-r md:fixed md:inset-y-0 md:flex md:w-14 md:flex-col">
        <Sidebar />
      </div>
      <main className="flex h-full flex-col md:pl-14">
        <ModelSettingsProvider defaultModel={Models[0]}>
          <Navbar />
          {children}
        </ModelSettingsProvider>
      </main>
    </div>
  );
};

export default PlaygroundLayout;
