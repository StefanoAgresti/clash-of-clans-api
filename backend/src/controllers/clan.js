import axios from "axios";

export const getClanByTag = async (req, res) => {
  const clanTag = req.params.clanTag;
  const url = `https://api.clashofclans.com/v1/clans/%23${clanTag}`;
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
    res.status(500).send("Error fetching clan data");
  }
};

export const getCapitalRankings = async (req, res) => {
  const location = req.params.location;
  const url = `https://api.clashofclans.com/v1/locations/${location}/rankings/capitals`;
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
    res.status(500).send("Error fetching capital rankings data");
  }
};

export const getClanRankings = async (req, res) => {
  const location = req.params.location;
  const url = `https://api.clashofclans.com/v1/locations/${location}/rankings/clans`;
  const token = process.env.COC_API_TOKEN;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const topFiveClans = response.data.items.slice(0, 5);
    res.json(topFiveClans);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching clan rankings data");
  }
};

export const getClanBbRankings = async (req, res) => {
  const location = req.params.location;
  const url = `https://api.clashofclans.com/v1/locations/${location}/rankings/clans-builder-base`;
  const token = process.env.COC_API_TOKEN;

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const topFiveClans = response.data.items.slice(0, 5);
    res.json(topFiveClans);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching clan builder base rankings data");
  }
};
