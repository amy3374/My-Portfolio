import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";

const ProjectItem = ({ data }: any) => {
  const title = data.properties.이름.title[0].plain_text;
  const github = data.properties?.Github?.url;
  const githubBack = data.properties?.GithubBack?.url;
  console.log("githubBack", githubBack);
  const code = data.properties.Code?.url;
  const publish = data.properties.배포?.url;
  console.log("배포링크", publish);
  const description = data.properties.Description.rich_text[0].plain_text;
  const workPeriod = data.properties.WorkPeriod.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.태그.multi_select;
  console.log("imgsrc", imgSrc);
  return (
    <div className="flex flex-col m-3 p-0 bg-white border dark:border-white shadow-lg dark:bg-black rounded-t-xl rounded-md w-full">
      <Image
        className="rounded-t-xl h-16"
        alt="cover-image"
        width={100}
        height={50}
        layout="responsive"
        objectFit={`none`}
        quality={100}
        src={imgSrc}
      />
      <div className="flex flex-col justify-center p-4 border-t dark:border-white">
        <div className="flex justify-between mb-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="flex gap-2">
            <a href={github}>
              <FaGithub />
            </a>
            {githubBack == "없음" ? (
              ""
            ) : (
              <a href={githubBack}>
                <FaGithub />
              </a>
            )}
            {publish == "없음" ? (
              ""
            ) : (
              <a href={publish}>
                <FaLink className="text-sky-600" />
              </a>
            )}
          </div>
        </div>
        <p className="mb-2 text-sm font-medium">{description}</p>
        <a
          href={code}
          className="text-slate-400 dark:text-sky-400 font-semibold text-sm mb-2"
        >
          코드 설명 보러가기
        </a>
        <span className="font-semibold text-sm dark:text-gray-500">
          {workPeriod}
        </span>
        <div className="flex items-start mt-4 flex-wrap">
          {tags?.map((tag: any) => (
            <h1
              key={tag.id}
              className="bg-sky-200 dark:text-black px-2 py-.5 mr-3 mb-3 w-30 rounded-md"
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
