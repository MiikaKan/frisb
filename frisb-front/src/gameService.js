import shortid from "shortid";

let savedGames = [];

export default class GameService {
    static loadGames() {
        const gamesData = localStorage.getItem("games");

        if (gamesData.length === 0) {
            savedGames = [];
            return savedGames;
        }

        savedGames = JSON.parse(gamesData);

        return [...savedGames];
    }

    static getGameData(gameid) {
        let gameData = savedGames.find(x => x.gameid === gameid);
        if (!gameData) {
            gameData = {
                gameid: shortid.generate(),
                courseid: 0,
                rounds: 18,
                players: [],
                scores: {},
                finished: false,
            };
            savedGames.push(gameData);
            this.saveGames(savedGames);
        }
        return gameData;
    }

    static setScoreForPlayer(gameId, playerId, round, score) {
        const gameData = this.getGameData(gameId);
        let playerScores = gameData.scores[playerId];

        if (playerScores === undefined) {
            playerScores = [].fill(null, 0, 18);
            playerScores[round] = score;
            gameData.scores[playerId] = playerScores;
        } else {
            playerScores[round] = score;
        }

        return gameData;
    }

    static finishGame(gameId) {
        const gameData = this.getGameData(gameId);
        gameData.finished = true;
        return gameData;
    }

    static get games() {
        return savedGames;
    }

    static saveGames(games) {
        if (typeof games === "undefined") games = savedGames;
        console.log("saving", games);
        localStorage.setItem("games", JSON.stringify(games));
    }
}
