import React from "react";

const ProjectItem = ({ data }: any) => {
  const title = data.properties.이름.title[0].plain_text;
  // const githubLink = data.properties.Github.
  return (
    <div className="p-6 m-3 bg-slate-400 rounded-md">
      <h1>{title}</h1>
    </div>
  );
};

export default ProjectItem;
