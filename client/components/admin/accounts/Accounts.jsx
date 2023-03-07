import React from 'react';
import Image from 'next/image';
import me from '../../../assets/images/me.jpg';
// import { AccountsContext } from '../../../context/admin/AccountsContext';

function AdminAccounts({ adminsData }) {
  const adminsDetails = adminsData.allAdmins;
  console.log(adminsDetails);

  // const { createAdmin } = useContext(AccountsContext);

  return (
    <section className="admin-accounts w-full pb-20 xsm:pt-8">
      {/* <h3 className="montserrat text-xl font-bold text--colors_secondary mt-6">Admin accounts</h3> */}
      <div className="section-top flex justify-between items-center mt-6">
        <h3 className="montserrat text-xl font-bold text--colors_secondary">Admin accounts</h3>
        <div className="accounts-count montserrat text-md font-bold text--colors_secondary">
          ({adminsDetails.length})
        </div>
      </div>
      <section className="admin-accounts mt-6 flex flex-col gap-y-10 md:w-full md:justify-between md:flex-wrap md:flex-row text-center">
        {adminsDetails.map((each) => {
          const { _id, adminName, adminBio, adminNiches } = each;

          // const getNiches = () => {
          //   const nicheArray = niche
          //   console.log(nicheArray);
          // };

          // getNiches();

          return (
            <div
              className="admin-card bg--glass2 py-6 px-4 shadow text-[12px] md:w-[48%]"
              key={_id}
            >
              <div className="admin-photo-wrapper">
                <Image
                  className="rounded-full mx-auto"
                  src={me}
                  width={80}
                  height={80}
                  alt="seller-photo"
                />
              </div>
              <div className="min-h-[100px]">
                <div className="admin-name mt-4 font-bold text-lg">{adminName}</div>
                <div className="brief-admin-about mt-1 mb-1 text-center">{adminBio}</div>
                <span className="admin-category text--colors_primary">({adminNiches})</span>
              </div>
              <section className="account-buttons-wrapper flex gap-x-3 justify-center">
                <button
                  type="button"
                  className="btn--outline px-4 py-2 mt-4 rounded w-1/2"
                  // onClick={createAdmin}
                >
                  Edit
                </button>
                <button type="button" className="btn--regular px-4 py-2 mt-4 rounded w-1/2">
                  remove
                </button>
              </section>
            </div>
          );
        })}
      </section>
    </section>
  );
}

export default AdminAccounts;
