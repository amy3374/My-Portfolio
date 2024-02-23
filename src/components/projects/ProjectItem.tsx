import React from "react";
import Image from "next/image";

const ProjectItem = ({ data }: any) => {
  const title = data.properties.이름.title[0].plain_text;
  const github = data.properties?.Github?.url;
  const youtube = data.properties.Youtube?.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const workPeriod = data.properties.WorkPeriod.rich_text[0].plain_text;
  const imgScr = data.cover.file?.url || data.cover.external.url;
  console.log("githubLink", title, youtube, description);
  return (
    <div className="flex flex-col m-3 p-0 bg-slate-800 rounded-md">
      <Image
        className="rounded-t-xl"
        alt="cover-image"
        width={100}
        height={40}
        layout="responsive"
        objectFit="none"
        quality={100}
        src={imgScr}
      />
      <h1>{title}</h1>
      <h3>{description}</h3>
      <h3>{workPeriod}</h3>
      <a href={github}>깃허브 링크 바로가기</a>
      <a href={youtube}>유튜브 시연영상 보러가기</a>
    </div>
  );
};

export default ProjectItem;
