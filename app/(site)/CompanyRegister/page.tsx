"use client";

import { NearContext } from "@/app/context";
import ModalCompany from "@/components/ModalCompany";
import ModalEducation from "@/components/ModalEducation";
import { WalletConnect } from "@/components/walletConnect";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useContext, useEffect, useState } from "react";

const BlogPage = () => {
  const [modal, setModal] = useState(false);
  const [modalEducation, setModalEducation] = useState(false);
  const [companyData, setCompanyData] = useState<any>({});
  const { signedAccountId, wallet } = useContext(NearContext);
  const navigate = useRouter();
  useEffect(() => {
    if (!wallet) return;
  }, [signedAccountId, wallet]);
  return (
    <>
      <ModalCompany
        modal={modal}
        setModal={setModal}
        setCompanyData={setCompanyData}
        companyData={companyData}
      />
      <ModalEducation
        modal={modalEducation}
        setModal={setModalEducation}
        setCompanyData={setCompanyData}
        companyData={companyData}
      />
      <section className="py-15 lg:py-20 xl:py-25">
        <div className="mx-auto mt-15 max-w-c-1016 px-4 md:px-8 xl:mt-20 xl:px-0">
          <span className="text-3xl p-5 mt-10">Company Registration</span>
          <div className="rounded-sm border  border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Enter company information
              </h3>
            </div>
            <div className="flex flex-row gap-5.5 w-full p-6.5">
              <div className="w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Dwight"
                  onChange={(e) =>
                    setCompanyData({
                      ...companyData,
                      companyName: e.target.value,
                    })
                  }
                  value={companyData?.companyName}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Field
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    setCompanyData({ ...companyData, field: e.target.value })
                  }
                  value={companyData?.field}
                  placeholder="IT"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="flex flex-row gap-5.5 w-full p-6.5">
              <div className="w-full">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  About
                </label>
                <textarea
                  onChange={(e) =>
                    setCompanyData({ ...companyData, about: e.target.value })
                  }
                  value={companyData?.about}
                  placeholder="Information about yourself"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="flex flex-row gap-5.5 w-full p-6.5">
              <div className="w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Founded on
                </label>
                <input
                  onChange={(e) =>
                    setCompanyData({
                      ...companyData,
                      foundedOn: e.target.value,
                    })
                  }
                  value={companyData?.foundedOn}
                  className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary flatpickr-input active"
                  placeholder="mm/dd/yyyy"
                  data-class="flatpickr-right"
                  type="date"
                />
              </div>
              <div className="w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Location
                </label>
                <input
                  onChange={(e) =>
                    setCompanyData({ ...companyData, location: e.target.value })
                  }
                  value={companyData?.location}
                  type="text"
                  placeholder="Scranton"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5.5 w-1/4 p-6.5">
              {/* <button
                aria-label="signup with email and password"
                className="inline-flex items-center gap-2.5  rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              ></button> */}
              <WalletConnect />
              <div className="cursor-pointer inline-flex items-center gap-2.5  rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho">
                <button
                  onClick={() => {
                    let data = {
                      ...companyData,
                      account: signedAccountId,
                    };

                    axios
                      .post("http://localhost:8000/company/saveCompany", {
                        company: data,
                      })
                      .then((response) => {
                        // Handle success
                        console.log("Response:", response.data);
                        alert("Data saved");
                        navigate.push("Profile");
                      })
                      .catch((error) => {
                        // Handle error
                        console.error("Error:", error);
                      });
                  }}
                  className="btn btn-secondary"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
