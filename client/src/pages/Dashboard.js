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
            <>
              <div className="your-completed-teams">Your resulted teams:</div>
              <a href="/team">
                <div className="teamBtn">Melb v WB</div>
                <div className="teamBtn">16:10 16/03</div>
              </a>
              <br />
              <br />
              <br />
              <br />
              <a href="/create">
                <div className="create-new-team">Create New Team</div>
              </a>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
