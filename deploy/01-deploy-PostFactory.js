const { network, ethers } = require("hardhat")
const { verify } = require("../utils/verify")

const devlopementChainID = [31337, 1337]

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const PostFactory = await deploy("PostFactory", { from: deployer })
    if (!devlopementChainID.includes(network.config.chainId) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(PostFactory.address, arguments)
    }

    log("----------------------------------------------------")
    log(`Deployed Post Factory  on ${network.name} contract address: ${PostFactory.address}`)
}

module.exports.tags = ["all", "raffle"]
