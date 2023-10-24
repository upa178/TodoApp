import { useState } from "react";
import {
  FilterInput,
  FilterTypeValues,
  FILTER_TYPES,
  LABEL_TEXT,
} from "../const/filter";

type Props = {
  selectedFilter: FilterTypeValues;
  onChangeFilter: (value: FilterTypeValues) => void;
};

const FILTER_INPUTS: FilterInput[] = [
  { labelText: LABEL_TEXT.UNDONE, value: FILTER_TYPES.UNDONE },
  { labelText: LABEL_TEXT.DONE, value: FILTER_TYPES.DONE },
  { labelText: LABEL_TEXT.ALL, value: FILTER_TYPES.ALL },
];

export const Status = (props: Props) => {
  const { selectedFilter, onChangeFilter } = props;
  return (
    <>
      {FILTER_INPUTS.map(({ value, labelText }) => {
        return (
          <span key={value}>
            <input
              type="radio"
              onChange={() => {
                onChangeFilter(value);
              }}
              value={value}
              id={value}
              checked={selectedFilter === value}
            />
            <label htmlFor={value}>{labelText}</label>
          </span>
        );
      })}
    </>
  );
};
