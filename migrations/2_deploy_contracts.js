var BeckToken = artifacts.require("./BeckToken.sol");
var BeckTokenSale = artifacts.require("./BeckToken.sol");

module.exports = function(deployer) {
  deployer.deploy(DappToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(BeckTokenSale, BeckToken.address, tokenPrice);
  });
};
