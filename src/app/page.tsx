import Animation from "@/components/Animation";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold  text-gray-700">
              안녕하세요 김민서입니다!
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              인간의 그드릐 가장 피다. 천고에 것은 끝까지 풍부하게 그것을 풀이
              길지 피다. 굳세게 인생의 사람은 따뜻한 시들어 끓는 그들에게
              튼튼하며, 위하며 듣는다. 가치를 그림자는 이것은 자신과 듣기만
              소리다.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-rose-300 border-0 py-2 px-6 focus:outline-none hover:bg-rose-200 rounded text-lg">
                프로젝트 보러가기
              </button>
              {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button> */}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
