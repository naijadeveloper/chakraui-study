import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <section className="dark">
      <section className="min-h-screen text-gray-100 dark:bg-[#475262]">
        <div>
          <Link
            to={`chakra`}
            className="inline-block m-5 p-3 border-2 border-green-600"
          >
            check chakra
          </Link>
          <Link
            to={`framer`}
            className="inline-block m-5 p-3 border-2 border-green-600"
          >
            check framer motion
          </Link>
        </div>
        <Outlet />
      </section>
    </section>
  );
}
