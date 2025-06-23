import express from "express";
import cors from "cors";
import LeetCode from "leetcode-query";
import path from 'path'
const __dirname = path.resolve();
const app = express();
app.use(cors());
app.use(express.json());
const getLeetCodeProfile = async (username) => {
  const query = {
    query: `
      query userProfile($username: String!) {
        matchedUser(username: $username) {
          username
          profile {
            realName
            ranking
            userAvatar
            school
            countryName
          }
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
        userContestRanking(username: $username) {
          rating
          globalRanking
          totalParticipants
          topPercentage
          attendedContestsCount
        }
      }
    `,
    variables: { username },
  };

  const res = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query),
  });

  const data = await res.json();
  return data.data;
};

app.get("/api/leetcode/:username", async (req, res) => {
  try {
    const data = await getLeetCodeProfile(req.params.username);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});
app.get("/api/leetcode2/:username", async (req, res) => {
  try {
    const leetcode = new LeetCode();
    const user = await leetcode.user(req.params.username);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch profile" });
  }
});



app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
app.use(express.static(path.join(__dirname,"../dist")));
 app.get("/",(req,res)=>{
   res.sendFile(path.join(__dirname,"../","dist","index.html"));
 })
