"use client";
import React, { useContext, useEffect } from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "@/components/Common/SectionHeader";
import { WalletConnect } from "@/components/walletConnect";
import { NearContext } from "@/app/context";
import { useRouter } from "next/navigation";

const Signup = () => {
  const { signedAccountId, wallet } = useContext(NearContext);
  let navigate = useRouter();
  useEffect(() => {
    if (signedAccountId) navigate.push("Profile/candidate");
  }, [signedAccountId]);

  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-15 lg:py-20 xl:py-25">
        <div className="mx-auto  max-w-c-1315 px-4 md:px-8 xl:px-0">
          {!signedAccountId && (
            <>
              Login with your wallet <WalletConnect />
            </>
          )}

          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Dont have an account? Register now.",
              subtitle: "",
              description: "",
            }}
          />
          {/* <!-- Section Title End --> */}
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Signup;
