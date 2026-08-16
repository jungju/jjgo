import type { Metadata } from "next";
import { RobloxPage } from "../../../roblox/roblox-page";

export const metadata: Metadata = {
  title: "Roblox",
  description: "JJGo's Roblox collection featuring Paper Boat Exploration and Bomb Rain.",
};

export default function Page() {
  return <RobloxPage locale="en" />;
}
