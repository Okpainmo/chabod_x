import React from 'react';

function PostPage() {
  return (
    <div className="post-page">
      <section className="post-top pb-10 px-3 pt-40 blog_bg--primary xsm:px-[20px]">
        <div className="sm:w-[80%] sm:mx-auto">
          <div className="tags">
            <div className="tags w-full flex flex-wrap gap-x-3 text--colors_white">
              <div className="rounded border bg--secondary px-3 py-1.5 text--colors_white mt-4 text-[10px]">
                firebase
              </div>
              <div className="rounded border bg--secondary px-3 py-1.5 text--colors_white mt-4 text-[10px]">
                firebase
              </div>
              <div className="rounded border bg--secondary px-3 py-1.5 text--colors_white mt-4 text-[10px]">
                firebase
              </div>
              <div className="rounded border bg--secondary px-3 py-1.5 text--colors_white mt-4 text-[10px]">
                firebase
              </div>
              <div className="rounded border bg--secondary px-3 py-1.5 text--colors_white mt-4 text-[10px]">
                firebase
              </div>
              <div className="rounded border bg--secondary px-3 py-1.5 text--colors_white mt-4 text-[10px]">
                firebase
              </div>
            </div>
          </div>
          <h1 className="post-title text-2xl md:text-3xl poppins font-bold pb-3 pt-3">
            How I built my minimalist blog-folio web-app.
          </h1>
          <div className="post-details text-[12px]">
            <div className="post-author poppins text--colors_primary font-bold">
              Andrew Okpainmo
            </div>
            <div className="post-author font-bold">23rd June 2023</div>
          </div>
        </div>
      </section>
      <section className="post-body text-[14px] px-3 xsm:px-[20px] mt-8 pb-16 sm:w-[80%] sm:mx-auto lg:flex lg:justify-between">
        <div className="lg:w-[65%]">
          <h3 className="post-section-title font-bold poppins text-lg">Introduction</h3>
          <p className="post-serif mt-2 leading-[27px] md:leading-[30px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate animi tempore,
            aperiam praesentium necessitatibus fuga dolorum molestias ipsum esse ipsa harum,
            voluptatem tenetur. Numquam incidunt doloremque itaque, ad ex unde suscipit magni
            accusamus autem quo consequuntur, error labore, dolorum dolore dicta sunt. Amet tempora
            esse, rerum sint similique magnam expedita voluptas quod aperiam pariatur. Consectetur
            fuga perferendis odit facere eligendi hic ratione mollitia ut illo consequatur qui nihil
            ex voluptatibus voluptas enim consequuntur blanditiis asperiores, culpa nemo, suscipit
            debitis laboriosam veritatis quos. Perferendis laudantium magni dicta. Aspernatur,
            debitis sunt sit vitae commodi est possimus culpa blanditiis! Animi illo atque nisi
            aspernatur distinctio impedit consectetur eos temporibus ducimus nobis architecto
            perspiciatis beatae, quasi non quaerat, assumenda sed optio numquam. Blanditiis ab harum
            et! Veniam explicabo molestiae delectus ipsum aliquid! Ex fuga inventore odit blanditiis
            iste repellat maxime eos sed dolore placeat autem, nulla nemo possimus similique, ab
            obcaecati quae, unde sapiente quas nihil distinctio ad beatae quo. Voluptas commodi
            placeat culpa. Sint a sed, ipsum sapiente, esse consequatur tempore odit pariatur dolore
            adipisci nisi blanditiis laborum modi perferendis fugiat quo est excepturi, aliquid
            alias neque maiores quod voluptas id. Unde id asperiores vitae ex illum magni mollitia
            est deserunt laborum eius.
          </p>
        </div>
        <div className="table-of-contents hidden lg:inline-block lg:w-[20%]">
          <h3 className="montserrat font-bold text--colors_secondary text-lg mb-3">
            Table of contents
          </h3>
          <ul className="flex-col gap-y-3 lg:flex list-none nunito-sans lg:justify-between text-[12px]">
            <li
              className="relative before:w-[7px]
           before:h-[7px] before:block before:bg--secondary before:absolute before:left-[-20px] before:top-[5px]"
            >
              Introduction.
            </li>
            <li
              className="relative before:w-[7px]
           before:h-[7px] before:block before:bg--secondary before:absolute before:left-[-20px] before:top-[5px]"
            >
              Lorem, ipsum dolor.
            </li>
            <li
              className="relative before:w-[7px]
           before:h-[7px] before:block before:bg--secondary before:absolute before:left-[-20px] before:top-[5px]"
            >
              Lorem, ipsum dolor.
            </li>
            <li
              className="relative before:w-[7px]
           before:h-[7px] before:block before:bg--secondary before:absolute before:left-[-20px] before:top-[5px]"
            >
              Lorem, ipsum dolor.
            </li>
            <li
              className="relative before:w-[7px]
           before:h-[7px] before:block before:bg--secondary before:absolute before:left-[-20px] before:top-[5px]"
            >
              Lorem, ipsum dolor.
            </li>
            <li
              className="relative before:w-[7px]
           before:h-[7px] before:block before:bg--secondary before:absolute before:left-[-20px] before:top-[5px]"
            >
              Lorem, ipsum dolor.
            </li>
            <li
              className="relative before:w-[7px]
           before:h-[7px] before:block before:bg--secondary before:absolute before:left-[-20px] before:top-[5px]"
            >
              Conclusion.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default PostPage;
