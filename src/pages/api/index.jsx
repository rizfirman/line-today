import { ENDPOINT, URL } from "../../config";

export default async (req, res) => {
  try {
    const response = await fetch(`${URL}${ENDPOINT}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.statusCode = 500;
    res.json({ err });
  }
};
