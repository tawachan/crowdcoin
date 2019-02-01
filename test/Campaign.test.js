const CampaignFactory = artifacts.require("CampaignFactory");

let factory;

contract("CampaignFactory", accounts => {
  beforeEach(async () => {
    factory = await CampaignFactory.deployed();
  });

  it("deploys an CampaignFactory contract", async () => {
    assert(factory.address);
  });

  it("can create a campaign with factory", async () => {
    await factory.createCampaign(100, { from: accounts[0] });
    const deployedCampaigns = await factory.getDeployedCampaigns();
    console.log(deployedCampaigns);
    assert.ok(deployedCampaigns[0]);
  });
});
