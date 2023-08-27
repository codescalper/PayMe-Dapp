const hre = require("hardhat");

async function main() {
  const Project = await hre.ethers.getContractFactory("Project");
  const contract = await Project.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});