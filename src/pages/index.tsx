import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "src/components /utils/api";
import Header from "../components/Header";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Highway</title>
        <meta name="description" content="Your roadmapping tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
      </main>
    </>
  );
};

export default Home;
