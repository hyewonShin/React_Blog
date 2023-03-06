import BlogList from "../components/BlogList";

const ListPage = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1 className="mb-4">Blogs</h1>
      </div>
      <BlogList />
    </div>
  );
};

export default ListPage;
