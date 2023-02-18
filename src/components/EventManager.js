import { useState, useContext } from "react";

import { DataContext } from "../providers/DataProvider";

export default function EventManager() {
  const [filter, setFilter] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  const { filterEvents, searchEvents } = useContext(DataContext);

  return (
    <div>
      <input
        value={searchVal}
        onChange={(e) => setSearchVal(e.value)}
        placeholder="Search Events"
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <h2>Filter Events</h2>
        <button>
          Add Filter +
        </button>
      </div>
    </div>
  );
}
