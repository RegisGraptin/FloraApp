
'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from "wagmi";

function About() {

  const { address, isConnected } = useAccount();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {isConnected && (
        <h1>Hello World</h1>
      )}
      
      <ConnectButton />
      

      {/* https://devs.aragon.org/docs/sdk/examples/client/create-dao */}
        
        
    </main>
  )
}

export default About;