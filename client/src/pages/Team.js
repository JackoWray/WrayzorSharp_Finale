import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
// import Position from "../components/Position";

import { QUERY_TEAM, QUERY_TEAM_PLAYERS_CDId } from "../utils/queries";

const Position = ({ player }) => {
  const { data, loading } = useQuery(QUERY_TEAM_PLAYERS_CDId, {
    variables: {
      playerId: player,
    },
  });

  if (loading) {
    return <div>Loding...</div>;
  }

  const playerData = data.playerByCDId;

  const styles = {
    width: "320px",
    height: "76px",
    backgroundColor: "#9caf88 ",
    alignSelf: "center",
    justifyContent: "center",
    boxShadow: "0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)",
  };
  return (
    <div style={styles} className="player-list">
      <div>
        {playerData.firstName} {playerData.lastName}
      </div>
      <span>{playerData.club}</span>
      <span className="score-bigger">
        {" "}
        | {Math.round(Math.random() * 48 + 16)}
      </span>
      <div>${playerData.salary}</div>
    </div>
  );
};

const GridArea = ({ children }) => {
  const styles = {
    width: "50vw",
    display: "grid",
    gridTemplateColumns: "3fr 2fr 2fr 1fr 2fr 2fr 2fr 2fr 2fr 1fr 2fr 2fr 3fr",
    rowGap: "1rem",
    backgroundColor: "#7c987c",
    borderRadius: "44%",
    padding: "80px 0",
  };
  return <div style={styles}>{children}</div>;
};

const GridRow = ({ start, end, center, children }) => {
  const styles = {
    display: "grid",
    gridTemplateColumns: `${center ? "1fr 1fr" : "1fr 1fr 1fr"}`,
    gridColumn: `${start}/${end}`,
    justifyItems: "center",
    gridGap: "1rem",
  };
  return <div style={styles}>{children}</div>;
};

const Team = () => {
  // const [teamPos, setTeamPos] = useState({
  //   fullBack: {},
  //   leftBackPocket: {},
  //   rightBackPocket: {},
  //   centreHalfBack: {},
  //   leftHalfBackFlank: {},
  //   rightHalfBackFlank: {},
  //   ruck: {},
  //   centre: {},
  //   rover: {},
  //   ruckRover: {},
  //   leftWing: {},
  //   rightWing: {},
  //   centreHalfFwd: {},
  //   leftHalfFwdFlank: {},
  //   rightHalfFwdFlank: {},
  //   fullFwd: {},
  //   leftFwdPocket: {},
  //   rightFwdPocket: {},
  // });

  const { data } = useQuery(QUERY_TEAM, {
    variables: {
      teamId: "62943a624b03c99d2048b60e",
    },
  });

  const team = data?.teamById;

  console.log(data);

  // const teamById = data?.myquery?.teamById;

  // const { data } = useQuery(QUERY_TEAM_PLAYERS, {
  //   variables: {
  //     teamPlayerId: "62943a624b03c99d2048b60e",
  //   },
  // });

  // const { data } = useQuery(QUERY_TEAM_PLAYERS_CDId, {
  //   variables: {
  //     playerId: "CD_",
  //   },
  // });

  // setTeamPos({
  //   fullBack: { ...data[5] },
  //   leftBackPocket: { ...data[0] },
  //   rightBackPocket: { ...data[1] },
  //   centreHalfBack: { ...data[2] },
  //   leftHalfBackFlank: { ...data[3] },
  //   rightHalfBackFlank: { ...data[4] },
  //   ruck: { ...data[6] },
  //   centre: { ...data[7] },
  //   rover: { ...data[8] },
  //   ruckRover: { ...data[9] },
  //   leftWing: { ...data[10] },
  //   rightWing: { ...data[11] },
  //   centreHalfFwd: { ...data[12] },
  //   leftHalfFwdFlank: { ...data[13] },
  //   rightHalfFwdFlank: { ...data[14] },
  //   fullFwd: { ...data[15] },
  //   leftFwdPocket: { ...data[16] },
  //   rightFwdPocket: { ...data[17] },
  // });

  // function PlayersQuery() {
  //   const { data } = useQuery(QUERY_PLAYERS, {
  //     variables: {
  //       homeClub: "Melbourne",
  //       awayClub: "Western Bulldogs",
  //     },
  //   });
  //   return data;

  // const { id } = useParams();

  // function TeamQuery() {
  //   const { data } = useQuery(QUERY_TEAM, {
  //     variables: {
  //       teamId: id,
  //     },
  //   });
  //   return data;
  // }

  // const dataPlayers = PlayersQuery();
  // const dataTeam = TeamQuery();

  // console.log(dataPlayers);
  // console.log(dataTeam);

  return (
    <div className="player-list">
      {team &&
        team.players.map(({ _id, player }) => (
          <Position key={_id} player={player} />
        ))}
    </div>
    // <GridArea>
    //   <GridRow start={3} end={12}>
    //     <Position justified={"start"} />
    //     <Position justified={"center"} />
    //     <Position justified={"end"} />
    //   </GridRow>
    //   <GridRow start={2} end={13}>
    //     <Position justified={"start"} />
    //     <Position justified={"center"} />
    //     <Position justified={"end"} />
    //   </GridRow>
    //   <GridRow start={1} end={14}>
    //     <Position justified={"start"} />
    //     <GridRow start={2} end={3} center={true}>
    //       <Position justified={"center"} />
    //       <Position justified={"center"} />
    //       <Position justified={"center"} />
    //       <Position justified={"center"} />
    //     </GridRow>
    //     <Position justified={"end"} />
    //   </GridRow>
    //   <GridRow start={2} end={13}>
    //     <Position justified={"start"} />
    //     <Position justified={"center"} />
    //     <Position justified={"end"} />
    //   </GridRow>
    //   <GridRow start={3} end={12}>
    //     <Position justified={"start"} />
    //     <Position justified={"center"} />
    //     <Position justified={"end"} />
    //   </GridRow>
    // team.players.map(({ _id, player }) => <Position player={player} />)
    /* </GridArea> */
  );
};

export default Team;
