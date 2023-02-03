import { useState } from "react";
function App() {
  const [title, setTitle] = useState("");

  return (
    <div className="container">
      <div className="mb-3">
        <label className="form-lable">Title</label>
        <input
          className="form-control"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            console.log(e.target.value);
          }}
        />
      </div>
      <button className="btn btn-primary">Post</button>
    </div>
  );
}

export default App;
