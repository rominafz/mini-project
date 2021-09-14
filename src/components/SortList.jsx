import React from "react";
import List from "./List";

const SortList = ({ sortList }) => {
  return (
    <ul className="sortlists">
      مرتب سازی بر اساس :
      {sortList.map((item) => {
        return (
          <List className="sortlists__list" key={item.id}>
            {item.title}
          </List>
        );
      })}
    </ul>
  );
};

export default SortList;
