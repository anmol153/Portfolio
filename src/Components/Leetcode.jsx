import { useEffect, useState } from 'react';

const LeetcodeCom = () => {
  const [profile, setProfile] = useState(null);
  const [profile1, setProfile1] = useState(null);

  useEffect(() => {
    fetch("https://portfolio-orxx.vercel.app/api/leetcode/anmoldhima")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("Profile fetch error", err));

    fetch("https://portfolio-orxx.vercel.app/api/leetcode2/anmoldhima")
      .then((res) => res.json())
      .then((data) => setProfile1(data))
      .catch((err) => console.error("Rating fetch error", err));
  }, []);

  if (!profile || !profile1) {
    return (
      <span className="animate-pulse text-2xl rounded-full text-transparent border-slate-400 border-4">
        ......
      </span>
    );
  }

  const { matchedUser } = profile;
  const { profile: userProfile, submitStatsGlobal } = matchedUser;
  const contest = profile.userContestRanking;

  const acStats = submitStatsGlobal.acSubmissionNum.reduce((acc, stat) => {
    acc[stat.difficulty.toLowerCase()] = stat.count;
    return acc;
  }, {});

  return (
    <div className="w-full px-4 sm:px-8 py-10 max-w-6xl m-auto">
      <div className="bg-gradient-to-b from-purple-950 to-purple-900 rounded-2xl p-[2px]">
        <div className="bg-gray-900 text-white rounded-2xl shadow-xl p-6 space-y-8">

          {/* Title */}
          <div className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Leetcode
          </div>

          {/* Profile & Contest */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Contest Info */}
            <div className="w-full p-4 rounded-xl border-4 border-black">
              {contest ? (
                <div className="flex flex-row justify-evenly">
                  <div className="flex flex-col bg-black p-4 md:p-5 rounded-lg items-center text-center">
                    <span className="bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text font-bold text-lg">Rating</span>
                    <span className="bg-gradient-to-r from-purple-700 to-pink-500 text-transparent bg-clip-text font-bold text-4xl md:text-6xl">
                      {contest.rating.toFixed(0)}
                    </span>
                  </div>
                  <div className="flex flex-col bg-black p-4 md:p-5 rounded-lg items-center text-center">
                    <span className="bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text font-bold text-lg">Top %</span>
                    <span className="bg-gradient-to-r from-purple-700 to-pink-500 text-transparent bg-clip-text font-bold text-4xl md:text-6xl">
                      {contest.topPercentage.toFixed(0)}%
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400 text-sm text-center">No contest history.</p>
              )}
            </div>

            {/* Profile Info */}
            <div className="w-full p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 border-4 border-black">
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold text-purple-300 break-words">{matchedUser.username}</h1>
                <a href="https://leetcode.com/u/anmoldhima/" target="_blank" className="text-sm text-gray-300 break-words">
                  {userProfile.realName}
                </a>
              </div>
              <a href="https://leetcode.com/u/anmoldhima/" target="_blank" className='z-[50]'>
                <img
                  src={userProfile.userAvatar}
                  alt="avatar"
                  className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full bg-gradient-to-b from-red-500 via-green-500 to-blue-500 p-[3px] shadow-md"
                />
              </a>
            </div>
          </div>

          {/* Submission Stats */}
          <div className="w-full p-4 rounded-xl bg-black border-4 border-black">
            <div className="flex flex-wrap justify-evenly gap-6">
              {["easy", "medium", "hard"].map((level) => (
                <div key={level} className="flex flex-col p-5 rounded-lg items-center text-center">
                  <span className="bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text font-bold text-lg capitalize">
                    {level}
                  </span>
                  <span className="bg-gradient-to-r from-purple-700 to-pink-500 text-transparent bg-clip-text font-bold text-4xl md:text-5xl">
                    {acStats[level]}
                  </span>
                </div>
              ))}
              <div className="flex flex-col p-5 rounded-lg items-center text-center">
                <span className="bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text font-bold text-lg">
                  Total
                </span>
                <span className="bg-gradient-to-r from-purple-700 to-pink-500 text-transparent bg-clip-text font-bold text-4xl md:text-5xl">
                  {acStats.easy + acStats.medium + acStats.hard}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeetcodeCom;
