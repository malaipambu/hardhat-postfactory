# Hardhat Postfactory

Hardhat Postfactory is a simple Smart Contract that allows users to post articles on the desired chain and earn rewards in the form of ETH from other users. The Smart Contract is automatically verified when deploying to chains other than development chains.

#####Key features of the Smart Contract include:

- Users can post any number of articles.
- Articles can be liked by other users.
- Authors of articles can earn rewards in the form of ETH from other users.
- Emit results

#####Key features of the Hardhat Postfactory
- Auto verifies Smartcontact (chains other than devlopement chain and when Etherscan API is present )
- Uses deploy plugin of hardhat to deploy

##### Usage
1. Clone the repository:
	`git clone https://github.com/malaipambu/hardhat-postfactory.git`
	`cd hardhat-postfactory
`
2. Install dependencies
`yarn install
`
3. Start a local development node (to deploy locally)
`yarn hardhat node
`
4. Deploy the Smart Contract
`yarn hardhat deploy
`
5. Get the Smart Contract address and update the PostFactoryAddress.js file, which contains the mapping of Chain ID to Contracts Deployed to it. The scripts under the scripts folder use the address from this file to interact with the contract.

6. Run the script to interact with the contract:
`yarn hardhat run scripts/run.js --network localhost
`


##### License
Hardhat Postfactory is licensed under the MIT license


