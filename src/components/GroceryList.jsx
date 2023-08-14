import Lists from "./Lists";
export default function GroceryList({ sorted }) {
  const groceryItem = sorted.map((item) => {
    return <Lists key={item.id} item={item} />;
  });
  return (
    <main className="mt-10">
      <h2 className="text-2xl mb-6 text-center font-bold">Daftar belanja</h2>
      <div className="flex flex-wrap gap-y-6     gap-x-6 justify-center lg:justify-start">
        {groceryItem}
      </div>
    </main>
  );
}
