import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = [
    "Javascript",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Firebase",
  ];
  return (
    <div>
      <SectionTitle title="Обо мне" />
      <div className="flex w-full items-center">
        <div className="h-[70vh] w-1/2">
          <dotlottie-player
            src="https://lottie.host/24b54616-5052-444b-b8a5-b155276ffb9f/yivwHEyIxb.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-white">
            Привет! Меня зовут Киндер Егор . Я увлекаюсь созданием вещей,
            которые появляются в интернете.
          </p>
          <p className="text-white">
            Мой интерес в веб программировании начался ещё в 2022, когда я
            впервые осмелился создать пустую страницу в HTML.
          </p>
          <p className="text-white">
            Моё первое достижение придало мне сил, поэтому я начал развиваться
            заметно быстрее.
          </p>
          <p className="text-white">
            Простым Frontend дизайном сайта я не обошёлся, поэтому начал
            осваивать Node.js вместе с Express.
          </p>
          <p className="text-white">
            Когда в моих сайтах появлялась первая регистрация, я начал
            использовать MongoDB для хранения данных.
          </p>
          <p className="text-white">Вот список технологий, которые я освоил:</p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Вот несколько технологий, с которыми я недавно работал:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10 rounded-3xl">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
