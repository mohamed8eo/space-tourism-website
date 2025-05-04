import { useEffect, useState } from "react";
import Header from "./components/Header";
import UseBodyBackground from "./UseBodyBackground";

const Technology = () => {
  UseBodyBackground();

  const [data, setdata] = useState({});
  const [selected, setselected] = useState({
    name: "",
    description: "",
    images: { landscape: "", portrait: "" },
  });
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    // Fetch data from JSON
    fetch('/data.json')
      .then((response) => response.json())
      .then((json) => {
        setdata(json);
        setselected(json.technology[0]); // Set the first technology as the default
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  useEffect(() => {
    // Detect screen size changes
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleMediaChange = (e) => {
      setIsPortrait(e.matches); // Update state based on screen width
    };

    // Add listener
    mediaQuery.addEventListener("change", handleMediaChange);

    // Set initial state
    setIsPortrait(mediaQuery.matches);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <>
      <Header />
      <div className="p-6 w-[375px] h-[792px] md:w-[768px] md:h-[928px] md:p-10 lg:pt-12 lg:pb-12 lg:w-[1406px] lg:h-[888px]">
        <div className="flex flex-col w-[327px] h-[720px] gap-6 md:w-[688px] md:h-[848px] lg:w-[1275px] lg:h-[792px] ">
          <div className="gap-6 flex justify-center w-[327px] h-[19px] md:justify-start md:w-[688px] md:h-[24px] lg:w-[300px] lg:h-[34px] ">
            <span className="h-[19px] w-[17px] opacity-25 text-white text-[16px] font-bold span-text tracking-[.15em]
              md:text-[20px] md:w-[21px] md:h-[24px] lg:w-[30px] lg:h-[34px] lg:text-[24px] ">03</span>
            <span className="h-[19px] w-[140px] text-white span-text tracking-[.15em] text-[16px] 
              md:text-[20px] md:w-[174px] md:h-[24px] lg:w-[245px] lg:h-[34px] lg:text-[28px] ">SPACE LAUNCH 101</span>
          </div>
          <div className="w-[327px] h-[677px] gap-8 flex flex-col md:w-[688px] md:h-[800px] lg:w-[1275px] lg:h-[734px] lg:flex-row-reverse lg:items-center lg:ml-[93px]">
            <div className="h-[322px] w-[327px] pt-16 md:w-[688px] md:h-[421px] lg:w-[608px] lg:h-[734px] relative">
              <img
                src={isPortrait ? selected.images.portrait : selected.images.landscape} // Dynamically switch image
                alt={`${selected.name} image`}
                className="h-[258px] w-[768px] absolute left-0 md:h-[357px] md:w-[800px] lg:h-[600px] lg:w-[608px]"
              />
            </div>
            <div className="h-[323px] w-[327px] gap-10 flex flex-col md:w-[688px] md:h-[347px] md:items-center lg:gap-16 lg:w-[635px] lg:h-[304px] lg:flex-row ">
              <div className="gap-4 flex justify-center">
                <ul className="flex gap-2 justify-center w-[327px] h-[40px] md:w-[512px] md:h-[56px] lg:w-[80px] lg:h-[304px] lg:gap-8 lg:flex-col">
                  {data.technology && data.technology.map((technologys, index) => (
                    <li
                      key={index}
                      className={`text-white flex justify-center items-center w-[40px] h-[40px] rounded-full
                        text-[18px] border-[1px] border-solid border-[#ffffff40] h1-fontfamily cursor-pointer
                        ${selected.name === technologys.name ? "active_number" : "hover:border-white"} lg:w-[80px] lg:h-[80px]`}
                      onClick={() => setselected(technologys)}
                    >
                      {index + 1}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 justify-center w-[327px] h-[243px] flex-col items-center md:w[512px] md:h-[251px] lg:gap-6 lg:w-[491px] lg:h-[301px] ">
                <div className="flex gap-4 w-[327px] h-[65px] flex-col md:w[512px] md:h-[90px] md:items-center lg:w-[491px] lg:h-[117px] ">
                  <div className="w-[327px] h-[21px] opacity-[50.42%] text-[18px] h1-fontfamily text-white 
                    flex justify-center md:w[512px] md:h-[28px] md:text-[24px] lg:text-[32px] lg:w-[491px] lg:h-[37px] lg:justify-start">
                    THE TERMINOLOGY…
                  </div>
                  <div className="text-[24px] h1-fontfamily text-white flex justify-center w-[327px] 
                    h-[28px] uppercase md:w-[512px] md:h-[46px] md:text-[40px]  lg:text-[56px] lg:w-[491px] lg:h-[64px] lg:justify-start">
                    {selected.name}
                  </div>
                </div>
                <div className="h-[162px] text-center w-[359px] text-[16px] text-[#D0D6F9] md:w-[512px] md:h-[145px] lg:text-[18px] lg:w-[491px] lg:h-[160px] lg:text-left">
                  <p className="h-[162px] leading-[180%] md:h-[145px] lg:h-[160px] lg:w-[504px]">{selected.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;