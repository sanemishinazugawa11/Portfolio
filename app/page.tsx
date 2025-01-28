"use client"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  useGSAP(() => {

    gsap.to('.one', {
      scrollTrigger: {
        trigger: '.two',
        start: 'top 45%',
        end: 'bottom bottom',
        scrub: 5
      },
      scale: 0.95
    })
    setInterval(() => {
      gsap.to('.one div', {
        x: () => Math.random() * 800 - 400,  // Random x movement between -300 and 300
        y: () => Math.random() * 900 - 300,   // Random y movement between -200 and 200
        scale: 1.5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

    }, 2000);



  })
  return (

    <main className="overflow-hidden bg-black">
      <section className="one w-screen bg-sky-400 h-[60vh] sm:h-[50vh] rounded-xl overflow-hidden flex">
        <div className="second bg-gradient-to-r from-[#FFEB3A] to-[#4DEF8E] w-1/2 sm:w-[50%] h-full blur-[70px] sm:blur-[120px] overflow-hidden"></div>
        <div className="first bg-gradient-to-r from-[#4649fe] to-[#0017E4] w-1/3 sm:w-[50%] h-full  blur-[70px] sm:blur-[120px] overflow-hidden"></div>
        <div className="third bg-gradient-to-r from-[#ff47ea] to-[#fd18c4] w-1/2 sm:w-[50%] h-full  blur-[70px] sm:blur-[120px] overflow-hidden"></div>
        <section className="absolute  top-0  w-full h-[60vh] sm:h-[60vh] p-5 bg-neutral-950/20 rounded-xl ">
          <section className="mt-28 leading-5">
            <h1 className="font-manrope font-normal text-3xl sm:text-4xl mt-10 ml-10 text-white">Hello,</h1>
            <h1 className="font-manrope font-normal text-4xl sm:text-5xl ml-10 text-white">I'm Bhuvan.</h1>
            <h3 className="font-manrope font-medium  text-sm sm:text-xl ml-10 mt-3 text-white">A 20 year old Computer Science student from Banglore, India.
              <br />
              I develop fullstack web applications and my interest lies in creating creative user interfaces and experiences.
            </h3>
          </section>
          <h2 className="absolute top-[90%] sm:top-[75%] left-[50%] font-manrope font-light text-slate-300">scroll</h2>
        </section>

      </section>
      <section className="two w-screen h-[50vh]  sm:h-[60vh]  overflow-hidden flex justify-center">
        <div className="w[70%] h-[50%] sm:h-[80%] flex flex-col justify-evenly mt-20 ">
          <h1 className="text-white text-sm sm:text-xl font-manrope text-start ml-6 mr-4  md:ml-10"> Started out by making graphic posters for graphic design club in our college and also
            made some youtube thumbnails for some of my friends in college
            and eventually web development</h1>
          <h1 className="text-white text-sm sm:text-xl font-manrope text-start ml-6 mr-4 sm:-mt-7 md:ml-10">I am currently looking for internship and freelance clients to enhance my skills and knowledge</h1>
          <div className="ml-6 sm:ml-10 mt-4 sm:mt-8 items-center border-[0.8px] border-x-slate-600 border-y-slate-500 w-40 gap-2 justify-center px-1 rounded-lg py-2 flex">
            <a className="font-manrope text-md sm:text-lg  text-white" target="_blank" href="https://github.com/sanemishinazugawa11?tab=repositories">My projects</a>
           

          </div>
          <h2 className="font-manrope text-lg sm:text-2xl capitalize ml-6 sm:ml-10 mt-6 sm:mt-10 text-slate-100">lets connect.</h2>

          <div className="w-full h-20 flex  items-center mt-5 sm:-mt-7 lg:-mt-5 ml-6 sm:ml-10 lg:ml-10 gap-5 lg:gap-7">
            <a href="https://github.com/sanemishinazugawa11" target="_blank">
              <img className=" w-8 lg:w-10 h-8 lg:h-10" src="https://imgs.search.brave.com/9csQs7n45LOxCX5IKDCmwlJH7UaNxfcbjhQ8eru1tE4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI0L0dpdGh1Yl9s/b2dvX3N2Zy5zdmc" alt="" />
            </a>
            <a href="" target="_blank">
              <img className=" w-8 lg:w-10 h-8 lg:h-10" src="https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n" alt="" />

            </a>
            <a href="mailto:ksbhuvi2004@gmail.com" target="_blank">
              <img className="w-8 lg:w-10 h-6 lg:h-8" src="https://imgs.search.brave.com/jFmFDrCTPMA8z45brWdMcu02rHvnwxWsV5_KaxLCu0A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYWls/bWV0ZW9yLmNvbS9s/b2dvcy9hc3NldHMv/UE5HL0dtYWlsX0xv/Z29fMTI4cHgucG5n" alt="" />

            </a>

          </div>


        </div>
      </section>
      <section className="w-screen bg-sky-400 scale-95 h-[15vh] rounded-xl overflow-hidden flex flex-row-reverse">
        <div className="second bg-gradient-to-r from-[#FFEB3A] to-[#4DEF8E] w-[50%] h-full blur-[120px] overflow-hidden"></div>
        <div className="first bg-gradient-to-r from-[#4649fe] to-[#0017E4] w-[50%] h-full  blur-[120px] overflow-hidden"></div>
        <div className="third bg-gradient-to-r from-[#ff47ea] to-[#fd18c4] w-[50%] h-full  blur-[120px] overflow-hidden"></div>
        <h1 className="text-5xl  xl:text-[16vh] text-center font-manrope font-extrabold absolute left-0  xl:ml-10 mt-24 xl:mt-5">Made by Bhuvan.</h1>

      </section>
    </main>
  );
}
