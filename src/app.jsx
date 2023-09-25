import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SharedLayOut from "./components/SharedLayOut";
import About from "./pages/About";
import ArticalPage from "./pages/ArticalPage";
export function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <SharedLayOut />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "articalpage",
          element: <ArticalPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}
