import { IconOpenAI } from "./icons";

const EmptyScreen = () => {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border shadow-md bg-background p-8">
        <IconOpenAI className="w-28 h-28 mx-auto mb-8" />
        <h1 className="mb-3 text-2xl font-semibold text-center">
          Welcome to the AI Playground!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground text-center">
          This is an AI playground that helps you test model parameters and
          prompt ideas. You can start by asking a question below.
        </p>
      </div>
    </div>
  );
};

export default EmptyScreen;
