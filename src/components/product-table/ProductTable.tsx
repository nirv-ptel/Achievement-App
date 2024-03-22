import { useRef, useState } from "react";
import DebouncedInput from "../../shared/debounced-input/DebouncedInput";
import Loader from "../../shared/loader/Loader";
import useProductTable from "./hooks/useProductTable";
import { debounce } from "lodash";

type ProductProp = {
  thumbnail: string | undefined;
  id: string;
  title: string;
  image: string;
  price: number;
};

const ProductsTable = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const {
    data: allProducts,
    isLoading: isProductLoading,
    refetch,
  } = useProductTable(searchKeyword);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    executeSearch();
  };

  const executeSearch = useRef(
    debounce(async () => {
      await refetch();
    }, 500)
  ).current;

  const handleSearchClick = () => {
    refetch();
  };

  return (
    <>
      {isProductLoading ? (
        <div className="text-center">
          <Loader size="lg" />
        </div>
      ) : (
        <>
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Products
            </h2>
            <div className="flex">
              <DebouncedInput
                placeholder={"Search Product"}
                value={searchKeyword}
                onChange={onSearchChange}
                onSearch={handleSearchClick}
              />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {allProducts?.data?.products?.map((product: ProductProp) => (
              <div key={product.id} className="group cards">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product?.thumbnail}
                    alt={"product-image"}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={"#"}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ProductsTable;
