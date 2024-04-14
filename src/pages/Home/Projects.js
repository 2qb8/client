import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects as ProjectData } from "../../resources/projects";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title="Проекты" />
      <div className="flex py-10 gap-20 justify-center">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3">
          {ProjectData.map((project, index) => (
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
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {ProjectData[selectedItemIndex].title}
          </h1>
          <p className="text-white">
            {ProjectData[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
