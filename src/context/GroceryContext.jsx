/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
const GroceryContext = createContext();
function Provider({ children }) {
  const groceryLists = [
    {
      id: 1213,
      nama: "Cilok Pedas",
      quantity: 10,
      checked: false,
    },
    {
      id: 1214,
      nama: "Keju Asam Manis",
      quantity: 4,
      checked: true,
    },
    {
      id: 1215,
      nama: "Mie Ayam Gembira",
      quantity: 2,
      checked: false,
    },
  ];
  const [namaBarang, setNamaBarang] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [grocery, setGrocery] = useState(groceryLists);

  function deleteItem(id) {
    const deletedGrocery = grocery.filter((item) => item.id !== id);
    setGrocery(deletedGrocery);
  }

  function checkedItem(id, newCheck) {
    const checkedGrocery = grocery.map((item) => {
      if (item.id == id) {
        return { ...item, checked: newCheck };
      }
      return item;
    });
    setGrocery(checkedGrocery);
  }

  function resetGrocery() {
    setGrocery([]);
  }

  function sortGrocery(sortValue) {
    let sortedItems;
    if (sortValue == "input") {
      sortedItems = grocery;
    }
    if (sortValue == "sort") {
      sortedItems = grocery
        .slice()
        .sort((a, b) => a.nama.localeCompare(b.nama));
    }
    if (sortValue == "check") {
      sortedItems = grocery.slice().sort((a, b) => a.checked - b.checked);
    }
    setGrocery(sortedItems);
  }

  function submitHandler(e) {
    e.preventDefault();

    if (namaBarang === "") return;

    const newItem = {
      id: Date.now(),
      nama: namaBarang,
      quantity,
      checked: false,
    };
    setGrocery([...grocery, newItem]);
    setNamaBarang("");
    setQuantity(1);
  }

  const valueToShare = {
    namaBarang,
    quantity,
    grocery,
    submitHandler,
    setNamaBarang,
    setQuantity,
    deleteItem,
    checkedItem,
    resetGrocery,
    sortGrocery,
  };

  return (
    <GroceryContext.Provider value={valueToShare}>
      {children}
    </GroceryContext.Provider>
  );
}

export { Provider };
export default GroceryContext;
