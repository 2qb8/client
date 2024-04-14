import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    Имя: "Киндер Егор",
    Возраст: 16,
    Пол: "Мужской",
    Почта: "egorich312@mail.ru",
    Телефон: "9069670906",
    Страна: "Россия",
  };
  return (
    <div>
      <SectionTitle title="Дополнительная информация" />

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-tertiary">{`{`}</h1>
          {Object.keys(user).map((key) => (
            <h1 className="ml-5 text-sm">
              <span className="text-tertiary">{key} :</span> :{" "}
              <span className="text-tertiary">{user[key]}</span>
            </h1>
          ))}
          <h1 className="text-tertiary">{`}`}</h1>
        </div>
        <div className="h-[400px] mr-5">
          <dotlottie-player
            src="https://lottie.host/483baaab-0e52-49ae-8ded-dd0b7f0c01b0/4fACntGjPh.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
