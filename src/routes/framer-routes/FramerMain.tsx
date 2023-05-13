import { Outlet, Link } from "react-router-dom";

export default function FramerMain() {
  return (
    <div>
      <Link
        to={`framer-home`}
        className="inline-block m-3 p-2 border-2 border-green-600"
      >
        Framer home
      </Link>

      <Link
        to={`framer-base`}
        className="inline-block m-3 p-2 border-2 border-green-600"
      >
        Framer base
      </Link>

      <Link
        to={`framer-toppings`}
        className="inline-block m-3 p-2 border-2 border-green-600"
      >
        Framer toppings
      </Link>

      <Link
        to={`framer-order`}
        className="inline-block m-3 p-2 border-2 border-green-600"
      >
        Framer order
      </Link>

      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
