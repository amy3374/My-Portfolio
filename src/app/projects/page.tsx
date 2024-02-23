import React from "react";
import { TOKEN, DATABASE_ID } from "../../../config";
import ProjectItem from "@/components/projects/ProjectItem";

async function getPosts() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "이름",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();
  const projectNames = projects?.results?.map(
    (project: any) => project.properties.이름.title[0].plain_text
  );
  console.log(`project Names : ${projectNames}`);
  // return {
  //   props: { projectNames },
  // };
  return projects;
}

const Projects = async () => {
  const projects = await getPosts();
  console.log("posts", projects);

  return (
    <div>
      <h1>projects page:{projects?.results?.length}개</h1>
      {projects?.results?.map((project: any) => (
        <ProjectItem key={project.id} data={project} />
      ))}
    </div>
  );
};

export default Projects;
