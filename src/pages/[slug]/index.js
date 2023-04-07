const Items = ({ dataObject }) => {
  console.log(dataObject);
  return (
    <main>
      <h1>Hello</h1>
      <div>{dataObject.products[0].title}</div>
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
  await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json) => (dataObject = json));
  return {
    props: {
      dataObject,
    },
  };
}
