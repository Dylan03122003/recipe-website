import direction from "../assets/img/direction.png";
function Directions(){
    return(
<div>
    <div className=" lg:w-[915px] md:w-[700px] ">
        <h1 className="font-semibold text-[33px] pl-[80px] pt-[50px]">Directions</h1>
        <div className="pb-[90px]">
            <div className="pl-[80px] ">
              <div className="flex ">
                <input
                  type="checkbox"
                  name="direction"
                  id="direction1"
                  className="hidden peer"
                ></input>
                <div className="flex items-center justify-center top-0 right-4 bottom-0 w-6 h-6 my-auto rounded-full bg-white border-[3px] peer-checked:border-hidden peer-checked:bg-black transition delay-50">
                  <svg
                    width="12"
                    height="8"
                    className=""
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 3L5 7L11 1"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <label
                  for="direction1"
                  className="p-6 bg-opacity-90 font-semibold backdrop-blur-2xl text-[22px] hover:text-gray-300 peer-checked:text-gray-300 peer-checked:line-through cursor"
                >1. Lorem ipsum dolor sit amet
                </label>          
              </div>
              <p className="text-[#00000099] text-[14px] pl-[50px] w-[90%]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
              <img className="pl-[50px] p-[45px]" src={direction}></img>
              <p className="text-[#00000099] text-[14px] pl-[50px] w-[90%] pb-[50px]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

              <div class="border-b-2"></div>
            </div>

            <div className="pl-[80px] pt-[10px]">
              <div className="flex  ">
                <input
                  type="checkbox"
                  name="direction"
                  id="direction2"
                  className="hidden peer"
                ></input>
                <div className="flex items-center justify-center top-0 right-4 bottom-0 w-6 h-6 my-auto rounded-full bg-white border-[3px] peer-checked:border-hidden peer-checked:bg-black transition delay-50">
                  <svg
                    width="12"
                    height="8"
                    className=""
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 3L5 7L11 1"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <label
                  for="direction2"
                  className="p-6 bg-opacity-90 font-semibold backdrop-blur-2xl text-[22px] hover:text-gray-300 peer-checked:text-gray-300 peer-checked:line-through cursor"
                >2. Lorem ipsum dolor sit amet
                </label>          
              </div>
              <p className="text-[#00000099] text-[14px] pl-[50px] w-[90%] pb-[50px]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

              <div class="border-b-2"></div>
            </div>

            <div className="pl-[80px] pt-[10px]">
              <div className="flex  ">
                <input
                  type="checkbox"
                  name="direction"
                  id="direction3"
                  className="hidden peer"
                ></input>
                <div className="flex items-center justify-center top-0 right-4 bottom-0 w-6 h-6 my-auto rounded-full bg-white border-[3px] peer-checked:border-hidden peer-checked:bg-black transition delay-50">
                  <svg
                    width="12"
                    height="8"
                    className=""
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 3L5 7L11 1"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <label
                  for="direction3"
                  className="p-6 bg-opacity-90 font-semibold backdrop-blur-2xl text-[22px] hover:text-gray-300 peer-checked:text-gray-300 peer-checked:line-through cursor"
                >3. Lorem ipsum dolor sit amet
                </label>          
              </div>
              <p className="text-[#00000099] text-[14px] pl-[50px] w-[90%] pb-[50px]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

              <div class="border-b-2"></div>
            </div>
          </div>

    </div>
</div>
    )
}export default Directions;