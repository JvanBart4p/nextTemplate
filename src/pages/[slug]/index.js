import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Items = ({ dataObject }) => {
  const [selectedProduct, setSelectedProduct] = useState("");
  const router = useRouter();
  console.log(router.asPath.replace(/%20/g, " "));

  useEffect(() => {
    dataObject.products.map((item) => {
      if (router.asPath.replace(/%20/g, " ").replace("/", "") == item.title) {
        setSelectedProduct(item);
      }
    });
  }, dataObject);

  return (
    <main>
      <h1>Hello</h1>
      <div>{selectedProduct.title}</div>
    </main>
  );
};
export default Items;

export async function getStaticPaths() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();

  return {
    fallback: "blocking",
    paths: data.products.map((item) => ({
      params: { slug: item.title },
    })),
  };
}

export async function getStaticProps(ctx) {
  let dataObject = {};
  const res = await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json) => (dataObject = json));
  return {
    props: {
      dataObject,
    },
  };
}
