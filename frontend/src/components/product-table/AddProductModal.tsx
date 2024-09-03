import FormError from "../../shared/form-control/FormError";
import FormInput from "../../shared/form-control/FormInput";
import FormLabel from "../../shared/form-control/FormLabel";
import useCreateProduct from "./hooks/useCreateProduct";
import useCreateProductForm from "./hooks/useCreateProductForm";

const AddProductModal = ({ onCloseAddProduct }: any) => {
  const { mutate: createProductFn } = useCreateProduct(onCloseAddProduct);

  const { values, handleSubmit, handleChange, errors } = useCreateProductForm(
    () => {
      if (values) {
        createProductFn(values as any);
      }
    }
  );

  console.log(values, "values");

  return (
    <form onSubmit={handleSubmit}>
      <div className="modal-card justify-center">
        <div className="w-full">
          <h3 className="text-lg text-blackolive mb-[0.875rem] font-semibold">
            Users
          </h3>
          <div className="mb-4">
            <FormLabel title="Name" />
            <FormInput
              name="title"
              onChange={handleChange}
              value={values?.title}
              className={errors.title ? "is-error" : ""}
            />
            <FormError error={errors?.title} />
          </div>

          <div className="mb-4">
            <FormLabel title="Price" />
            <FormInput
              name="price"
              onChange={handleChange}
              value={values?.price}
              className={errors.price ? "is-error" : ""}
            />
            <FormError error={errors.price} />
          </div>

          <div className="mb-4">
            <FormLabel title="Image" />
            <FormInput
              name="thumbnail"
              onChange={handleChange}
              value={values?.thumbnail}
              className={errors.thumbnail ? "is-error" : ""}
            />
            <FormError error={errors.thumbnail} />
          </div>

          <div className="flex justify-end items-baseline gap-[0.75rem]">
            <button
              type="button"
              className="btn-secondary px-4"
              onClick={() => onCloseAddProduct()}
            >
              Close
            </button>

            <button type="submit" className="btn-primary px-4 sm:w-auto w-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProductModal;
