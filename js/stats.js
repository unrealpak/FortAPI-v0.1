const apikey = "922a4174-91e8-4608-95ec-4ecb329352bb";
const url = "https://fortnite-api.com/v2/stats/br/v2?name=";



const search = document.getElementById('getName');
const x = document.getElementsByClassName('statcard');
x[0].style.display = "none";
search.addEventListener('click', event => {
    const ign = document.getElementById('playerName').value;

    fetch(url + ign, {
            method: "GET",
            headers: {
                "Authorization": apikey
            }
        })
        .then(resp => resp.json())
        .then(function(data) {
            x[0].style.display = "flex";
            //console.log(ign);
            console.log(data);
            //document.getElementById('response').innerHTML = ("Nimi " + data.data.account.name + "<br>" + "Voitot " + data.data.stats.all.overall.wins);
            document.getElementById('playerIgn').innerHTML = ign;
            document.getElementById('wins').innerHTML = data.data.stats.all.overall.wins;
            document.getElementById('win_perc').innerHTML = (data.data.stats.all.overall.winRate).toFixed(2);
            document.getElementById('kd').innerHTML = (data.data.stats.all.overall.kd).toFixed(2);
            document.getElementById('kpm').innerHTML = (data.data.stats.all.overall.killsPerMin).toFixed(2);
            document.getElementById('matches').innerHTML = (data.data.stats.all.overall.matches);
            document.getElementById('kills').innerHTML = (data.data.stats.all.overall.kills);
            document.getElementById('deaths').innerHTML = (data.data.stats.all.overall.deaths);
            document.getElementById('bp_level').innerHTML = (data.data.battlePass.level);

            //SOLO
            document.getElementById('solo_wins').innerHTML = data.data.stats.all.solo.wins;
            document.getElementById('solo_winperc').innerHTML = (data.data.stats.all.solo.winRate).toFixed(2);
            document.getElementById('solo_kd').innerHTML = (data.data.stats.all.solo.kd).toFixed(2);
            document.getElementById('solo_kpm').innerHTML = (data.data.stats.all.solo.killsPerMin).toFixed(2);
            document.getElementById('solo_matches').innerHTML = (data.data.stats.all.solo.matches);
            document.getElementById('solo_kills').innerHTML = (data.data.stats.all.solo.kills);
            document.getElementById('solo_deaths').innerHTML = (data.data.stats.all.solo.deaths);

            //DUO
            document.getElementById('duo_wins').innerHTML = data.data.stats.all.duo.wins;
            document.getElementById('duo_winperc').innerHTML = (data.data.stats.all.duo.winRate).toFixed(2);
            document.getElementById('duo_kd').innerHTML = (data.data.stats.all.duo.kd).toFixed(2);
            document.getElementById('duo_kpm').innerHTML = (data.data.stats.all.duo.killsPerMin).toFixed(2);
            document.getElementById('duo_matches').innerHTML = (data.data.stats.all.duo.matches);
            document.getElementById('duo_kills').innerHTML = (data.data.stats.all.duo.kills);
            document.getElementById('duo_deaths').innerHTML = (data.data.stats.all.duo.deaths);

            //SQUAD
            document.getElementById('squad_wins').innerHTML = data.data.stats.all.squad.wins;
            document.getElementById('squad_winperc').innerHTML = (data.data.stats.all.squad.winRate).toFixed(2);
            document.getElementById('squad_kd').innerHTML = (data.data.stats.all.squad.kd).toFixed(2);
            document.getElementById('squad_kpm').innerHTML = (data.data.stats.all.squad.killsPerMin).toFixed(2);
            document.getElementById('squad_matches').innerHTML = (data.data.stats.all.squad.matches);
            document.getElementById('squad_kills').innerHTML = (data.data.stats.all.squad.kills);
            document.getElementById('squad_deaths').innerHTML = (data.data.stats.all.squad.deaths);

        })

});