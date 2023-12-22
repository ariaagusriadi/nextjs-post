import React from "react";
import ViewUSerButton from "../components/Posts/ViewUSerButton";
import CardList from "../components/Posts/CardList";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const response = await fetch(base_url, {
    cache: "no-store" // artinya dia akan fetch ulang jika ada permintaan / reload
  });
  const posts: Iposts[] = await response.json();
  return (
    <>
      <div className="px-10">
        <h1 className="text-fuchsia-500 text-center underline text-2xl font-semibold my-3">
          POSTINGAN PAGE | {new Date().toLocaleTimeString()}
        </h1>
        <div className="flex flex-wrap justify-center">
          {posts.map((post) => {
            return (
              <CardList key={post.id} footer={<ViewUSerButton  userId={post.userId}/>}>
                <div className="font-bold text-xl mb-2">{post.title}</div>
                <p className="text-gray-700 text-base">{post.body}</p>
              </CardList>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Posts;
