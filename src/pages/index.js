import { useState, useEffect } from "react";
import Button from "../components/tools/Button";
import Products from "@/components/Products";

import Link from "next/link";
import SearchBar from "@/components/tools/SearchBar";
import ScrollProgressBar from "@/components/tools/ScrollProgressBar";


export default function Home({ dataObject }) {

  const [message, setMessage] = useState("");
  const [secondMessage, setSecondMessage] = useState("");
  const handleClick = () => {
    setMessage(message === "welcome" ? "" : "welcome");
  };
  useEffect(() => {
    if (message !== "") {
      setSecondMessage("thanks for clicking");
    }
  }, [message]);

  return (
    <>
      <ScrollProgressBar />
      <main className="home">
        <h1>NextJS app Template</h1>
        <div className="home__section-one">
          <Button click={handleClick} />
          <h2>{message}</h2>
          <h2>{secondMessage}</h2>
          <Link href={"/dashboard"} passHref>
            Dashboard
          </Link>
          {dataObject && dataObject.products && (
            <Products data={dataObject.products} />
          )}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(ctx) {
  let dataObject = {};
  await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json) => (dataObject = json));
  return {
    props: {
      dataObject,
    },
  };
}
