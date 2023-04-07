import Image from "next/image";
import SearchBar from "./tools/SearchBar";
import { useState } from "react";
const Products = ({ data }) => {
  const [results, setResults] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <SearchBar
        data={data}
        setSearchQuery={setSearchQuery}
        setResults={setResults}
      />
      <div className="products">
        {results.map((product, index) => {
          return (
            <div className="products__card" key={`${product.id}${index}`}>
              <h3>{product.title}</h3>
              <Image
                src={product.images[0]}
                width={100}
                height={100}
                alt={product.title}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
