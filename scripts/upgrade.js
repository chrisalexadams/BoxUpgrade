const { ethers, upgrades } = require("hardhat");

const proxyAddress = "0x60A10921aE055673727FCEDbE3CCbDAc4e6C8851";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, BoxV2);
  console.log((await upgraded.area()).toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
