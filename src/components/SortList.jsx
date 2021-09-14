import React from "react";
import List from "./List";

const SortList = ({ sortList, onClick, sort }) => {
  return (
    <ul className="sortlists">
      مرتب سازی بر اساس :
      {sortList.map((item) => {
        return (
          <List
            className={`sortlists__list ${item.id === sort ? "active" : ""}`}
            key={item.id}
            onClick={() => onClick(item)}
          >
            {item.title}
          </List>
        );
      })}
    </ul>
  );
};

export default SortList;
