import axios from "axios";
import { TOKEN, DATABASE_ID } from "../../../config";
import ProjectItem from "@/components/projects/ProjectItem";

export async function getPosts() {
  try {
    const response = await axios.post(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      {
        sorts: [
          {
            property: "이름",
            direction: "ascending",
          },
        ],
        page_size: 100,
      },
      {
        headers: {
          Accept: "application/json",
          "Notion-Version": "2022-02-22",
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    console.log(response);
    return { props: { data: response.data }, revalidate: 1 };
  } catch (error) {
    console.error(error);
  }
  // const options = {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Notion-Version": "2022-02-22",
  //     "Content-type": "application/json",
  //     Authorization: `Bearer ${TOKEN}`,
  //   },
  //   body: JSON.stringify({
  //     sorts: [
  //       {
  //         property: "이름",
  //         direction: "ascending",
  //       },
  //     ],
  //     page_size: 100,
  //   }),
  // };
  // const res = await fetch(
  //   `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
  //   options
  // );
  // const projects = await res.json();

  // return projects;
}

const Projects = async () => {
  const projects = await getPosts();

  console.log("posts", projects);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen mb-10 px-6">
      <h1 className="text-4xl font-bold sm:text-6xl mt-10">
        총 프로젝트 :
        <span className="text-rose-300 m-2">
          {projects?.props.data.results?.length}
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-10 m-6 gap-8 sm:w-full">
        {projects &&
          projects.props.data.results.map((project: any) => (
            <ProjectItem key={project.id} data={project} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
