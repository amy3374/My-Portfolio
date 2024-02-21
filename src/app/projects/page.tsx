"use client";
import React from "react";
import { TOKEN, DATABASE_ID } from "../../../config";

async function getPosts() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const data = await res.json();
  console.log("Data", data);
  // const projectId = data.results.map((project: any) => project.id);
  // console.log(`project id : ${projectId}`);
  // return data as any[];

  // return {
  //   props: {},
  // };
}

const Projects = async () => {
  const posts = await getPosts();
  console.log("posts", posts);

  return (
    <div>
      <h1>projects page</h1>
    </div>
  );
};

export default Projects;
