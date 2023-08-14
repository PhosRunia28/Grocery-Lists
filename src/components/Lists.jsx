import { VscChromeClose } from "react-icons/vsc";
import GroceryContext from "../context/GroceryContext";
import { useContext } from "react";

export default function Lists({ item }) {
  const { deleteItem, checkedItem } = useContext(GroceryContext);

  return (
    <div className="flex border rounded-lg items-center space-x-4 py-2 px-6">
      <input
        type="checkbox"
        name="check"
        id="check"
        className="relative w-6 h-6 cursor-pointer"
        defaultChecked={item.checked}
        onChange={() => checkedItem(item.id, !item.checked)}
      />
      <h3
        className={
          "text-lg font-medium " + (item.checked ? "line-through" : "")
        }
      >
        {item.nama}
      </h3>
      <p className="text-lg">({item.quantity})</p>
      <VscChromeClose
        className="text-4xl cursor-pointer"
        onClick={() => deleteItem(item.id)}
      />
    </div>
  );
}
