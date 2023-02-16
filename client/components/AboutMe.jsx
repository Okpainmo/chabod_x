import React from 'react';

function AboutMe() {
  return (
    <section className="about-me px-3 text-center xsm:w-[85%] xsm:mx-auto lg:w-[60%]">
      <h1 className="section-title text-2xl sm:text-4xl poppins poppins font-bold">About Me</h1>
      <div className="about-text text--colors_secondary mt-8 text-[14px] sm:text-base leading-[22px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, id dolorem voluptates
        repellendus debitis et rerum, odit fugit recusandae perferendis amet necessitatibus!
        Praesentium, quam. Similique quae laudantium deleniti non eaque quo alias, labore neque in
        incidunt eum molestiae cum molestias, distinctio maiores est asperiores, dicta aliquid sed
        odit mollitia commodi! Officiis, quam. Fuga quisquam doloremque animi, magni sit itaque?
        Impedit eligendi corporis eos, sint voluptas recusandae sit voluptate vitae provident beatae
        natus repellat nam obcaecati doloribus in ab quas iusto modi ipsam. Beatae non illo
        <div className="my-skills w-full flex justify-center pt-6 pb-10 flex-wrap gap-x-3 md:w-[60%] md:mx-auto">
          <div className="skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
            firebase
          </div>
          <div className="skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
            firebase
          </div>
          <div className="skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
            firebase
          </div>
          <div className="skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
            firebase
          </div>
          <div className="skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
            firebase
          </div>
          <div className="skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
            firebase
          </div>
          <div className="skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
            firebase
          </div>
          <div className="skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
            firebase
          </div>
          <div className="skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
            firebase
          </div>
          <div className="skill-tag bg--primary px-3 py-2 text--colors_white mt-4 text-[10px]">
            firebase
          </div>
        </div>
        perferendis labore a voluptatibus rem minima amet, provident sequi corporis. Ea repudiandae,
        quibusdam esse tempore exercitationem omnis ipsam, ut necessitatibus atque eos perspiciatis.
        Consequatur, blanditiis unde incidunt tenetur dolore vero consequuntur repellat, sint quas
        ipsa modi optio. Unde doloremque quidem aspernatur tenetur accusantium, sapiente quaerat
        sunt iusto voluptatum minus non in vitae sequi illo ex impedit commodi voluptates porro
        numquam quisquam. Rem vitae cum harum dolor hic quos accusamus ipsa dolorem officia odit
        voluptatem, omnis corporis qui. Rerum quam vitae porro ex iusto provident recusandae et, at
        facilis aperiam odio quidem, voluptatum praesentium nostrum commodi modi nulla deserunt cum
        consequatur cumque ipsa tenetur voluptatem? Quidem repellat ipsum eos porro quod at delectus
        voluptas iusto sunt.
      </div>
      {/* <button
        type="button"
        className="text-white connect btn--regular px-6 py-3 w-full text-xl mt-8 xsm:w-[400px] xsm:mt-8"
      >
        View my resume
      </button> */}
      <button
        type="button"
        className="text-white connect btn--regular px-6 py-3 w-full mt-10 xsm:w-[400px]"
      >
        Download my resume
      </button>
    </section>
  );
}

export default AboutMe;
