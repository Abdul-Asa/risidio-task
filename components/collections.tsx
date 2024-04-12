import { Button } from "./ui/button";

const CollectionList = () => {
  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        Collections
      </h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        {/* <CollectionCard /> */}
      </div>
    </section>
  );
};

const CollectionCard = () => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow-md">
      <div className="relative w-full h-52">
        <img
          src="https://via.placeholder.com/150"
          alt="Collection Image"
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg" />
        <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl">
          Collection Name
        </h3>
      </div>
      <div className="flex items-center justify-between mt-4">
        <p className="text-lg font-bold">10 Items</p>
        <Button variant="secondary">View Collection</Button>
      </div>
    </div>
  );
};

export default CollectionList;
