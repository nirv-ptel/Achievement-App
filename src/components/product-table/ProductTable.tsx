import Loader from "../../shared/loader/Loader";
import useProductTable from "./hooks/useProductTable";

type ProductProp = {
  id: string;
  title: string;
  image: string;
  price: number;
};

const ProductsTable = () => {
  const { data: products, isLoading: isProductLoading } = useProductTable();

  return (
    <>
      {isProductLoading ? (
        <div className="text-center">
          <Loader size="lg" />
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products?.data?.map((product: ProductProp) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.image}
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
