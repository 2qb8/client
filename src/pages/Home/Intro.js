import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">Привет, Меня зовут</h1>
      <h1 className="text-secondary lg:text-7xl sm:text-3xl font-semibold">
        Киндер Егор Сергеевич
      </h1>
      <h1 className="lg:text-7xl sm:text-3xl text-white font-semibold">
        Я создаю Веб-продукты.
      </h1>
      <p className="text-white w-2/3">
        Я - Full-Stack Веб разработчик. В настоящее время я совершенствую свои
        знания в React. Вся информация по кнопке снизу.
      </p>
      <button className="border-tertiary text-tertiary border-2 px-10 py-3 rounded">
        Начать
      </button>
    </div>
  );
}

export default Intro;
