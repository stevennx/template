import React from "react";
import ListItem from "src/components/ListItem";
import { User } from "src/interfaces";

type Props = {
  items: User[];
};

const List: React.FC<Props> = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
