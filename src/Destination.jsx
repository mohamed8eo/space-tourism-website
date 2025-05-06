import { useEffect, useState } from "react";
import Header from "./components/Header";
import UseBodyBackground from "./UseBodyBackground";
import { motion, AnimatePresence } from "framer-motion";

const Destination = () => {
  UseBodyBackground();
  const [data, setdata] = useState(null);
  const [selected, setselected] = useState({
    name: "",
    images: { webp: "" },
    description: "",
    distance: "",
    travel: "",
  });

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`) // Updated fetch path
      .then((response) => response.json())
      .then((json) => {
        setdata(json);
        setselected(json.destinations[0]); // Set the first destination as the default
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <>
      <Header />
      <div className="lg:w-[100%] lg:h-[888px] sm:w-[768px] sm:h-[928px] w-[375px] h-[792px] lg:pt-12 lg:pb-12 flex justify-center content-center sm:p-10 p-6">
        <div className="lg:w-[1110px] lg:h-[792xp] lg:justify-center gap-6 inline-flex flex-col sm:w-[688px] sm:h-[838px] w-[327px] h-[744px] ">
          <div className="lg:w-[500px] lg:h-[34px] gap-6 flex sm:w-[688px] sm:h-[24px] h-[19px] w-[327px] ">
            <span className="md:text-[28px] text-[16px] tracking-[0.15em] md:tracking-[4.7px] font-bold opacity-25 text-white ">
              01
            </span>
            <span className="md:text-[28px] text-[16px] tracking-[0.15em] md:tracking-[4px] text-white">
              PICK YOUR DESTINATION
            </span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              className="flex gap-8 justify-between items-center lg:w-[1145px] lg:h-[734px] sm:w-[688px] sm:h-[800px] h-[491px] flex-col lg:flex-row"
              key={selected.name} // Re-renders on destination change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="basis-[50%] flex justify-center items-center">
                {selected && (
                  <img
                    className="lg:w-[480px] lg:h-[480px] sm:w-[300px] sm:h-[300px] w-[150px] h-[150px]"
                    src={`${import.meta.env.BASE_URL}${selected.images.webp}`} // Updated image path
                    alt={selected.name}
                  />
                )}
              </div>
              <div className="text-white justify-center content-center basis-[50%] grid items-center lg:h[734px] lg:w[539px] sm:h[384px] sm:w[688px]">
                <div className="lg:w-[445px] lg:h-auto lg:gap-10 sm:gap-6 sm:w-[514px] sm:h-[361px] grid w-[327px] h-[466px] gap-6">
                  {data && (
                    <>
                      <ul className="flex gap-[32px] text-[16px] tracking-[2px] cursor-pointer h-[32px] border-style relative span-text sm:justify-center lg:justify-start ">
                        {data.destinations.map((destination, index) => (
                          <li
                            key={index}
                            className={`${
                              selected?.name === destination.name
                                ? "active-li"
                                : ""
                            } hover:opacity-50`}
                          >
                            <a
                              onClick={() => {
                                setselected(destination);
                              }}
                            >
                              {destination.name.toUpperCase()}
                            </a>
                          </li>
                        ))}
                      </ul>
                      <div className="lg:w-[445px] gap-4 grid">
                        <h1 className="lg:text-[96px] font-wight flex-col-reverse inline-flex lg:w-[320px] lg:h-[110px] sm:w-[514px] sm:h-[92px] sm:text-[80px] items-center lg:items-start justify-center lg:justify-start text-[50px] ">
                          {selected?.name.toUpperCase()}
                        </h1>
                        <p className="lg:h-[128px] lg:text-[18px] lg:text-start leading-[180%] text-center sm:text-[16px] text-[15px] color-p">
                          {selected?.description}
                        </p>
                      </div>
                    </>
                  )}
                  <span className="line-style"></span>
                  <div className="flex lg:gap-4 sm:gap-6 text-center lg:w-[445px] sm:w-[514px] sm:h-[61px] relative w-[327px] h-[146px] sm:text-start flex-col sm:flex-row">
                    <div className="basis-[50%] gap-3 grid">
                      <p className="text-[14px] tracking-[2px] color-p span-text">
                        AVG. DISTANCE
                      </p>
                      <h1 className="text-[28px] text-white h1-fontfamily">
                        {selected.distance}
                      </h1>
                    </div>
                    <div className="basis-[50%] gap-3 grid">
                      <p className="text-[14px] tracking-[2px] color-p span-text">
                        Est.travel time
                      </p>
                      <h1 className="text-[28px] text-white h1-fontfamily">
                        {selected.travel}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Destination;
