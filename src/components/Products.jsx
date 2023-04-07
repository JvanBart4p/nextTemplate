import Image from "next/image";

const Products = ({ data }) => {
    console.log(data)
  return (
    <div className="products">
      {data.map((product, index) => {
        return (
          <div className="products__card" key={`${product.id}`}>
            <h3>{product.title}</h3>
            <Image src={product.images[0]} width={100} height={100} alt={product.title}/>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
