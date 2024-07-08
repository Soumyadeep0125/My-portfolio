import React from "react";
import login from "../assets/portfolio/login.jpg";
import quiz from "../assets/portfolio/quiz.jpg";
import app from "../assets/portfolio/app.jpg";
import ecommerce from "../assets/portfolio/ecommerce.jpg";
import bookshelf from "../assets/portfolio/bookshelf.jpg";
import spotify from "../assets/portfolio/spotify.jpg";
import gemini from "../assets/portfolio/gemini.jpg";





const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: login,
      demolink:"https://soumyadeep0125.github.io/login-and-signup-page/",
      githublink:"https://github.com/Soumyadeep0125/login-and-signup-page",
    },
    {
      id: 2,
      src: quiz,
      demolink:"https://soumyadeep0125.github.io/Quiz-Website/",
      githublink:"https://github.com/Soumyadeep0125/Quiz-Website"
    },
    {
      id: 3,
      src: ecommerce,
      demolink:"https://soumyadeep0125.github.io/E-commerce-website/",
      githublink:"https://github.com/Soumyadeep0125/E-commerce-website"
    },
    {
      id: 4,
      src: app,
      demolink:"https://user-images.githubusercontent.com/123949000/219398331-53c8b972-1a96-4e04-ac0d-6f5e4829c5b4.jpg",
      githublink:"https://github.com/Soumyadeep0125/Celcius-to-Farenheit-converter"
    },
    {
      id: 5,
      src: bookshelf,
      demolink:"https://book-shelf-pro.netlify.app/",
      githublink:"https://github.com/Soumyadeep0125/Book-shelf-frontend"
    },
    {
      id: 6,
      src: gemini,
      demolink:"https://gemini-clone-pro.netlify.app/",
      githublink:"https://github.com/Soumyadeep0125/Gemini-Clone"
    },
    {
      id: 7,
      src: spotify,
      demolink:"https://spotify-clonepro.netlify.app/",
      githublink:"https://github.com/Soumyadeep0125/Spotify-Clone"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,demolink , githublink }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demolink}><button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >
                  Demo
                </button></a>
                <a href={githublink}><button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;