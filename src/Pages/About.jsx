import React from "react";
import Navbar from "../assets/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -mx-4 -my-8">
            <div class="py-8 px-4 lg:w-1/3">
              <div class="h-full flex items-start">
                <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                 
                </div>
                <div class="flex-grow pl-6">
                 
                  <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                    Meet Kathiriya
                  </h1>
                  <p class="leading-relaxed mb-5">
                        200420111034
                        <br />
                        Electronics and 
                        <br />
                        Communication Engineering
                  </p>
                  <a class="inline-flex items-center">
                    <img
                      alt="blog"
                      src="https://dummyimage.com/103x103"
                      class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-3">
                      <span class="title-font font-medium text-gray-900">
                        Sarvajanik College of Engineering and Technology (SCET)
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            
            <div class="py-8 px-4 lg:w-1/3">
              <div class="h-full flex items-start">
                <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                 
                </div>
                <div class="flex-grow pl-6">
                 
                  <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                    Aleemuddin Mombasawala
                  </h1>
                  <p class="leading-relaxed mb-5">
                    200420111017 
                    <br />
                    Electronics and 
                    <br />
                    Communication Engineering
                    <br />
                  </p>
                  <a class="inline-flex items-center">
                    <img
                      alt="blog"
                      src="https://dummyimage.com/101x101"
                      class="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-3">
                      <span class="title-font font-medium text-gray-900">
                      Sarvajanik College of Engineering and Technology (SCET)
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
