import { IconOpenAI } from "./icons";

const EmptyScreen = () => {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8 shadow-md">
        <IconOpenAI className="mx-auto mb-8 h-28 w-28" />
        <h1 className="mb-3 text-center text-2xl font-semibold">
          Welcome to the AI Playground!
        </h1>
        <p className="mb-2 text-center leading-normal text-muted-foreground">
          This is an AI playground that helps you test model parameters and
          prompt ideas. You can start by asking a question below.
        </p>
      </div>
    </div>
  );
};

export default EmptyScreen;
