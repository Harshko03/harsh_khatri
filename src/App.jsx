import Scrambled from "./component/Scramble";
import "./App.css";
import image from "../public/proff.png";

import RetroResume from "./component/Retro";

function App() {
  

  return (
    <div className="absolute top-0 z-[-2] min-h-[200vh] w-screen bg-neutral-950">
      <div className="flex flex-col justify-center mt-20 items-center text-white space-y-8 md:space-y-12 max-w-2xl mx-auto w-full px-6 text-xl">
        <div className="flex md:space-y-2 justify-center items-center">
          <img src={image} alt="No" className="w-32 sm:w-48 h-50 rounded-2xl mr-5" />
          <div>
            <div>
              Hey I’m{" "}
          <RetroResume/>
              , and I’m passionate about making software that solves real-world
              problems.
            </div>
            <br />
            <p>
              {" "}
              I recently completed my B.Tech in Computer Science from RGPV
              University{" "}
            </p>
          </div>
        </div>

        <section id="employable">
          <div className="relative">
            <div className="lg:sticky top-4">
              <div className="inline-block lg:absolute lg:top-[3px] left-0 lg:transform lg:-translate-x-full pr-8 mb-4 lg:mb-0">
                <h2 className="uppercase text-base lg:text-sm opacity-50">
                  I'M EMPLOYABLE
                </h2>
              </div>
            </div>

            <p>
              a curious mind currently blending tech, creativity, and caffeine
              as an E-commerce Executive at{" "}
              <a href="https://www.hammoq.com/" className="underline">
                <Scrambled text=" Hammoq Infosys" />
              </a>
              .
            </p>
            <br />

            <p>
              When I’m not optimizing digital workflows or decoding analytics,
              you’ll probably find me crafting something in JavaScript,
              tinkering with React, or breaking and fixing a side project built
              with PHP, Tailwind, and MySQL.
            </p>
            <br />
            <p>
              My roots are in the code, though. I previously interned as a Web
              Developer at{" "}
              <a href="https://cubixwebtech.com/" className="underline">
                <Scrambled text="Cubix Webtech Solution" />
              </a>
            </p>
            <br />
            <p>
              I love using AI tools to turn wild ideas into working prototypes,
              and I’m always chasing that sweet spot where design, logic, and
              curiosity overlap.
            </p>
            <br />
            <p>
              My code might not always be perfect, but my console logs are
              honest, my commits are bold, and my projects are fun — just the
              way I like them.
            </p>
          </div>
        </section>
        <section id="projects" className="w-full">
          <div className="relative">
            <div className="lg:sticky top-4">
              <div className="inline-block lg:absolute lg:top-[3px] left-0 lg:transform lg:-translate-x-full pr-8 mb-4 lg:mb-0">
                <h2 className="uppercase text-base lg:text-sm opacity-50">
                  Projects
                </h2>
              </div>
            </div>
            <div className="space-y-8">
              <p>my projects are fun — just the way I like them.</p>

              <div className="flex flex-col relative">
                <table className="border border-b-8  border-white table-auto w-full bg-neutral-950">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="font-normal text-left p-2 w-3/4">
                        Projects
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr >
                      <td className="border-r max-w-0 p-2 font-normal">
                        <a href="https://pass-op-ghtd.vercel.app/" target="_blank">
                          Password Manager
                        </a>
                      </td>
                    </tr>
                    <tr >
                      <td className="border-r max-w-0 p-2 font-normal">
                        <a href="">POS Restaurant Management System</a>
                      </td>
                    </tr>
                    <tr >
                      <td className="border-r max-w-0 p-2 font-normal">
                        <a href="">Restaurant Management</a>
                      </td>
                    </tr>
                    <tr >
                      <td className="border-r max-w-0 p-2 font-normal">
                        <a href="https://old1-nine.vercel.app/" target="_blank">Old 1's</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="h-8 block relative -top-px invert z-[-1] bg-[url('../public/tbottom.svg')] bg-repeat-x bg-auto"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full">
          <div className="relative">
            <div className="lg:sticky top-4">
              <div className="inline-block lg:absolute lg:top-[3px] left-0 lg:transform lg:-translate-x-full pr-8 mb-4 lg:mb-0">
                <h2 className="uppercase text-base lg:text-sm opacity-50 text-left lg:text-right">
                  Contact
                </h2>
              </div>
            </div>
            <div className="space-y-8">
              <ul className="space-y-3">
                <li className="flex flex-col">
                  <a href="https://github.com/Harshko03">GitHub</a>
                </li>
                <li className="flex flex-col">
                  <a href="https://www.linkedin.com/in/harsh-khatri-999b25250">LinkedIn</a>
                </li>
                <li className="flex flex-col">
                  <a href="https://www.instagram.com/harsh_.k3/">Instagram</a>
                </li>
                <li className="flex flex-col">
                  <a href="mailto:hkharshkhatri123@gmail.com">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
