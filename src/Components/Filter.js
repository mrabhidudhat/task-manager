import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/FilterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label>Show: </label>
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default Filter;
