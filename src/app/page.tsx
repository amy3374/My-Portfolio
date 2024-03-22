import React from "react";
import { FcGraduationCap } from "react-icons/fc";
import { PiCertificateBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa6";
import { FcBookmark } from "react-icons/fc";
import Link from "next/link";

const Home = () => {
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-20 py-24 mx-auto">
        <div className="mb-2 flex items-center lg:w-3/5 mx-auto">
          <h1 className="text-2xl pl-6 font-bold">Minseo Kim</h1>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 px-5 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-1/2 sm:h-1/2 md:w-1/2 md:h-1/2 lg:h-3/4 lg:w-3/4 xl:w-1/3 xl:h-1/3 sm:mr-10 flex flex-col items-center justify-center rounded-full ">
            <img
              src="https://github.com/amy3374/netflix-redux/assets/119571479/ee288906-6c72-4212-9952-9f2070ba30c7"
              className="w-full rounded-lg"
            />
          </div>

          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <div className=" flex items-center text-gray-900 text-lg title-font font-medium mb-2 mt-2">
              <FcGraduationCap className="mr-2" />
              <h3>학력</h3>
            </div>
            <ul className="mb-4">
              <li>
                성신여자 대학교 졸업
                <span className="text-xs font-medium text-sky-600 ml-2 dark:text-sky-600">
                  2022.02
                </span>
              </li>
              <li>전공 : 융합보안공학과</li>
              <li>복수전공 : 법학과</li>
            </ul>
            <div className=" flex items-center text-gray-900 text-lg title-font font-medium mb-2 mt-2">
              <PiCertificateBold className="mr-2 dark:text-white" />
              <h3>자격증</h3>
            </div>
            <ul className="mb-4">
              <li>정보처리기사</li>
              <li>사회조사분석사</li>
              <li>한국사</li>
            </ul>
            <h3>Contacts</h3>
            <span>tel : +82-10-3374-6973</span>
            <br />
            <span>amy3374@naver.com</span>
            <div className="flex">
              <a href="https://github.com/amy3374" className="text-lg mt-2">
                <FaGithub />
              </a>
              <span className="mx-2 mt-2">/</span>
              <a
                href="https://www.notion.so/93678654bf304af689ded5180555c8d0?v=16e36f4ab1ac4beea014b25e95889b84"
                className="mt-1 flex"
              >
                <FcBookmark className="text-lg mt-1 mr-1" />
                studying
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 pl-3">
            <p className="leading-relaxed text-slate-900 font-semibold dark:font-medium text-md">
              저는 개발자로서 새로운 것을 배우는 것에 대한 도전을 두려워하지
              않습니다. 새로운 기술을 배우고 그것을 실제로 적용해보며 다양한
              프로젝트를 구상하고 구현하는 과정이 제게 큰 즐거움을 줍니다.
              이처럼 항상 배움에 있어 열려있는 태도는 저의 가장 큰 강점이라고
              생각합니다. 또한, 최신 기술 트렌드를 적극적으로 받아들여
              프로젝트에서도 좋은 결과를 이끌어낼 수 있다고 확신합니다.😊😊
              <br />
              <a
                href="https://www.notion.so/e503cd64335d49f9a84357ca97f13655"
                className="mt-3 text-gray-700 inline-flex items-center dark:text-sky-300 text-sm font-semibold"
              >
                Learn more resume
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="/projects"
            className="mt-3 text-gray-700 inline-flex items-center dark:hover:text-gray-300 text-sm font-semibold"
          >
            프로젝트 보러가기
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
