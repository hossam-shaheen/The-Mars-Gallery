import { FunctionComponent } from "react";
import { SelectPropsInterface } from "../../../utiles/Interfaces/Interfaces";
import Select from "../../Elements/Select/Select";
import classes from "./Sidebar.module.css";

const Sidebar: FunctionComponent<{
  onSelect: SelectPropsInterface["onSelect"];
}> = ({ onSelect }): JSX.Element => {
  return (
    <div className={classes["sidebar"]}>
      <Select
        label={"Pick your robot"}
        options={["Curiosity", "Opportunity", "Spirit"]}
        onSelect={onSelect}
      />
    </div>
  );
};

export default Sidebar;
