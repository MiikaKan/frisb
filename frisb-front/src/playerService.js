let savedPlayers = [];

export default class PlayerService {
    static loadPlayers() {
        savedPlayers = JSON.parse(localStorage.getItem("players"));

        if (!savedPlayers) {
            savedPlayers = [];
            return savedPlayers;
        } else return [...savedPlayers];
    }

    static get players() {
        return savedPlayers;
    }

    static savePlayers(players) {
        if (typeof players === "undefined") players = savedPlayers;
        console.log("saving players", players);
        savedPlayers = players;
        localStorage.setItem("players", JSON.stringify(players));
    }
}
