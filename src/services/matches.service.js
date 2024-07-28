import {
  handleResponse,
  handleError,
  getRequestOptions,
} from "../utils/apiUtils";

import { matchesResolvers } from "myracketpartner-commons";

const API_URL = `${process.env.REACT_APP_API_URL}`;

async function matches() {
  const requestOptions = getRequestOptions("GET");

  return await fetch(
    `${API_URL + matchesResolvers.getMatches()}`,
    requestOptions,
  ).then(handleResponse, handleError);
}

async function matchDetails(matchId) {
  const requestOptions = getRequestOptions("GET");

  return await fetch(
    `${API_URL + matchesResolvers.getMatchDetails(matchId)}`,
    requestOptions,
  ).then(handleResponse, handleError);
}

async function matchDetailsHeadToHead(players) {
  const requestOptions = getRequestOptions("GET");
  console.log(players);
  return await fetch(
    `${API_URL + matchesResolvers.getMatchDetailsHeadToHead(players)}`,
    requestOptions,
  ).then(handleResponse, handleError);
}

const matchesService = {
  matches,
  matchDetails,
  matchDetailsHeadToHead,
};

export default matchesService;
