import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = (value) => {if(value === "") toast("Fill the field");}

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    notify(searchValue);
    setSearchValue("");
  }

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">
          Search
        </button>
        <Toaster
          toastOptions={{
            className: "",
            duration: 2000,
            style: {
              background: "white",
              color: "red",
            },
          }}
        />
      </form>
    </header>
  );
};

export default SearchBar;
