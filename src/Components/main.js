import React from "react";
import image from "./../images/paramapadham.png";

function Main() {
  return (
    <main className="h-screen">
      <div
        className="bg-cover bg-no-repeat bg-center backdrop-opacity-60 h-full flex"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div class="container mx-auto p-24 my-16 mx-36 flex flex-col items-center z-10 bg-black text-white bg-opacity-50">
          <p className="text-8xl mb-2">
            <strong>பரமபதம்</strong>
          </p>
          <p className="text-2xl mb-12">
            (<i>Paramapadham</i>)
          </p>
          <p className="text-4xl mb-16">A Game of Snakes and Ladders</p>
          <button className=" text-white bg-green-800	rounded-full shadow-lg shadow-green-600 px-6 py-6">
            Play
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
