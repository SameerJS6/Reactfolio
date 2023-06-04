import React, { useState, useEffect, useRef } from "react";
import Projects from "./Projects";

import { Tooltip } from "react-tooltip";
import Ripple from "../hook/Ripple";
import Loader from "./Loader/Loader";

export default function Cards() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleProject, setVisibleProject] = useState(3);
  let ProjectRef = useRef(null);

  const url = "https://reactfolio-data.netlify.app/";

  const fetchData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setProjects(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleMore = () => {
    const element = document.getElementById("Projects");

    if (visibleProject < projects.length) {
      setVisibleProject((prevvisible) => prevvisible + 3);
      ProjectRef.current.lastElementChild.scrollIntoView({
        behavior: "smooth",
      });
      element.scrollTo({});
    } else {
      setVisibleProject((prevvisible) => (prevvisible = 3));
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      ref={ProjectRef}
      className="relative my-6 px-4 py-2 transition-colors duration-300 sm:my-14 sm:py-2 md:my-[3.5rem] md:py-2 lg:my-20 lg:py-4"
      id="Projects"
    >
      <div className="m-6 projectText">
        <h2 className="text-5xl font-medium">
          Projects
        </h2>
      </div>
      {loading && <Loader />}
      {!loading && (
        <div className="card-grid mt-8 sm:gap-4 xl:mx-12">
          {projects.slice(0, visibleProject).map((items) => {
            return <Projects key={items.id} {...items} />;
          })}
          <Tooltip
            anchorSelect=".live-tooltip"
            content="Visit Live Site"
            noArrow={true}
          />
          <Tooltip
            anchorSelect=".github-tip"
            content="Visit Code"
            noArrow={true}
          />
        </div>
      )}

      {!loading && (
        <button
          type="button"
          onClick={handleMore}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 overflow-hidden rounded-3xl bg-secondary px-4 py-2 font-medium text-onSecondary shadow-xl transition-all duration-300 hover:bg-opacity-95 hover:shadow-2xl active:rounded-xl min-[688px]:-bottom-16 lg:-bottom-20 lg:px-5 lg:text-lg"
        >
          {visibleProject < projects.length ? "Show More" : "Show Less"}
          <Ripple
            color="rgb(var(--on-secondary-container))"
            duration={350}
            opacity={0.25}
          />
        </button>
      )}
    </section>
  );
}
