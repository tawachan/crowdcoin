import { Drizzle, generateStore } from "drizzle";
import Campaign from "./build/contracts/Campaign.json";
import CampaignFactory from "./build/contracts/CampaignFactory.json";

const options = {
  contracts: [Campaign, CampaignFactory]
};

const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

export default drizzle;
