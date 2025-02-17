/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toast } from "react-toastify";
// import HeartIcon from "./HeartIcon.jsx.old";

const ProductCard = ({ p }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
    toast.success("Product added to cart");
  };

  return (
    <div className="max-w-sm relative rounded-lg shadow">
      <section className="relative">
        <Link to={`/product/${p._id}`}>
          <span className="absolute bottom-3 right-3 bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">
            {p?.brand}
          </span>
          <img
            src={p.image}
            alt={p.name}
            style={{ height: "170px", objectFit: "cover" }}
            className="cursor-pointer w-full"
          />
        </Link>
        {/* <HeartIcon product={p} /> */}
      </section>

      <div className="p-5">
        <div className="flex justify-between">
          <h5 className="mb-2 text-lg">{p?.name}</h5>
          <p className="font-semibold text-pink-500">
            {p?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        </div>

        <p className="mb-3 font-normal">
          {p?.description?.substring(0, 60)}...
        </p>

        <section className="flex justify-between items-center">
          <Link
            to={`/product/${p._id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus-within:ring-pink-300"
          >
            Read More
          </Link>

          <button
            className="p-2 rounded-full"
            onClick={() => addToCartHandler(p, 1)}
          >
            <AiOutlineShoppingCart size={25} />
          </button>
        </section>
      </div>
    </div>
  );
};
export default ProductCard;
