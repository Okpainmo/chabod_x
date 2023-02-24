import React from 'react';
import Image from 'next/image';
import me from '../../../assets/images/me.jpg';

function Accounts() {
  return (
    <section className="admin-accounts w-full pb-20 mt-12">
      <h3 className="montserrat text-xl font-bold text--colors_secondary mt-6">Admin accounts</h3>
      <section className="admin-accounts mt-6 flex flex-col gap-y-10 md:w-full md:justify-between md:flex-wrap md:flex-row text-center">
        <div className="admin-card bg--glass2 py-6 px-4 shadow text-[12px] md:w-[48%]">
          <div className="admin-photo-wrapper">
            <Image
              className="rounded-full mx-auto"
              src={me}
              width={80}
              height={80}
              alt="seller-photo"
            />
          </div>
          <div className="admin-name mt-4 font-bold text-lg">Andrew Okpainmo</div>
          <div className="brief-admin-about mt-1 mb-1 text-center">
            A blessed sensation - made for exploits.
          </div>
          <span className="admin-category underline">(Technical writer)</span>
          <section className="account-buttons-wrapper flex gap-x-3 justify-center">
            <button type="button" className="btn--outline px-4 py-2 mt-4 rounded w-1/2">
              Edit
            </button>
            <button type="button" className="btn--regular px-4 py-2 mt-4 rounded w-1/2">
              remove
            </button>
          </section>
        </div>
        <div className="admin-card bg--glass2 py-6 px-4 shadow text-[12px] md:w-[48%]">
          <div className="admin-photo-wrapper">
            <Image
              className="rounded-full mx-auto"
              src={me}
              width={80}
              height={80}
              alt="seller-photo"
            />
          </div>
          <div className="admin-name mt-4 font-bold text-lg">Andrew Okpainmo</div>
          <div className="brief-admin-about mt-1 mb-1 text-center">
            A blessed sensation - made for exploits.
          </div>
          <span className="admin-category underline">(Technical writer)</span>
          <section className="account-buttons-wrapper flex gap-x-3 justify-center">
            <button type="button" className="btn--outline px-4 py-2 mt-4 rounded w-1/2">
              Edit
            </button>
            <button type="button" className="btn--regular px-4 py-2 mt-4 rounded w-1/2">
              remove
            </button>
          </section>
        </div>
        <div className="admin-card bg--glass2 py-6 px-4 shadow text-[12px] md:w-[48%]">
          <div className="admin-photo-wrapper">
            <Image
              className="rounded-full mx-auto"
              src={me}
              width={80}
              height={80}
              alt="seller-photo"
            />
          </div>
          <div className="admin-name mt-4 font-bold text-lg">Andrew Okpainmo</div>
          <div className="brief-admin-about mt-1 mb-1 text-center">
            A blessed sensation - made for exploits.
          </div>
          <span className="admin-category underline">(Technical writer)</span>
          <section className="account-buttons-wrapper flex gap-x-3 justify-center">
            <button type="button" className="btn--outline px-4 py-2 mt-4 rounded w-1/2">
              Edit
            </button>
            <button type="button" className="btn--regular px-4 py-2 mt-4 rounded w-1/2">
              remove
            </button>
          </section>
        </div>
      </section>
    </section>
  );
}

export default Accounts;
