import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import ShowPage from "./pages/ShowPage";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/blogs",
    component: ListPage,
  },
  {
    path: "/blogs/create",
    component: CreatePage,
  },
  {
    path: "/blogs/:id/edit",
    component: EditPage,
  },
  {
    path: "/blogs/:id",
    component: ShowPage,
  },
];

export default routes;

// :id 의 경우 string도 인식하기 때문에 라우터의 순서가 중요 !
