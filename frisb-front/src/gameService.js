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
                players: [],
                rounds: 18,
            };
            savedGames.push(gameData);
            this.saveGames(savedGames);
        }
        return gameData;
    }

    static get games() {
        return savedGames;
    }

    static saveGames(games) {
        localStorage.setItem("games", JSON.stringify(games || savedGames));
    }
}
