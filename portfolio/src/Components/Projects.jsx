import React from "react";
// import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="w-[90%] sm:max-w-3xl mx-auto  leading-7 text-justify sm:mx-[150px] sm:pr-10"
    id="projects">
      <h1 className="text-2xl sm:text-3xl"> My Projects</h1>
      <div className="py-2">
        <h2 className="text-xl">Video app</h2>
        <span className="cursor-pointer mr-2">
          <a href="https://github.com/saurabh-99877/myYoutube" target="_blank">
            <u>Code</u>
          </a>
        </span>
        <span className="cursor-pointer">
          <u>Live</u>
        </span>
        <p className="text-[#8f8f8f]">
          This app integrates the YouTube API to fetch and display video content
          dynamically. It allows users to search for videos, view trending
          content, and access detailed video information, including titles,
          descriptions, thumbnails, and statistics. Built with React and
          Tailwind CSS for a seamless user experience, it efficiently handles
          API requests and updates content in real-time, it uses Redux Toolkit
          for efficient state management, ensuring smooth data flow and updates.
        </p>
      </div>
      <div className="py-2">
        <h2 className="text-xl">Sasta Netflix</h2>
        <span className="cursor-pointer mr-2">
          <a
            href="https://github.com/saurabh-99877/netflix-gpt"
            target="_blank"
          >
            <u>Code</u>
          </a>
        </span>
        <span className="cursor-pointer">
          <a href="https://netflix-9456a.web.app/">
          <u>Live</u>
          </a>
        </span>
        <p className="text-[#8f8f8f]">
          Netflix GPT - Project Summary Netflix GPT is an AI-powered movie and
          TV show discovery app that enhances content recommendations. It
          integrates the TMDB API to fetch real-time data on movies, TV shows,
          ratings, and more. The app is built with React for a smooth UI, Redux
          Toolkit for state management, and Firebase for authentication and data
          storage.
        </p>
      </div>
    </div>
  );
};

export default Projects;
