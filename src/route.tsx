import { createBrowserRouter } from "react-router-dom";

import App from "./App.js";
import ChakraMain from "./routes/chakra-routes/ChakraMain.tsx";
import FramerMain from "./routes/framer-routes/FramerMain.tsx";
import FramerHome from "./routes/framer-routes/framer-home.tsx";
import FramerBase from "./routes/framer-routes/framer-base.tsx";
import FramerToppings from "./routes/framer-routes/framer-toppings.tsx";
import FramerOrder from "./routes/framer-routes/framer-order.tsx";

import ChakraHome from "./routes/chakra-routes/chakra-home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "chakra",
        element: <ChakraMain />,
        children: [
          {
            path: "chakra-home",
            element: <ChakraHome />,
          },
        ],
      },
      {
        path: "framer",
        element: <FramerMain />,
        children: [
          {
            path: "framer-home",
            element: <FramerHome />,
          },
          {
            path: "framer-base",
            element: <FramerBase />,
          },
          {
            path: "framer-toppings",
            element: <FramerToppings />,
          },
          {
            path: "framer-order",
            element: <FramerOrder />,
          },
        ],
      },
    ],
  },
]);

export default router;
