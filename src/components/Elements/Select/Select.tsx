import { useState, FunctionComponent, ChangeEvent } from "react";
import { SelectPropsInterface } from "../../../utiles/Interfaces/Interfaces";
import classes from "./Select.module.css";

const Select: FunctionComponent<{
  onSelect: SelectPropsInterface["onSelect"];
  options: SelectPropsInterface["options"];
  label: SelectPropsInterface["label"];
}> = ({ onSelect, options, label }) => {
  const [selectOption, setSelectOption] = useState<string>("Curiosity");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectOption(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div className={classes["select"]}>
      {label && <label>{label}</label>}
      <select value={selectOption} onChange={(event) => handleChange(event)}>
        {options.length > 0 &&
          options.map((option: string, index: number) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
