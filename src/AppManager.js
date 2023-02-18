import { useContext } from "react";
import { DataContext } from "../src/providers/DataProvider";
import EventPage from "./pages/EventPage";
import NavHeader from "./components/NavHeader";

export default function AppManager() {
  const { screen } = useContext(DataContext);

  return (
    <div style={{ margin: 0, width: "100%", height: "100%" }}>
      <NavHeader />
      <EventPage />
    </div>
  );
}
