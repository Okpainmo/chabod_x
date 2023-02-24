import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainAppLayout from '../components/portfolio/layouts/MainAppLayout';
import MobileNavbar from '../components/portfolio/layouts/MobileNavbar';
import Navbar from '../components/portfolio/layouts/Navbar';
import projectBanner from '../assets/images/bg.jpg';

function ProjectStory() {
  return (
    <>
      <Navbar />
      <MainAppLayout>
        <main className="min-h-screen pt-16 sm:pt-24 text-[14px] leading-[25px] px-3 sm:w-[80%] sm:mx-auto">
          <h1 className="project-name text-2xl sm:text-4xl poppins font-bold">Project name</h1>
          <div className="my-skills w-full flex justify-start pt-2 pb-4 md:pb-10 flex-wrap gap-x-3 md:w-[60%] md:mx-auto lg:mx-0">
            <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
              firebase
            </div>
            <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
              firebase
            </div>
            <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
              firebase
            </div>
            <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
              firebase
            </div>
            <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
              firebase
            </div>
            <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
              firebase
            </div>
            <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
              firebase
            </div>
            <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
              firebase
            </div>
            <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
              firebase
            </div>
            <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
              firebase
            </div>
          </div>
          <div className="story-group mt-4 sm:mt-10">
            <div className="project-banner-wrapper lg:w-[45%]">
              <Image
                className="w-full shadow-lg"
                src={projectBanner}
                width={150}
                // height={150}
                alt="seller-photo"
              />
            </div>
            <p className="project-intro mt-4 lg:w-[70%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum deserunt nesciunt
              consequatur sed? Eveniet, rerum possimus veritatis asperiores, maxime voluptatem
              dolores sit eaque omnis quidem non nesciunt corrupti doloremque sint harum culpa ad
              nostrum officiis aliquam tempore ab? Sint, et pariatur? Ipsam cum nulla cupiditate,
              odio in nisi? Perspiciatis eveniet et eligendi quia cumque rem in, sit cupiditate quam
              veniam iste debitis sequi deleniti est iure expedita perferendis, dignissimos dolor
              officia esse. Voluptatibus autem vero modi placeat sit adipisci enim, quis nam eum
              consequatur
            </p>
          </div>
          <section className="story-group aim-of-project my-4 sm:my-16">
            <h3 className="text-xl sm:text-3xl poppins font-bold">Goal/aim of the project</h3>
            <p className="mt-4 lg:w-[70%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum deserunt nesciunt
              consequatur sed? Eveniet, rerum possimus veritatis asperiores, maxime voluptatem
              dolores sit eaque omnis quidem non nesciunt corrupti doloremque sint harum culpa ad
              nostrum officiis aliquam tempore ab? Sint, et pariatur? Ipsam cum nulla cupiditate,
              odio in nisi? Perspiciatis eveniet et eligendi quia cumque rem in, sit cupiditate quam
              veniam iste debitis sequi deleniti est iure expedita perferendis, dignissimos dolor
              officia esse. Voluptatibus autem vero modi placeat sit adipisci enim, quis nam eum
              consequatur
            </p>
          </section>
          <section className="story-group roles my-4 sm:my-16 lg:w-[60%] lg:ml-auto">
            <h3 className="text-xl sm:text-3xl poppins font-bold">Roles</h3>
            <div className="mt-4">
              <p className="mb-3">On this project, I played the following roles</p>
              <ul className="flex gap-y-2 list-disc flex-col list-inside">
                <li>Front-end developer</li>
                <li>Back-end developer</li>
                <li>Blockchain developer</li>
                <li>
                  Design developer (I built this project without a single UI design. I drew UI
                  inspirations from other projects - thanks to the fact that I have a good eye for
                  design).
                </li>
              </ul>
            </div>
          </section>
          <section className="story-group tech-stack my-4 sm:my-16 lg:w-[70%]">
            <h3 className="text-xl sm:text-3xl poppins font-bold">Project tech stack</h3>
            <div className="mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum deserunt nesciunt
              consequatur sed? Eveniet, rerum possimus veritatis asperiores, maxime voluptatem
              dolores sit eaque omnis quidem non nesciunt corrupti doloremque sint harum culpa ad.
              <div className="my-skills w-full flex justify-center lg:justify-start pt-6 pb-10 flex-wrap gap-x-3 md:w-[60%] md:mx-auto lg:mx-0">
                <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
                  firebase
                </div>
                <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
                  firebase
                </div>
                <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
                  firebase
                </div>
                <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
                  firebase
                </div>
                <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
                  firebase
                </div>
                <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
                  firebase
                </div>
                <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
                  firebase
                </div>
                <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
                  firebase
                </div>
                <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
                  firebase
                </div>
                <div className="skill-tag bg--primary px-3 py-1 text--colors_white mt-4 text-[10px]">
                  firebase
                </div>
              </div>
            </div>
          </section>
          <section className="story-group screen-shots-array flex flex-col gap-y-8 my-4 sm:my-16">
            <div className="project-banner-wrapper lg:w-[45%]  lg:translate-x-[80%]">
              <Image
                className="w-full shadow-lg"
                src={projectBanner}
                width={150}
                // height={150}
                alt="seller-photo"
              />
            </div>
            <div className="project-banner-wrapper lg:w-[45%] mt-4">
              <Image
                className="w-full shadow-lg"
                src={projectBanner}
                width={150}
                // height={150}
                alt="seller-photo"
              />
            </div>
          </section>
          <section className="story-group development-thought-process mt-6 mb-4 sm:my-16">
            <h3 className="text-xl sm:text-3xl poppins font-bold">Development thought Process</h3>
            <div className="mt-4">
              <p className="mb-3">On this project, I played the following roles</p>
              <ul className="flex gap-y-2 list-disc flex-col list-inside">
                <li>Front-end developer</li>
                <li>Back-end developer</li>
                <li>Blockchain developer</li>
                <li>
                  Design developer (I built this project without a single UI design. I drew UI
                  inspirations from other projects).
                </li>
              </ul>
            </div>
          </section>
          <section className="story-group screen-shots-array flex flex-col gap-y-8 my-4 sm:my-16">
            <div className="project-banner-wrapper lg:w-[45%] lg:translate-x-[80%]">
              <Image
                className="w-full shadow-lg"
                src={projectBanner}
                width={150}
                // height={150}
                alt="seller-photo"
              />
            </div>
            <div className="project-banner-wrapper lg:w-[45%] mt-4">
              <Image
                className="w-full shadow-lg"
                src={projectBanner}
                width={150}
                // height={150}
                alt="seller-photo"
              />
            </div>
          </section>
          <section className="story-group lessons-learned border-b pb-10 mb-4 mt-6 sm:my-16">
            <h3 className="text-xl sm:text-3xl poppins font-bold">Lessons learned</h3>
            <p className="mt-4 lg:w-[70%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum deserunt nesciunt
              consequatur sed? Eveniet, rerum possimus veritatis asperiores, maxime voluptatem
              dolores sit eaque omnis quidem non nesciunt corrupti doloremque sint harum culpa ad
              nostrum officiis aliquam tempore ab? Sint, et pariatur? Ipsam cum nulla cupiditate,
              odio in nisi? Perspiciatis eveniet et eligendi quia cumque rem in, sit cupiditate quam
              veniam iste debitis sequi deleniti est iure expedita perferendis, dignissimos dolor
              officia esse. Voluptatibus autem vero modi placeat sit adipisci enim, quis nam eum
              consequatur
            </p>
          </section>
          <section className="story-group next-project pb-16 md:pb-24">
            <h3 className="mb-4 mt-6 text-xl sm:text-3xl poppins font-bold">Next Project</h3>
            <div className="project-banner-wrapper lg:w-[45%] mt-6">
              <Image
                className="w-full shadow-lg"
                src={projectBanner}
                width={150}
                // height={150}
                alt="seller-photo"
              />
            </div>
            <h3 className="project-name text-lg sm:text-xl mt-4 poppins font-bold">Project name</h3>
            <p className="project-intro mt-2 lg:w-[70%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum deserunt nesciunt
              consequatur sed? Eveniet.
            </p>
            <Link href="/project-story">
              <span className="underline font-bold poppins text--colors_primary">
                Read project story.
              </span>
            </Link>
          </section>
        </main>
      </MainAppLayout>
      <MobileNavbar />
    </>
  );
}

export default ProjectStory;
