import shortid from "shortid";

let savedGames = [];

export default class GameService {
    static loadGames() {
        const games = JSON.parse(localStorage.getItem("games"));

        if (!games) {
            savedGames = [];
            return [];
        } else return [...savedGames];
    }

    static getGameData(gameid) {
        console.log(gameid, savedGames);
        let gameData = savedGames.find(x => x.gameid === gameid);
        if (!gameData) {
            gameData = {
                gameid: shortid.generate(),
                courseid: 0,
                players: [],
                rounds: 18,
            };
            console.log("push", gameid);
            savedGames.push(gameData);
        }
        return gameData;
    }

    static get games() {
        return savedGames;
    }

    static saveGames(games) {
        localStorage.setItem("players", JSON.stringify(games || savedGames));
    }
}
