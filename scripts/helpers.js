const { ethers, network } = require("hardhat")
const { chainToAddress } = require("../PostFactoryAddress")
const contract = require("../artifacts/contracts/PostFactory.sol/PostFactory.json")

const postFactoryContractAdd = chainToAddress[network.config.chainId]
const postFactory = new ethers.Contract(postFactoryContractAdd, contract["abi"], ethers.provider)

async function getPostDetails(postId) {
    let postDetails = await postFactory.getPostDetails(postId)

    post = {
        author: postDetails[0],
        postTitle: postDetails[1],
        content: postDetails[2],
        createdOn: postDetails[3],
        rewardEarned: postDetails[4],
        likes: postDetails[5],
    }
    return post
}

async function createPost(title, content) {
    const [deployer] = await ethers.getSigners()
    const postFactoryWithSigner = postFactory.connect(deployer)
    await postFactoryWithSigner.createPost(title, content)
}

async function rewardPost(postId, ether) {
    const author = (await getPostDetails(postId)).author
    const value = ethers.utils.parseEther(ether)

    const accounts = await ethers.getSigners()
    const sender = accounts[0]
    const tx = await sender.sendTransaction({ to: author, value: value })
    return tx.hash
}

async function getTotalPostCount() {
    let postCount = await postFactory.getTotalPostCount()
    return postCount
}

async function likePost(postId) {
    const [deployer] = await ethers.getSigners()
    const postFactoryWithSigner = postFactory.connect(deployer)
    await postFactoryWithSigner.likePost(postId)
}

module.exports = { getPostDetails, createPost, rewardPost, getTotalPostCount, likePost }
