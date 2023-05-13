import { Outlet, Link } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

export default function ChakraMain() {
  return (
    <div>
      <Link
        to={`chakra-home`}
        className="inline-block m-3 p-2 border-2 border-green-600"
      >
        chakra home
      </Link>

      <ChakraProvider>
        <Outlet />
      </ChakraProvider>
    </div>
  );
}
