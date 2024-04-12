import { Button } from "./ui/button";

const Components = () => {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Components
      </h1>
      <div className="flex gap-5 p-8">
        <Button>This is a CTA</Button>
        <Button variant="secondary">This is a CTA</Button>
        <Button variant="outline" className="border-primary">
          This is a CTA
        </Button>
        <Button variant="link">This is a CTA</Button>
      </div>
    </>
  );
};

export default Components;
