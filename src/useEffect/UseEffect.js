import React, { useEffect, useState } from "react";

//use effect is a function that will be called...
// whenever page re-renders.

// In use effect the page renders once but then if we add...
// api calling then again it renders with its data.

export const UseEffect = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await response.json();
        setBlog(data);
        console.log("Data Called");
      } catch (error) {
        console.log(error, "Failed to fetch data");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {blog.map((post) => {
        return (
          <div key={post.id}>
            <h1></h1>
          </div>
        );
      })}
    </div>
  );
};
