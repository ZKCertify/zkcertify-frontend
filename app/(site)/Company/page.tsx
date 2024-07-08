"use client";

import ModalCompany from "@/components/ModalCompany";
import ModalEducation from "@/components/ModalEducation";
import { WalletConnect } from "@/components/walletConnect";

import { useState } from "react";

const BlogPage = () => {
  const [modal, setModal] = useState(false);
  const [modalEducation, setModalEducation] = useState(false);
  const [userData, setUserData] = useState<any>({});
  return (
    <>
      <ModalCompany
        modal={modal}
        setModal={setModal}
        setUserData={setUserData}
        userData={userData}
      />
      <ModalEducation
        modal={modalEducation}
        setModal={setModalEducation}
        setUserData={setUserData}
        userData={userData}
      />
      <section className="py-15 lg:py-20 xl:py-25">
        <div className="mx-auto mt-15 max-w-c-1016 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Enter your information
              </h3>
            </div>
            <div className="flex flex-row gap-5.5 w-full p-6.5">
              <div className="w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Dwight"
                  onChange={(e) =>
                    setUserData({ ...userData, firstName: e.target.value })
                  }
                  value={userData?.firstName}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    setUserData({ ...userData, lastName: e.target.value })
                  }
                  value={userData?.lastName}
                  placeholder="Schrute"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="flex flex-row gap-5.5 w-full p-6.5">
              <div className="w-full">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Heading
                </label>
                <textarea
                  onChange={(e) =>
                    setUserData({ ...userData, heading: e.target.value })
                  }
                  value={userData?.heading}
                  placeholder="Information about yourself"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="flex flex-row gap-5.5 w-full p-6.5">
              <div className="w-full">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Current position
                </label>

                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Select one</option>
                  {userData.companyDataArray &&
                    userData.companyDataArray.map((item) => {
                      return (
                        <option selected>
                          {item.title} at {item.companyName}
                        </option>
                      );
                    })}
                </select>

                <div
                  className="w-fit p-3 mt-3 text-blue-500 cursor-pointer hover:bg-slate-100"
                  onClick={() => {
                    setModal(true);
                  }}
                >
                  Add new position
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5.5 w-full p-6.5">
              <div className="w-full">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Education
                </label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>Select one</option>
                  {userData.educationDataArray &&
                    userData.educationDataArray.map((item) => {
                      return (
                        <option selected>
                          {item.degree} in {item.FieldOfStudy} from{" "}
                          {item.school}
                        </option>
                      );
                    })}
                </select>
              </div>
              <div
                className="w-fit p-3  text-blue-500 cursor-pointer hover:bg-slate-100"
                onClick={() => {
                  setModalEducation(true);
                }}
              >
                Add new education
              </div>
            </div>

            <div className="flex flex-row gap-5.5 w-full p-6.5">
              <div className="w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Date of birth
                </label>
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, dob: e.target.value })
                  }
                  value={userData?.dob}
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
                    setUserData({ ...userData, location: e.target.value })
                  }
                  value={userData?.location}
                  type="text"
                  placeholder="Scranton"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="flex flex-row gap-5.5 w-full p-6.5">
              <div className="w-full ">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Link
                </label>
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, link: e.target.value })
                  }
                  value={userData?.link}
                  type="text"
                  placeholder=""
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="flex flex-row gap-5.5 w-full p-6.5">
              {/* <button
                aria-label="signup with email and password"
                className="inline-flex items-center gap-2.5  rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              ></button> */}
              <WalletConnect />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
