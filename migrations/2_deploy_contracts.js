const DexOracle = artifacts.require("DexOracle");

module.exports = function(deployer) {
  deployer.deploy(DexOracle);
};
