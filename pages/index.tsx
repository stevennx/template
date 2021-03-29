import Link from "next/link";
import React from "react";
import Layout from "src/components/Layout";

const IndexPage: React.FC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
);

export default IndexPage;
