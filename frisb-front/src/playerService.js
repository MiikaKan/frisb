let savedPlayers = [];

export default class PlayerService {
    static loadPlayers() {
        savedPlayers = JSON.parse(localStorage.getItem("players"));

        if (!savedPlayers) return [];
        else return [...savedPlayers];
    }

    static get players() {
        return savedPlayers;
    }

    static savePlayers(players) {
        console.log("save", players);
        localStorage.setItem(
            "players",
            JSON.stringify(players || savedPlayers)
        );
    }
}
