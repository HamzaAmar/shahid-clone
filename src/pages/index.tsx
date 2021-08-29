import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button } from "../components/ui";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Button radius="rounded">Hello</Button>
    </div>
  );
};

export default Home;
