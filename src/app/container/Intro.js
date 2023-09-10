import React from "react";

function Intro() {
  return (
    <>
      <div id="/" className="mx-auto w-[75%] pt-[10rem] pb-[22rem] flex items-center justify-between ">
        <div className="g">
          <h1 className="text-white text-[3rem]">
            Hi!<span className="text-[#986dff]"> I am Ajit Sah</span>
          </h1>{" "}
          <br />
          <p className="text-[#9ca3af] text-lg">
            As a passionate and self-taught front-end developer,
            <br />
            Through my projects, I aim to blend aesthetics with
            <br />
            functionality, crafting immersive web experiences that
            <br />
            captivate users.You will get know about my journey of
            <br /> learning here.{" "}
          </p>{" "}
          <br />
          <a
            href="#"
            class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all shadow bg-white rounded hover:bg-white group"
          >
            <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#986dff] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-slate-600 transition-colors duration-300 ease-in-out group-hover:text-white">
              HIRE ME
            </span>
          </a>
        </div>
        <div className="">
          <img className="h-[22rem]" src="Curly.svg" alt="img" />
        </div>
      </div>
    </>
  );
}

export default Intro;
