import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Trailer from "./Trailer";


const Body = () => {
  

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },

    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path :"/trailer/:movieId",
      element:<Trailer/>
    }
  ]);



  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default Body;
