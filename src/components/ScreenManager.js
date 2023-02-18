import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";
import Events from './Events';

export default function ScreenManager() {
  const {screen} = useContext(DataContext);

  return (
    <Events/>
  )

}
