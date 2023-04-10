import { expect } from "chai";

describe("MyContract", function () {
    it("should return correct name", async function () {
        const MyContract = await hre.ethers.getContractFactory("MyContract");

        const MyContractDeployed = await MyContract.deploy("MyContractName","MCN")

        await MyContractDeployed.deployed();

        expect(await MyContractDeployed.name()).to.equal("MyContractName");
    });

    it("should return symbol", async function () {
        const MyContract = await hre.ethers.getContractFactory("MyContract");

        const MyContractDeployed = await MyContract.deploy("MyContractName","MCN")

        await MyContractDeployed.deployed();

        expect(await MyContractDeployed.symbol()).to.equal("MCN");
    });
});