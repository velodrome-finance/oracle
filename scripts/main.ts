import { ethers } from "hardhat";

async function main() {
    const pairFactory = "0x";
    const initCodehash = "0x";

    const veloOracleFactory = await ethers.getContractFactory("VeloOracle");
    const veloOracle = await veloOracleFactory.deploy();
    await veloOracle.deployed();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});