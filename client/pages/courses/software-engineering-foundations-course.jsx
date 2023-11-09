import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import MainAppLayout from '../../components/portfolio/layouts/MainAppLayout';
import MobileNavbar from '../../components/portfolio/layouts/MobileNavbar';
import Navbar from '../../components/portfolio/layouts/Navbar';
import courseFlier from '../../assets/images/software-engineering-foundations-course-roadmap-flier-global-whatsapp.png';

function CourseParent() {
  return (
    <>
      <Head>
        <title>The Software Engineering Foundations Course(Front-end web development).</title>
      </Head>
      <Navbar />
      <MainAppLayout>
        <main className="min-h-screen pt-12 sm:pt-20 mb-20 text-[12px] sm:text-[14px]">
          <div className="w-full">
            <Image className="mx-auto" alt="mentorship flier" src={courseFlier} width="100%" />
          </div>
          <section className="px-3 w-full sm:mt-20 sm:px-12 md:px-0 md:w-[70%] md:mx-auto lg:w-[60%] xl:w-[50%]">
            <h1 className="capitalize mt-6 mb-4 underline poppins font-bold text-2xl sm:text-3xl">
              Software Engineering Foundations Course.
            </h1>
            <p className="text-16px font-bold montserrat mb-4">
              The ultimate course to help you begin you software engineering career as a web
              developer - a course built for absolute beginners.
            </p>
            <div className="pt-4">
              <h3 className="poppins text-xl sm:text-2xl my-3 font-bold">1. About.</h3>
              <div>
                After creating an awesome amount of free content on{' '}
                <a
                  href="https://www.youtube.com/channel/UC0CKKi10MJUAKWKJ8nZe9Kw"
                  className="font-bold underline text-purple-800"
                >
                  my Youtube channel
                </a>{' '}
                , I decided to put much quality and effort into creating this course for new
                entrants to the world of software engineering.
                <br />
                <br />
                The course is a course built to make (software engineering) beginners into
                world-class market-ready junior software engineers. The course's core focus is
                foundational front-end web development, but it's built with a mission to give course
                learners a great foundation as software engineers(beyond just front-end web
                development). The course release date is 10th December 2023, but it's{' '}
                <a href="https://selar.co/6f9q55" className="font-bold underline text-purple-800">
                  currently open for pre-order.
                </a>{' '}
                <br /> <br />
                The course is a well structured course to be completely handled by me(Andrew James
                Okpainmo).
                <br />
                <br />
                <p className="font-bold">
                  This course is my first premium video-content course. The course when released
                  will be a <span className="underline poppins">15 - 25 hour</span> video content to
                  be sold on Udemy and other course selling platforms.
                </p>
                <br />
                <span className="font-bold poppins">
                  N.B: The course is currently up for pre-order at only $5(Five US Dollars). But
                  will cost $15(Fifteen US Dollars) after pre-order sales are closed.
                </span>
                <br />
                <br />
                <span className="font-bold underline poppins">
                  Please take note that I'm giving out only 200 sales for pre-order.
                  <br />
                  <br />
                  Believe me, this is some marketing trick. Once pre-order sales hit 200, It'll be
                  closed and users can only purchase after the final course release on December 10th
                  at $15(Except if you're lucky to get a discount).
                </span>
                <br />
                <br />
                Hurry and pre-order now.
                <br />
                <br />
                Cheers!!!
              </div>
            </div>
            <div className="pt-4 hidden">
              <h3 className="poppins text-xl sm:text-2xl my-3 font-bold">
                2. Course Requirements.
              </h3>
              <span className="font-bold">
                BASICALLY a laptop, good internet connection (for online participants), and A WILL
                THAT CANNOT BE BROKEN.
              </span>
              <br /> <br />
              <p>
                <span className="font-bold poppins">A.</span>The course is ideally for web
                development beginners who already have a foundational understanding of basic web
                development tools such as (HTML, CSS and Javascript, and maybe even ReactJs) – the
                more the better.
              </p>
              <br /> <br />
              <p className="font-bold pb-6">
                However, Interested participants who are absolute newbies, are also allowed to
                enroll – as long as they will be willing to work extra hard for the first 1 - 2
                month(s).
              </p>
              <p className="pb-6">
                This does not in any way entail that the rest of the course will be light or
                non-standard, It simply means that everyone should/would be working at the same pace
                for the rest of the course.
              </p>
              <p className="font-bold pb-6">
                Please take note that software development is HARD, but not beyond the power of a
                passionate and strongly dedicated mind. Be hence pre-informed that this course is
                going to demand a lot of dedication and hard work.
              </p>
              <p>
                <span className="font-bold poppins">B.</span>The course will demand that all
                participant have very good well functional laptops. And also, online participants
                must have very strong internet access.
              </p>
            </div>
            <div className="pt-4 hidden">
              <h3 className="poppins text-xl sm:text-2xl my-3 font-bold">3. Course Duration.</h3>

              <p>
                The course will last for 4 months (from May 15th and ends in September). The other
                benefits/perks follows immediately – see extra course benefits below.
              </p>
            </div>
            <div className="pt-4 hidden">
              <h3 className="poppins text-xl sm:text-2xl my-3 font-bold">4. Main course content</h3>
              <ul className="flex flex-col gap-2">
                <h3 className="montserrat font-bold my-2">Basics of front-end web development.</h3>
                <li>a. HTML.</li>
                <li>b. CSS.</li>
                <li>c. Javascript.</li>
              </ul>
              <ul className="mt-6 flex flex-col gap-2">
                <h3 className="montserrat font-bold my-2">Modern front-end web development.</h3>
                <li>a. ReactJs.</li>
                <li>b. NextJs.</li>
                <li>c. TailwindCSS.</li>
                <li>d. Google Firebase.</li>
                <li>Any other relevant libraries/frameworks.</li>
              </ul>
              <ul className="mt-6 flex flex-col gap-2">
                <h3 className="montserrat font-bold my-2">Back-end web development.</h3>
                <li>a. NodeJs.</li>
                <li>b. ExpressJs.</li>
                <li>c. MongoDB.</li>
                <li>d. Web Sockets.</li>
                <li>e. AWS – S3 + any other relevant AWS service.</li>
                <li>Any other relevant libraries/frameworks.</li>
              </ul>
              <ul className="mt-6 flex flex-col gap-2">
                <h3 className="montserrat font-bold my-2">Block-chain Development.</h3>
                <li>a. Solidity fundamentals</li>
                <li>b. Remix IDE</li>
                <li>c. EthersJs.</li>
                <li>d. Hardhat.</li>
                <li>e. Ethereum and the Polygon (L2) blockchain.</li>
                <li>Any other relevant libraries/frameworks.</li>
              </ul>
              <p className="mt-6">
                <span className="font-bold poppins">Note:</span> The web development and blockchain
                development worlds are two very broad fields. This course is specially streamlined
                to mentor on only relevant aspects that will enable participants to qualify as
                complete world-class professionals by the end of the course.
              </p>
            </div>
            <div className="pt-4 hidden">
              <h3 className="poppins text-xl sm:text-2xl my-3 font-bold">
                5. Extra Perks/Course Benefits.
              </h3>
              <p className="my-4">1. A certificate of course completion.</p>
              <p className="my-4">2. Free mentor-access to me for 6 months after the course.</p>
              <p className="my-4">
                3. A Two months – stipend-only internship for all participants (25,000 Naira monthly
                stipend for Nigeria-residing participants, and $100 monthly for stipend
                international participants).
                <br /> <br />
                <span className="font-bold">NB:</span> The financial benefits might increase. But
                these are the basic ones that every participant will be entitled to.
              </p>
              <p className="my-4">
                4. The opportunity to land a high-paying job/internship as fast as - even before the
                course ends – thanks to referrals/recommendations from me.
                <br /> <br />
                <span className="font-bold">NB:</span> This is not a guaranteed benefit, as it fully
                depends on participants' commitment and success.
              </p>
              <p className="my-4">
                5. Learn (software engineering) technical writing – and start earning as a technical
                writer even before the end of the course for no extra cost.
                <br /> <br />
                <span className="font-bold">NB:</span> The earning part of this perk is also not a
                guaranteed benefit, as it also fully depends on participants' commitment and
                success.
              </p>
              <p className="my-4" id="course-fees-section">
                6. Other awesome benefits <span className="uppercase">might</span> still come along.
              </p>
            </div>
            <div className="pt-4 hidden">
              <h3 className="poppins text-xl sm:text-2xl my-3 font-bold">6. Course fee.</h3>
              <h5 className="poppins text-xl sm:text-lg my-3 font-bold">A. Payment plan A.</h5>
              <p className="my-4">
                I slashed the original course fee by over 50%. Now you can get into the course for
                only 25 thousand Naira (for Nigerian residents), and $200 for (Non-Nigerian
                residents) – TO BE PAID ONCE.
              </p>
              <p className="my-4">
                The slash in course price comes with some caveats/terms to be carefully noted –
                please take note of them before going with this option. The original price of the
                course(N70K | $500) still stands – for only the 10 first people who can afford it –
                SLOTS ARE ALREADY BEING TAKEN.
                <br />
                For the original/full price(N70K | $500), you’ll get all the course benefits as
                listed above.
              </p>
              <p>
                But at this discounted price(N25K | $200), you’ll get only 3 of the above listed
                benefits:
                <ul className="flex flex-col gap-3 my-3">
                  <li>
                    1. Full access to the course – including all tasks and assignments, but ONE ON
                    ONE INTERACTIONS WITH ME ENDS ONCE CLASS IS OVER.
                  </li>
                  <li>
                    2. You'll get to learn technical writing for FREE – same as in the full payment
                    category explained above.
                  </li>
                  <li>3. You’ll receive a certificate of course completion.</li>
                </ul>
                Remember that the FULL PAY OPTION(Payment Plan B) IS ONLY AVAILABLE FOR 10 PEOPLE –
                SO HURRY IF YOU CAN AFFORD IT - BEFORE ALL SLOTS GET TAKEN. I am taking only 10
                students for the full pay category, because of my schedule and time – just so I can
                give them my best – especially time-wise.
                <p className="my-4">I hope this huge slash helps out well.</p>
              </p>
              <h5 className="poppins text-xl sm:text-lg my-3 font-bold">A. Payment Plan B.</h5>
              <p className="my-4">
                This payment plan is the standard payment plan for the course. With this plan,
                you'll get all the above listed course benefits.
              </p>
              <p className="my-4">
                1. 70,000 Naira for participants in Nigeria <br /> (This includes Nigerians and
                non-Nigerians - as long as you reside in Nigeria). <br /> <br />
                <span className="font-bold">NB: </span>
                The fee is payable twice – in two installments of 50K/20K
              </p>
              <p className="my-4">
                2. 500 US Dollars for participants outside Nigeria <br /> (This includes Nigerians
                and non-Nigerians - as long as you are joining from outside Nigeria) <br /> <br />
                <span className="font-bold">NB: </span>
                The fee is payable twice – in two installments of $350/$150.
              </p>
            </div>
            <div className="pt-4 hidden">
              <h3 className="poppins text-xl sm:text-2xl my-3 font-bold">
                7. How to Register and get started.
              </h3>
              <p className="my-4">
                I am keeping things simple - To get started, simply send me a whatsapp message on
                this line -{' '}
                <a
                  className="text-purple-800 underline"
                  href="https://api.whatsapp.com/send?phone=+234 818 976 4364&text=Hi%20Andrew%2C%0A%0AI%20am%20interested%20in%20joining%20your%20full-stack%20and%20blockchain%20development%20mentorship%20course."
                >
                  +234 81 8976 4364
                </a>{' '}
                - PLEASE DO NOT CALL THIS LINE! - ONLY WHATSAPP MESSAGES <br /> <br />
                You can also send me an email on -{' '}
                <a className="text-purple-800 underline" href="mailto:okpainmoandrew@gmail.com">
                  okpainmoandrew@gmail.com
                </a>
              </p>
              <p className="my-4">
                You can also find more of my relevant contacts by clicking the "contacts" link on
                any of the menus that you can find on this website.
              </p>
              <p className="my-4">
                * Considering the value and everything that this course has to offer, all the
                above-listed course fees are - actually giveaways.
              </p>
              <p className="my-4">
                <span className="font-bold">Cheers!!!</span> - see you in the course.
              </p>
            </div>
            <div className="pre-order-link mx-auto mt-10 flex justify-center">
              <a href="https://selar.co/6f9q55" target="_blank" rel="noreferrer">
                <div className="btn--regular px-[15px] py-[15px] poppins font-bold w-[200px] text-white text-center">
                  Pre-order Now
                </div>
              </a>
            </div>
          </section>
        </main>
      </MainAppLayout>
      <MobileNavbar />
    </>
  );
}

export default CourseParent;
