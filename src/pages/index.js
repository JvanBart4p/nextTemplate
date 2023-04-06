import { useState, useEffect } from "react";
import Button from "../components/Button";

import Link from "next/link";

export default function Home() {
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
      <main className="home">
        <div className="home__section-one">
          <h1>NextJS app Template</h1>
          <Button click={handleClick} />
          <h2>{message}</h2>
          <h2>{secondMessage}</h2>
          <Link href={"/dashboard"} passHref>
            Dashboard
          </Link>
        </div>
      </main>
    </>
  );
}
