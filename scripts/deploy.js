const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("BoxV1");
  const instance = await upgrades.deployProxy(Box, [4, 5]);
  await instance.deployed();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
