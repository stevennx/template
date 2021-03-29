import Link from "next/link";
import React from "react";

import { User } from "../interfaces";

type Props = {
  data: User;
};

const ListItem: React.FC<Props> = ({ data }) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <div>
      {data.id}: {data.name}
    </div>
  </Link>
);

export default ListItem;
