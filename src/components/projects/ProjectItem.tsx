import React from "react";
import Image from "next/image";

const ProjectItem = ({ data }: any) => {
  const title = data.properties.이름.title[0].plain_text;
  const github = data.properties?.Github?.url;
  const youtube = data.properties.Youtube?.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const workPeriod = data.properties.WorkPeriod.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.태그.multi_select;
  console.log("imgsrc", imgSrc);
  return (
    <div className="flex flex-col m-3 p-0 bg-white border border-white shadow-lg dark:bg-black rounded-t-xl rounded-md w-full">
      <Image
        className="rounded-t-xl"
        alt="cover-image"
        width={100}
        height={40}
        layout="responsive"
        objectFit={`none`}
        quality={100}
        src={imgSrc}
      />
      <div className="flex flex-col justify-center p-4 border-t border-white">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <h3>{workPeriod}</h3>
        <a href={github}>깃허브 링크 바로가기</a>
        <a href={youtube}>유튜브 시연영상 보러가기</a>
        <div className="flex items-start mt-2">
          {tags?.map((tag: any) => (
            <h1
              key={tag.id}
              className="bg-sky-200 dark:bg-sky-700 px-2 py-1 mr-3 w-30 rounded-md"
            >
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
