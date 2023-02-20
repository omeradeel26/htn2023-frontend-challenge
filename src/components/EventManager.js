import { useState, useContext, useEffect } from "react";

import { DataContext } from "../providers/DataProvider";

export default function EventManager() {
  const [filter, setFilter] = useState({ eventType: "", permission: "" });
  const [searchVal, setSearchVal] = useState("");

  const { filterEvents, searchEvents } = useContext(DataContext);

  return (
    <div>
      <input
        value={searchVal}
        onChange={(e) => {
          setSearchVal(e.target.value);
          searchEvents(e.target.value);
        }}
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
      </div>
    </div>
  );
}
