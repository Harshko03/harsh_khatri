
import Scrambled from "./component/Scramble";
import "./App.css";
import image from "./assets/oki.gif";

function App() {
  return (
    <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="flex flex-col justify-center mt-20 items-center text-white space-y-8 md:space-y-12 max-w-2xl mx-auto w-full px-6 text-xl">
        <div className="flex justify-center items-center">
          <img src={image} alt="No" className="w-48 h-50 rounded-2xl mr-5" />
          <div>
            <p>
              Hey I’m{" "}
              <span className="bg-gray-700">
                <Scrambled text="Harsh Khatri" />
              </span>
              , and I’m passionate about making software that solves real-world
              problems.
            </p>
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
                <table className="border border-b-8 border-b-gray-950 dark:border-b-white border-gray-950 dark:border-white table-auto w-full bg-white dark:bg-neutral-950">
                  <thead>
                    <tr className="border-b border-gray-950 dark:border-gray-300">
                      <th className="font-normal text-left p-2 w-3/4">
                        Projects
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-gray-950 dark:border-gray-300">
                      <td className="border-r border-gray-950 dark:border-gray-300 max-w-0 p-2 font-normal">
                        <a href="" className="">
                          Password Manager
                        </a>
                      </td>
                    </tr>
                    <tr className="border-gray-950 dark:border-gray-300">
                      <td className="border-r border-gray-950 dark:border-gray-300 max-w-0 p-2 font-normal">
                        POS Restaurant Management System
                      </td>
                    </tr>
                    <tr className="border-gray-950 dark:border-gray-300">
                      <td className="border-r border-gray-950 dark:border-gray-300 max-w-0 p-2 font-normal">
                        Restaurant Management
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="h-8 block relative -top-px dark:invert z-[-1] bg-[url('./assets/tbottom.svg')] bg-repeat-x bg-auto"></div>
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
                <li className="flex flex-col">GitHub</li>
                <li className="flex flex-col">LinkedIn</li>
                <li className="flex flex-col">Instagram</li>
                <li className="flex flex-col">Email</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
