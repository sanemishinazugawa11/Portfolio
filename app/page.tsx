"use client"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  useGSAP(() => {

    gsap.to('.one', {
      scrollTrigger: {
        trigger: '.two',
        start: 'top 50%',
        markers:true,
        end: 'bottom bottom',
        scrub: 5
      },
      scale: 0.95
    })
    gsap.from('.three',{
      scrollTrigger:{
        trigger:'.two',
        start: 'top 50%',
        end: 'bottom bottom',
        scrub: 5
      },
      y:50
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
            <h1 className="font-manrope font-normal text-3xl sm:text-4xl mt-10  sm:ml-10 text-white">Hello,</h1>
            <h1 className="font-manrope font-normal text-4xl sm:text-5xl sm:ml-10 text-white">I am Bhuvan.</h1>
            <h3 className="font-manrope font-medium  text-sm sm:text-xl sm:ml-10 mt-3 text-white">A 20 year old Computer Science student from Banglore, India.
              <br />
              I develop fullstack web applications and my interest lies in creating creative user interfaces and experiences.
            </h3>
          </section>
          <h2 className="absolute top-[90%] sm:top-[75%] left-[45%] sm:left-[50%] font-manrope font-light text-slate-300">scroll</h2>
        </section>

      </section>
      <section className="two w-screen h-[30vh] scale-95  px-5 py-2 overflow-hidden flex flex-col items-start justify-end ">

        <div className="">
          <h1 className="font-manrope text-sm sm:text-xl text-white text-start ">Started out by making graphic posters for graphic design club in our college also made some youtube thumbnails for some of my friends in college and eventually learned web devalopment.</h1>
          <h1 className="font-manrope text-sm sm:text-xl text-white text-start ">I am currently looking for intership and freelance clients to enhance my skills and knowledge.</h1>
        </div>
        <div className=" w-full flex flex-col justify-center items-center mt-3 sm:mt-8">
          <h1 className="font-manrope text-xl sm:text-2xl  underline underline-offset-4 text-white">Lets connect</h1>
          <div className="w-full h-auto flex justify-center mt-3 gap-5 items-center ">
            <a href="https://github.com/sanemishinazugawa11" target="_blank">
              <Image width={30} height={30} className=" w-8 lg:w-10 h-8 lg:h-10" alt="" src='https://imgs.search.brave.com/9csQs7n45LOxCX5IKDCmwlJH7UaNxfcbjhQ8eru1tE4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI0L0dpdGh1Yl9s/b2dvX3N2Zy5zdmc' />
            </a>
            <a href="" target="_blank">
              <Image width={30} height={30} className=" w-8 lg:w-10 h-8 lg:h-10" alt="" src='https://imgs.search.brave.com/GpB5WQlesvec2MXDXDV3SmKb0pzSJzyH667WAzbxGcs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NhL0xpbmtlZElu/X2xvZ29faW5pdGlh/bHMucG5n' />

            </a>
            <a href="mailto:ksbhuvi2004@gmail.com" target="_blank">
              <Image width={40} height={40} alt="" src='https://imgs.search.brave.com/jFmFDrCTPMA8z45brWdMcu02rHvnwxWsV5_KaxLCu0A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYWls/bWV0ZW9yLmNvbS9s/b2dvcy9hc3NldHMv/UE5HL0dtYWlsX0xv/Z29fMTI4cHgucG5n' />
            </a>

          </div>
        </div>

      </section>
      <section className="w-screen three scale-95 h-[25vh] bg-black/10 sm:h-[30vh] rounded-xl overflow-hidden flex flex-row-reverse">
        <div className="second bg-gradient-to-r from-[#FFEB3A] to-[#4DEF8E] w-[50%] h-full blur-[120px] overflow-hidden"></div>
        <div className="first bg-gradient-to-r from-[#4649fe] to-[#0017E4] w-[50%] h-full  blur-[120px] overflow-hidden"></div>
        <div className="third bg-gradient-to-r from-[#ff47ea] to-[#fd18c4] w-[50%] h-full  blur-[120px] overflow-hidden"></div>
        <h1 className= "font-manrope text-3xl sm:text-5xl text-white font-extrabold h-full underline p-2 top-[70%] absolute z-50  w-full">Made by Bhuvan.</h1>

      </section>
    </main>
  );
}
