# AirDrop ERC20 Tokens
An ERC20 contract which can be used to airdrop already deployed ERC20 tokens to multiple addresses in one transaction.

### Installation
#### Truffle
    npm install truffle
    
#### Truffle Wallet Provider
    npm install truffle-hdwallet-provider
    
### Update truffle.js

Add your wallet mnemonics
Sign-Up on Infura and add Infura Key

![trufflejs](https://user-images.githubusercontent.com/25963228/49644885-bfa3d600-fa3b-11e8-9ebd-34c6a3f59be3.png)

### Update AirDrop.sol

Add your deployed ERC20 token address

![token](https://user-images.githubusercontent.com/25963228/49645314-3b525280-fa3d-11e8-9992-8574211fef38.png)

### How to Run

        npm install
        truffle compile
        truffle migrate --network mainnet --reset
        

