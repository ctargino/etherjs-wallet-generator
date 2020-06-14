// importing hyperapp
import { h, app } from "hyperapp";

// importing the ethers.js library
const ethers = require('ethers');

// wallet's privateKey and address constructor state seted null.
const state = {
  wallet: {
    address: null,
    privateKey: null
  }
}

const actions = {
  wallet: {
    // generateWallet action calls the ethers.js library createRandom() method and returns a newly created privateKey and address
    generateWallet: () => state => {
      const wallet = ethers.Wallet.createRandom();
      return {
        address: wallet.address,
        privateKey: wallet.privateKey
      };
    },
  },
};

// displays new wallet address and privateKey that have been generated
const view = (state, actions) => (
  <div id="container">
    <img src="http://www.vsdi.com.br/assets_fronts/img/logo.svg" alt=""/>
    <h1>Wallet Generator</h1>
    <h2>Address: {state.wallet.address}</h2>
    <h2>Private Key: {state.wallet.privateKey}</h2>
    <button onclick={() => actions.wallet.generateWallet()}>
      Generate Wallet
    </button>
  </div>
);

app(state, actions, view, document.body)
