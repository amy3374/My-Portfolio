import axios from "axios";
import { TOKEN, DATABASE_ID } from "../../../config";
import ProjectItem from "@/components/projects/ProjectItem";

async function getPosts() {
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
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
// //     console.log(response);
// //     return { props: { data: response.data }, revalidate: 1 };
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }

export default async function Projects() {
  const projects = await getPosts();

  console.log("posts", projects);

  return (
    <div className="container px-20 py-24 mx-auto">
      <div className="flex flex-col justify-center items-center min-h-screen mb-10 px-6">
        <h1 className="text-3xl font-bold sm:text-5xl mt-10">
          총 프로젝트 :
          <span className="text-rose-300 dark:text-rose-300 text-3xl font-bold sm:text-5xl text m-2">
            {projects?.results?.length}
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-10 m-6 gap-8 sm:w-full">
          {projects &&
            projects?.results?.map((project: any) => (
              <ProjectItem key={project.id} data={project} />
            ))}
        </div>
      </div>
    </div>
  );
}
