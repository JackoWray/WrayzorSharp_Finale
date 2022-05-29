import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { QUERY_TEAM, QUERY_PLAYERS } from "../utils/queries";

const Postion = ({ firstName, lastName, salary, positAvgs, score }) => {
  return <></>;
};

const Team = () => {
  const [teamPos, setTeamPos] = useState({
    fullBack: {},
    leftBackPocket: {},
    rightBackPocket: {},
    centreHalfBack: {},
    leftHalfBackFlank: {},
    rightHalfBackFlank: {},
    ruck: {},
    centre: {},
    rover: {},
    ruckRover: {},
    leftWing: {},
    rightWing: {},
    centreHalfFwd: {},
    leftHalfFwdFlank: {},
    rightHalfFwdFlank: {},
    fullFwd: {},
    leftFwdPocket: {},
    rightFwdPocket: {},
  });

  function PlayersQuery() {
    const { data } = useQuery(QUERY_PLAYERS, {
      variables: {
        homeClub: "Melbourne",
        awayClub: "Western Bulldogs",
      },
    });
    return data;
  }

  const { id } = useParams();

  function TeamQuery() {
    const { data } = useQuery(QUERY_TEAM, {
      variables: {
        teamId: id,
      },
    });
    return data;
  }

  const dataPlayers = PlayersQuery();
  // const dataTeam = TeamQuery();

  console.log(dataPlayers);
  // console.log(dataTeam);

  return (
    <div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Team;
