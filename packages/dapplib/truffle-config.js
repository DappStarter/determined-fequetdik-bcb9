require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close bone tooth story rescue night mad grid clog front sketch'; 
let testAccounts = [
"0x3b2d41e48bb3acb5af647cf48500fe4fb4e5f4fa9fa1dbd9321962ed6c9832b5",
"0xbcf3956ac045befe664c39fc37558af7e72cc4e3d209932a34e6ac71bfe1305f",
"0xbd3b5747dfd307dcd1f93a9855455d411cdadfa2f5180dd3d75a89dd8dfff15f",
"0xced169473ca2fdb657723f32b15d5f5145a320209d366026641171c0cef505d0",
"0xd2a90dcfb410de9042ff5cf7faa6394590fb9827673c4a94f3ccc41fbaa015e8",
"0xe254dcb790172aee8058ef2e01488811ead0e8bb6684c17db305a36a40b0c4de",
"0x19d5e65bcc0d7cb44ce6ea376e37b897d0a375067180256ed68e31a33721e6b9",
"0x931f68db53aa058d37e6bd255e8c78a8fc136b1a382fddb6c9e0b752a93e3bb5",
"0xb06861f3c742221b27ddf7bcbb8a62795355b8d5c06b447926d92545a6173745",
"0x34a6d15250001244b5fe2abe4fb5ff71f87a77a1a2c285e4f5384459c61c703e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

