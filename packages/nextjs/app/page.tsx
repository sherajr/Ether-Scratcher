"use client";

import Link from "next/link";
// @particle-network/connectkit to use Auth Core
import { WalletEntryPosition } from "@particle-network/auth";
import { LineaGoerli } from "@particle-network/chains";
import { evmWallets } from "@particle-network/connect";
// import { Address } from "~~/components/scaffold-eth";
// import { useEthereum, useConnect, useAuthCore } from '@particle-network/auth-core-modal';
// import { LineaGoerli } from '@particle-network/chains';
// import { AAWrapProvider, SendTransactionMode, SmartAccount } from '@particle-network/aa';
// import { ethers } from 'ethers';
// import { notification } from 'antd';
import { ModalProvider } from "@particle-network/connect-react-ui";
import type { NextPage } from "next";
// import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// import { useConnect } from '@particle-network/auth-core-modal';
// import { userInfo } from "os";

const Home: NextPage = () => {
  // const { provider } = useEthereum();
  // const { connect, disconnect } = useConnect();
  // const { userInfo } = useAuthCore();

  // const { address: connectedAddress } = useAccount();
  // const { connect, connected } = useConnect();
  // const handleConnect = async () => {
  //   if (connected) {
  //     const userInfo = await connect();
  //     return(userInfo)
  //     console.log('userInfo',userInfo);
  //   }
  // };

  return (
    <>
      <ModalProvider
        options={{
          projectId: String(process.env.NEXT_PUBLIC_REACT_APP_PROJECT_ID),
          clientKey: String(process.env.NEXT_PUBLIC_REACT_APP_CLIENT_KEY),
          appId: String(process.env.NEXT_PUBLIC_REACT_APP_APP_ID),
          chains: [LineaGoerli],
          particleWalletEntry: {
            //optional: particle wallet config
            displayWalletEntry: true, //display wallet button when connect particle success.
            defaultWalletEntryPosition: WalletEntryPosition.TR,
            supportChains: [LineaGoerli],
            customStyle: {}, //optional: custom wallet style
          },
          securityAccount: {
            //optional: particle security account config
            //prompt set payment password. 0: None, 1: Once(default), 2: Always
            promptSettingWhenSign: 1,
            //prompt set master password. 0: None(default), 1: Once, 2: Always
            promptMasterPasswordSettingWhenLogin: 1,
          },
          wallets: evmWallets({
            projectId: "walletconnect projectId", //replace with walletconnect projectId
            showQrModal: false,
          }),
        }}
        theme={"auto"}
        language={"en"} //optional:localize, default en
        walletSort={["Particle Auth", "Wallet"]} //optional:walelt order
        particleAuthSort={[
          //optional:display particle auth items and order
          "email",
          "phone",
          "google",
          "apple",
          "facebook",
        ]}
      >
        <div className="flex items-center flex-col flex-grow pt-10">
          <div className="px-5">
            <h1 className="text-center">
              <span className="block text-2xl mb-2">Welcome to</span>
              <span className="block text-4xl font-bold">Ether Scratcher</span>
            </h1>
            <div className="flex justify-center items-center space-x-2">
              <p className="my-2 font-medium">Connected Address:</p>
              {/* <Address address={userInfo} /> */}
            </div>
            <p className="text-center text-lg">Get started by purchasing a Scratcher!</p>
          </div>

          <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
            <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
              <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
                <BugAntIcon className="h-8 w-8 fill-secondary" />
                <p>
                  Tinker with your smart contract using the{" "}
                  <Link href="/debug" passHref className="link">
                    Debug Contracts
                  </Link>{" "}
                  tab.
                </p>
              </div>
              <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
                <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
                <p>
                  Explore your local transactions with the{" "}
                  <Link href="/blockexplorer" passHref className="link">
                    Block Explorer
                  </Link>{" "}
                  tab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default Home;
