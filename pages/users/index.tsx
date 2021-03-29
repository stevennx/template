import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";

import { User } from "src/interfaces";
import { sampleUserData } from "src/utils/sample-data";
import Layout from "src/components/Layout";
import List from "src/components/List";

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  return { props: { items } };
};

type Props = {
  items: User[];
};

const Users: React.FC<Props> = ({ items }) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export default Users;
