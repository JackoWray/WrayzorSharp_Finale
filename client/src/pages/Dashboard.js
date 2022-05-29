import { useQuery } from "@apollo/client";

import { QUERY_PLAYERS } from "../utils/queries";

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_PLAYERS, {
    variables: {
      homeClub: "Melbourne",
      awayClub: "Western Bulldogs",
    },
  });

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul>
              {data.teamPlayerOptions.map((player, i) => (
                <div>
                  <h4>
                    {player.firstName} {player.lastName}
                  </h4>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
