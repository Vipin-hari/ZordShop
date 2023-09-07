#ZordShop

## Technology Stack & Tools

- Solidity (Writing Smart Contracts & Tests)
- Javascript (React & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [React.js](https://reactjs.org/) (Frontend Framework)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`
`npm install @nomicfoundation/hardhat-toolbox`

### 3. Run tests
`$ npx hardhat test`

### 4. Start Hardhat node for sample accounts with 10k ethers
`$ npx hardhat node`

### 5. Run deployment script(In new terminal)
In a separate terminal execute:
`$ npx hardhat run ./scripts/deploy.js --network localhost`

### 6. Start frontend(In seperate terminal)
`$ npm run start`

### 7. Product addition
   # Add products in items.json file and redeploy the contract in the same address or
   # Update the contract address key in config.json file 
