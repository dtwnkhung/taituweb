import { getToChuc } from "../../lib/apis/to-chuc";

export default async function handler(req, res) {
  try {
    res.status(200).json(await getToChuc());
  } catch (error) {
    res.status(400).json({ error: "Oops, something went wrong." });
  }
}
