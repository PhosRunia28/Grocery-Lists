import GroceryContext from "../context/GroceryContext";
import { useContext } from "react";
export default function Header({ sortBy, setSortBy }) {
  const {
    submitHandler,
    setNamaBarang,
    namaBarang,
    quantity,
    setQuantity,
    resetGrocery,
  } = useContext(GroceryContext);

  return (
    <nav>
      <h2 className="text-2xl text-center lg:text-left">
        Hari ini belanja apa kita
      </h2>
      <div className="flex flex-col justify-center lg:justify-between md:space-x-20 lg:space-x-0  md:flex-row">
        <div className="flex flex-col justify-center items-center">
          <h3 className="font-bold text-lg mb-3 mt-4">Tambah Barang</h3>
          <form
            action=""
            className="space-y-3 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-4"
            onSubmit={(e) => submitHandler(e)}
          >
            <input
              type="number"
              className="border rounded-lg py-1 px-5 max-w-[6rem] w-full text-center"
              placeholder="1"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <input
              type="text"
              className="border rounded-lg py-1 px-5 max-w-[16rem] w-full"
              placeholder="nama barang"
              value={namaBarang}
              onChange={(e) => setNamaBarang(e.target.value)}
            />
            <button
              type="submit"
              className="py-1 px-5 border rounded-lg max-w-[16rem] w-full lg:w-auto lg:max-w-none hover:bg-black hover:text-white"
            >
              Tambah
            </button>
          </form>
        </div>
        <div className="mt-5 pt-8 flex justify-center items-center">
          <form
            action=""
            className="space-y-4 lg:space-y-0 lg:space-x-4 max-w-[16rem] w-full lg:w-auto lg:max-w-none flex flex-col lg:flex-row"
          >
            <select
              name="sort"
              id="sort"
              className="border px-5 py-2 rounded-lg text-sm"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="input">Urutkan berdasarkan urutan input</option>
              <option value="sort">Urutkan berdasarkan Huruf</option>
              <option value="check">Urutkan berdasarkan Selesai</option>
            </select>
            <button
              type="button"
              className="py-2 px-5 border rounded-lg max-w-[16rem] w-full lg:w-auto lg:max-w-none hover:bg-black hover:text-white"
              onClick={resetGrocery}
            >
              Bersihkan Daftar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
