require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note remain proof install close borrow spring'; 
let testAccounts = [
"0xccea5ddf2e112cbf885c3519d07dbd995697a702e1e0ff7eef31b5c2880e98f4",
"0x487c5549ac2fc95ae003aa81d03b5dde8da07e4fcda78b8f9f930ba12c94e9e4",
"0xfad43f027a10785d0fdee6943c88d2b1b7aa8026eb5eda91a315a99073cd2291",
"0x59ec20b1ff9771e1df04c4a18ac7083183ca28829398b212e38a5cd476758e41",
"0x5cdad0cff02193e7a801de0b529ec246844dae03e07959a08bbec3e8f35b9065",
"0x79c79380e7bc6400c07c49027895d688757b8ca7c1892cb23445e88e1ae3c8de",
"0xa4a566b9a005aff09a7cf14ae928c2f83302779f6a173618051c509694afe142",
"0xa2a411c3ed47c246fbd11e5d86747f0a8b607bb4ca0841871c6debb2c96d026a",
"0x5428352ab95e7eace0fa2f09bdf71b1027ebe43ef4b7ef632420763f8bff6e3a",
"0xc94497a9589d630adfba241052011e970215c70942495060b5fb86c30cb1abe3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

