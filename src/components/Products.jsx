import Image from "next/image";
import SearchBar from "./tools/SearchBar";
import { useState } from "react";
import Link from "next/link";

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
            <Link href={product.title} key={`${product.id}${index}`}>
              <div className="products__card">
                <h3>{product.title}</h3>
                <Image
                  src={product.images[0]}
                  width={100}
                  height={100}
                  alt={product.title}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Products;
