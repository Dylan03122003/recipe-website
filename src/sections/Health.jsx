import React from "react";
import avatar2 from "./../assets/img/avatar2.png";
import clock from "./../assets/img/clock.png";
import spoon from "./../assets/img/spoon.png";
import print from "./../assets/img/print.png";
import share from "./../assets/img/share.png";
function Information({ firstParagraph, secondParagraph }) {
  return (
    <div>
      <div className="flex justify-between pt-3 ">
        <p className="text-[17px] text-[#00000099] font-semibold #00000099">
          {firstParagraph}
        </p>
        <p className="font-semibold text-[17px]">{secondParagraph}</p>
      </div>

      <div class="border-b"></div>
    </div>
  );
}
function Health() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col justify-between items-center ">
        <div className="space-x-4 flex flex-col items-center text-center lg:w-[800px] md:w-[100%]">
          <h1 className="lg:pl-[70px]  xl:text-[60px]
         lg:text-[50px]
         leading-tight
         font-semibold
         text-gray-900
         md:text-clip
         md:inline
         md:text-[40px]
         sm:text-[39px]
         max-sm:text-[30px] ">
            Health Japanese Fried Rice
          </h1>
          <div className="lg:pl-[150px] flex flex-row items-center justify-center lg:text-[20px]">
            <div className="flex flex-row items-center justify-center lg:w-[190px] md:w-[140px] sm:w-[120px] w-[90px]">
              <div>
                <img className="min-w-[30px] max-w-[50px] lg:block md:block sm:hidden hidden" src={avatar2}></img>
              </div>
              <div className="pl-5">
                <p className="lg:text-[12px] font-bold">John Smith</p>
                <p className="text-[#00000099] font-semibold text-[14px]">
                  15 March 2022
                </p>
              </div>
              
            </div>
            <div class="divider h-10 border-l border-[#0000001A] mx-2"></div>
            <div className="p-10 flex flex-row items-center justify-center lg:w-[200px] md:w-[150px] sm:w-[110px] w-[70px]">
              <div>
                <img className="min-w-[18px] max-w-[18px] lg:block md:block sm:hidden hidden" src={clock}></img>
              </div>
              <div className="pl-3">
                <p className="font-semibold text-[12px]">PREP TIME</p>
                <p className="text-[#00000099] font-semibold text-[14px]">
                  15 Minutes
                </p>
              </div>
             
            </div>
            <div class="divider h-10 border-l border-[#0000001A] mx-2"></div>
            <div className="p-10 flex flex-row items-center justify-center lg:w-[200px] md:w-[150px] sm:w-[110px] w-[70px]">
              <div>
                <img className="min-w-[18px] max-w-[18px] lg:block md:block sm:hidden hidden" src={clock}></img>
              </div>
              <div className="pl-3">
                <p className="font-semibold text-[12px]">COOK TIME</p>
                <p className="text-[#00000099] font-semibold text-[14px]">
                  15 Minutes
                </p>
              </div>
              
            </div>
            <div class="divider h-10 border-l border-[#0000001A] mx-2"></div>
            <div className="p-10 flex flex-row items-center justify-center lg:w-[200px] md:w-[150px] sm:w-[110px] w-[120px]">
              <div>
                <img className="min-w-[18px] max-w-[18px] lg:block md:block sm:hidden hidden" src={spoon}></img>
              </div>
              <div className="">
                <p className="text-[#00000099] font-semibold text-[14px]">
                  Chicken
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:pr-[80px] md:pr-[50px] pt-[20px] gap-[30px]">
          <div className="flex items-center justify-center w-[80px] h-[80px] bg-[#E7FAFE] rounded-full">
            <img className="w-[30x] h-[35px]" src={print}></img>
          </div>
          <div className="flex items-center justify-center w-[80px] h-[80px] bg-[#E7FAFE] rounded-full">
            <img className="w-[40px] h-40px]" src={share}></img>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-col sm:flex-col flex-col items-center justify-between pl-[80px] pt-10 pr-[80px]">
        <div className="flex justify-center lg:w-[915px] lg:h-[600px] md:w-[100%] sm:w-[100%] w-[100%] md:h-[500px] sm:h-[400px] h-[250px]">
          <iframe
            className="rounded-[35px] w-[100%]  lg:pr-[5px] md:mr-[25px]"
        
            src="https://www.youtube.com/embed/UgA_5V3Jro0?si=MAZdZsKztX6cmwSw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className=" flex flex-col justify-between lg:w-[400px] lg:h-[600px] md:w-[80%] sm:w-[400px] w-[300px] lg:mt-[0px] md:mt-[50px] sm:mt-[50px] mt-[50px] bg-[#E7FAFE] rounded-[20px]">
          <div className="p-10 space-y-4">
            <h1 className="text-[24px] font-semibold">Nutrition Information</h1>
            <Information
              firstParagraph="Calories"
              secondParagraph="219.9 kcal"
            />
            <Information firstParagraph="Total Fat" secondParagraph="10.7 g" />
            <Information firstParagraph="Protein" secondParagraph="7.9 g" />
            <Information
              firstParagraph="Carbohudrate"
              secondParagraph="22.3 g"
            />
            <Information
              firstParagraph="Cholesterol"
              secondParagraph="37.4 mg"
            />
            
          </div>
          <div className="text-center p-10 text-[#00000099]">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
        </div>
      </div>
      <div className="text-[#00000099] lg:p-[80px] md:p-[60px] sm:p-[40px] p-[30px]">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
}
export default Health;
