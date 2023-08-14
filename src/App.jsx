import GroceryList from "./components/GroceryList";
import Header from "./components/Header";
import { useState } from "react";
import GroceryContext from "./context/GroceryContext";
import { useContext } from "react";

function App() {
  const [sortBy, setSortBy] = useState("input");
  const { grocery } = useContext(GroceryContext);

  let sortedItems;
  if (sortBy == "input") {
    sortedItems = grocery;
  }
  if (sortBy == "sort") {
    sortedItems = grocery.slice().sort((a, b) => a.nama.localeCompare(b.nama));
  }
  if (sortBy == "check") {
    sortedItems = grocery.slice().sort((a, b) => a.checked - b.checked);
  }

  return (
    <div className="max-w-5xl lg:max-w-6xl mx-auto px-6 py-14 md:px-12 lg:px-14">
      <h2 className="text-3xl font-bold mb-8 text-center">Catatan Belanjaku</h2>
      <Header sortBy={sortBy} setSortBy={setSortBy} />
      <GroceryList sorted={sortedItems} />
    </div>
  );
}

export default App;
