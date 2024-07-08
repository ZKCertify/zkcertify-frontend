"use client";
import React, { useState, useContext } from "react";
import SectionHeader from "@/components/Common/SectionHeader";
import { WalletConnect } from "@/components/walletConnect";
import { NearContext } from "@/app/context";
import { useMbWallet } from "@mintbase-js/react";

const MintSBT = () => {
  const { signedAccountId, wallet } = useContext(NearContext);
  const {
    connect,
    disconnect,
    activeAccountId,
    selector,
    isConnected,
    errorMessage,
  } = useMbWallet();
  const [tokenMetadata, setTokenMetadata] = useState({
    title: "",
    description: "",
    recipientId: "",
  });

  const mintSBT = async () => {
    if (!signedAccountId) {
      alert("Please connect your wallet first.");
      return;
    }

    const contractId = "zkCertify.testnet";

    try {
      const wallet = await selector.wallet();

      const result = await wallet.signAndSendTransaction({
        receiverId: contractId,
        actions: [
          {
            type: "FunctionCall",
            params: {
              methodName: "sbt_mint",
              args: {
                token_id: `${
                  tokenMetadata.recipientId
                }-${new Date().getTime()}`,
                token_owner_id: tokenMetadata.recipientId,
                token_metadata: {
                  title: tokenMetadata.title,
                  media:
                    "ipfs://bafybeic3747hduihyqbmamreua65aqsnlacbymi5yr73cncimgiey2ctui/",
                  description: tokenMetadata.description,
                },
              },
              gas: "300000000000000",
              deposit: "0",
            },
          },
        ],
      });

      console.log("Transaction result:", result);
      alert("SBT minted successfully!");
    } catch (error) {
      console.error("Error minting SBT:", error);
      alert("Error minting SBT. See console for details.");
    }
  };

  const handleMetadataChange = (e) => {
    const { name, value } = e.target;
    setTokenMetadata((prevMetadata) => ({
      ...prevMetadata,
      [name]: value,
    }));
  };

  return (
    <>
      <section id="features" className="py-15 lg:py-20 xl:py-25">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <div className="mb-10">
            <h2 className="mb-4 text-2xl font-bold">Login with your wallet</h2>
            <WalletConnect />
          </div> */}

          <SectionHeader
            headerInfo={{
              title: "Issue a Credential to a User",
              subtitle: "",
              description:
                "Organizations can issue job-related or educational credentials to users.",
            }}
          />

          <div className="mt-12.5 bg-white rounded-lg shadow-xl p-6 mb-10">
            <h3 className="text-xl font-bold mb-4">Mint a Credential SBT</h3>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="recipientId"
              >
                Recipient ID
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="recipientId"
                name="recipientId"
                type="text"
                value={tokenMetadata.recipientId}
                onChange={handleMetadataChange}
                placeholder="Enter recipient ID"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Credential Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                name="title"
                type="text"
                value={tokenMetadata.title}
                onChange={handleMetadataChange}
                placeholder="Enter credential title"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                name="description"
                value={tokenMetadata.description}
                onChange={handleMetadataChange}
                placeholder="Enter description"
                rows={2}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={mintSBT}
              >
                Mint SBT
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MintSBT;
