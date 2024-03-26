import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ListedBook from "../Pages/ListedBook/ListedBook";
import PageRead from "../Pages/PageRad/PageRead";
import Author from "../Pages/Author/Author";
import Blog from "../Pages/Blog/Blog";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/listedBooks",
            element: <ListedBook></ListedBook>
        },
        {
            path: "/pageRead",
            element: <PageRead></PageRead>
        },
        {
            path: "/authorSec",
            element: <Author></Author>
        },
        {
            path: "/blog",
            element: <Blog></Blog>
        },
        {
          path: "/book-details/${bookId}",
          element:
        }
      ]
    },
  ]);

export default router;