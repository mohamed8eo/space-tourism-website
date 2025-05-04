import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import UseBodyBackground from "./UseBodyBackground";
import { motion, AnimatePresence } from 'framer-motion';
const Crew = () => {
  UseBodyBackground();

  const [data, setdata] = useState(null);
  const [selected, setselected] = useState({
    role: "",
    name: "",
    bio: "",
    images: { png: "" },
  });

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((json) => {
        console.log("Fetched data:", json);
        setdata(json);
        setselected(json.crew[0]); // Set the first crew member as the default
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <>
      <Header />
      <div className="w-[375px] h-[792px] p-6 md:w-[768px] md:h-[928px] md:p-10 md:overflow-hidden lg:w-[1408px] lg:h-[888px] lg:p-0 lg:pt-12 lg:pb-12 lg:flex lg:justify-center">
        <div className="w-[327px] h-[744px] gap-6 flex flex-col justify-center items-center md:w-[688px] md:h-[848px] lg:w-[1110px] lg:h-[792px] ">
          <div className="w-[327px] h-[19px] gap-6 flex items-center justify-center md:w-[688px] md:h-[24px] md:justify-start lg:w-[100%] lg:h-[34px] lg:justify-start ">
            <span className="block text-[16px] font-bold tracking-[0.15em] text-white opacity-25 w-[19px] h-[17px] span-text md:text-[20px] md:w-[21px] md:h-[24px]  lg:text-[28px] lg:w-[30px] lg:h-[34px] ">02</span>
            <span className="block w-[129px] h-[19px] text-white tracking-[0.15em] text-[16px] span-text md:text-[20px] md:w-[161px] md:h-[24px]  lg:text-[28px]  lg:w-[225px] lg:h-[34px]">MEET YOUR CREW</span>
          </div>
          <motion.div className="w-[327px] h-[701px] gap-8 flex flex-col md:w-[688px] md:h-[800px] lg:w-[1110px] lg:h-[734px] lg:flex-row  "
                        key={selected.name} 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}>
            <div className="gap-6 flex flex-col pt-[40px] h-[319px] md:h-[400px] lg:w-[539px] lg:h-[734px] lg:gap-10 ">
              <div className="gap-6 flex justify-center items-center flex-col pt-0 md:pt-10 lg:h-[631px]">
                <div className={`h-[57px] gap-2 flex flex-col md:w-[512px] md:h-[90px] md:gap-4 lg:w-[539px] 
                  ${selected.name === "Mark Shuttleworth" ? `lg:h-[203px]` : `lg:h-[117px]`}
                  `}>
                  <span className="opacity-50 text-white text-[18px] h1-fontfamily h-[21px] text-center uppercase md:text-[24px] md:h-[28px] lg:text-left lg:text-[32px]  lg:h-[37px]">{selected.role}</span>
                  <span className={`h-[28px] text-[24px] h1-fontfamily text-center text-white uppercase md:text-[40px] md:h-[46px] lg:text-left lg:text-[56px] lg:flex lg:justify-start lg:items-center  
                    ${selected.name === "Mark Shuttleworth" ? `lg:h-[117px]` : `lg:h-[64px]`}
                    `}>{selected.name}</span>
                </div>
                <div className="h-[164px] text-[#D0D6F9] text-[15px] lg:text-[18px] span-text leading-[180%] md:h-[117px] lg:h-[96px] lg:w-[539px] ">
                  <p className="text-center w-[273px]  md:w-[400px] lg:w-[435px] lg:text-left">{selected.bio}</p>
                </div>
              </div>
              <div className="h-[10px] lg:w-[539px] lg:h-[63px]">
                {data && (
                  <ul className="flex justify-center items-center gap-4 h-[10px] lg:justify-start ">
                    {data.crew.map((crews, index) => (
                      <li
                        key={index}
                        className={`scroll_ball ${selected.name === crews.name ? "active_ball" : `hover:opacity-50`}`}
                        onClick={() => setselected(crews)}
                      ></li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="w-[327px] h-[350px] justify-center items-center flex relative  md:w-[688px] md:h-[459px]  lg:w-[539px] lg:h-[734px]lg:crew-image-container">
              {selected.images && (
                <img
                  src={selected.images.png}
                  alt={`${selected.name} image`}
                  className="w-[271.27px] h-[340px]  md:w-[446.74px] md:h-[560px] md:absolute md:top-0  lg:w-[539.35px] lg:h-[676px] "
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Crew;




