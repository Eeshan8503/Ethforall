var Main = artifacts.require("Main");

module.exports = function(deployer) {
  deployer.deploy(Main, "Hello World!");
};