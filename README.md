# Hardhat Postfactory

Hardhat Postfactory is a simple Smart Contract that allows users to post articles on the desired chain and earn rewards in the form of ETH from other users. The Smart Contract is automatically verified when deploying to chains other than development chains.

##### Key features of the Smart Contract include:

- Users can post any number of articles.
- Articles can be liked by other users.
- Authors of articles can earn rewards in the form of ETH from other users.
- Emit results


## Installation

1. Clone the repository:

```bash
git clone https://github.com/malaipambu/hardhat-postfactory.git
cd hardhat-postfactory
```
2. Install dependencies
```bash
yarn install
```

## Usage

1. Start a local development node (to deploy locally use)
```bash
yarn hardhat node
```
2. Get the Smart Contract address and update the PostFactoryAddress.js file, which contains the mapping of Chain ID to Contracts Deployed to it. 

```bash
//PostFactoryAddress.js
chainToAddress = {
    1337: "0x443fc5b750346e9055862B906b048ACcEf2A5965",
    31337: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    5: "0xa330D54ceE2B3e3EEAf690465e96AeE828483f9a",
}

module.exports = { chainToAddress }
```
3. Get the Smart Contract address and update the PostFactoryAddress.js file, which contains the mapping of Chain ID to Contracts Deployed to it. 
```bash
yarn hardhat run scripts/run.js --network localhost
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
