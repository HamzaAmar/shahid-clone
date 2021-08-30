import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "@components/core";
import { Button } from "@components/ui";
import styles from "@styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <Button radius="rounded">Hello</Button>
    </Layout>
  );
};

export default Home;
