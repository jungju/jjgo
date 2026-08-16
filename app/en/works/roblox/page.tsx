import { RobloxPage } from "../../../roblox/roblox-page";
import { pageMetadata } from "../../../seo";

export const metadata = pageMetadata({
  locale: "en",
  path: "/works/roblox",
  title: "Roblox Game Portfolio | Jungju Lee | JJGo",
  description: "Explore the design and development of Paper Boat Exploration: Seoul Waterways Adventure and Bomb Rain, two Roblox games by Jungju Lee.",
  image: "/a/generated/roblox/paper-boat-seoul.png",
  imageWidth: 768,
  imageHeight: 432,
});

export default function Page() {
  return <RobloxPage locale="en" />;
}
