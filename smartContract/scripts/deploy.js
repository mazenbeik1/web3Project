const hre = require("hardhat");

async function main() {
  const MsgDapp = await hre.ethers.getContractFactory("MsgDapp");
  const msgdapp = await MsgDapp.deploy();

  await msgdapp.deployed();

  console.log(` Contract Address: ${msgdapp.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
