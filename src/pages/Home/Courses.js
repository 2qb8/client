import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { courses as CoursesData } from "../../resources/courses";

function Courses() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Курсы" />
      <div className="flex py-10 gap-20 justify-center">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3">
          {CoursesData.map((course, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary -ml-[3px] bg-[#1a7f5a31] py-3"
                    : "text-white"
                }`}
              >
                {course.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {CoursesData[selectedItemIndex].title}
          </h1>
          <p className="text-white">
            Курс "HTML, CSS, JS Веб-Мастер" представляет собой интенсивное
            обучение основам веб-разработки, охватывающее HTML для
            структурирования контента, CSS для стилизации и макета веб-страниц,
            а также JavaScript для создания интерактивности и динамического
            поведения. Учебная программа включает в себя изучение основных
            концепций и техник каждого языка, а также их практическое применение
            через разработку проектов и выполнение заданий. Курс также
            ориентирован на понимание современных методов и лучших практик
            веб-разработки, включая работу с адаптивным дизайном и
            взаимодействием с пользователем. Ссылка на курсы =
            https://kod.mob-edu.ru/
          </p>
        </div>
      </div>
    </div>
  );
}

export default Courses;
