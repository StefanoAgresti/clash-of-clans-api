import axios from "axios";

export const getPlayerByTag = async (req, res) => {
  const playerTag = req.params.playerTag;
  const url = `https://api.clashofclans.com/v1/players/%23${playerTag}`;
  const token = process.env.COC_API_TOKEN;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching player data");
  }
};

export const getPlayerRankings = async (req, res) => {
  const location = req.params.location;
  const url = `https://api.clashofclans.com/v1/locations/${location}/rankings/players`;
  const token = process.env.COC_API_TOKEN;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const topFivePlayers = response.data.items.slice(0, 5);
    res.json(topFivePlayers);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching player rankings data");
  }
};

export const getPlayerBbRankings = async (req, res) => {
  const location = req.params.location;
  const url = `https://api.clashofclans.com/v1/locations/${location}/rankings/players-builder-base`;
  const token = process.env.COC_API_TOKEN;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const topFivePlayers = response.data.items.slice(0, 5);
    res.json(topFivePlayers);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching player builder base rankings data");
  }
};
