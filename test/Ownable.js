const Ownable = artifacts.require("Ownable");

contract("Ownable", accounts => {
  it("Should make first account an owner", async () => {
    let instance = await Ownable.deployed();
    let owner = await instance.owner();
    assert.equal(owner, accounts[0]);
  });
  it("return owner address", async () => {
    let instance = await Ownable.deployed();
    let owner = await instance.owner();
    console.log(owner);
  });
  it("change owner's address", async () => {
      let instance = await Ownable.deployed();
      let owner = await instance.owner();
      console.log("Old Owner: " + owner);

      let newOwner = await instance.transferOwnership(accounts[1]);
      owner = await instance.owner();
      console.log("New Owner: " + owner);
  });
  it('loses owner after renouncement', async function () {
    let instance = await Ownable.deployed();
    let renounce = await instance.renounceOwnership();
    //let owner = await instance.owner();

    assert.equal(owner, 0);
  });
});