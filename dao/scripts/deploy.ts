import { ethers } from "hardhat";

async function main() {
  
  // Deployed the plugin
  const getGreeterSetup = await ethers.getContractFactory('GreeterSetup');
  const GreeterSetup = await getGreeterSetup.deploy();

  await GreeterSetup.waitForDeployment();
  const contractAddress = await GreeterSetup.getAddress();
  
  console.log('GreeterSetup address:', contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


