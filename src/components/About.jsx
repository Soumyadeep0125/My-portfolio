import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        As I embark on my journey as a computer science student, I am filled with unbridled curiosity 
        and a thirst for knowledge in this ever-evolving field. From a young age, I have been fascinated 
        by the world of technology, and now, as I take my first steps into the realm of programming and problem-solving, 
        I am determined to explore and excel in the small intricacies that make up the vast universe of computer science.
        </p>

        <br />

        <p className="text-xl">
        Computer science is a field that never stands still. New technologies emerge, programming languages
         evolve, and paradigms shift. Rather than being overwhelmed by the constant change, I embrace it wholeheartedly. 
         I see it as an opportunity to continue learning and growing, adapting my skills to remain at the forefront of innovation.
        </p>
      </div>
    </div>
  );
};

export default About;