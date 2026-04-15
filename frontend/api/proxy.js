export default async function handler(req, res) {
  try {
    const response = await fetch("http://13.127.104.73");
    const data = await response.text();

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Backend not reachable");
  }
}
