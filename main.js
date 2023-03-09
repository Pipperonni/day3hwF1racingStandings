const positionContainer = document.getElementById('positions')
const namesContainer = document.getElementById('names')
const nationsContainer = document.getElementById('nations')
const sponsorsContainer = document.getElementById('sponsors')
const pointContainer = document.getElementById('point')


async function getF1Standings(y,r){
    const respones = await fetch(`https://ergast.com/api/f1/${y}/${r}/driverStandings.json`)
    const data = await respones.json()
    const data2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    console.log(data2)

    positionContainer.innerHTML =``
    namesContainer.innerHTML =``
    nationsContainer.innerHTML =``
    sponsorsContainer.innerHTML =``
    pointContainer.innerHTML =``

    for (let i = 0; i<7; i++){
        positionContainer.innerHTML += `
            <div class="standing" id="r${i}">
                <p class="driverInfo"> ${data2[i].position}</p>
            </div>
       `    
    }
    for (let i = 0; i<7; i++){
        namesContainer.innerHTML += `
            <div class="standing" id="r${i}">
                <p class="driverInfo">${data2[i].Driver.givenName} ${data2[i].Driver.familyName}</p>
            </div>
       `    
    }
    for (let i = 0; i<7; i++){
        nationsContainer.innerHTML += `
            <div class="standing" id="r${i}">
                <p class="driverInfo">${data2[i].Driver.nationality}</p>
            </div>
       `    
    }
    for (let i = 0; i<7; i++){
        sponsorsContainer.innerHTML += `
            <div class="standing" id="r${i}">
                <p class="driverInfo">${data2[i].Constructors[0].name}</p>
            </div>
       `    
    }
    for (let i = 0; i<7; i++){
        pointContainer.innerHTML += `
            <div class="standing" id="r${i}">
                <p class="driverInfo">${data2[i].points}</p>
            </div>
       `    
    }
}

const raceStandingsSearchForm = document.getElementById('raceStandingsSearch')

raceStandingsSearchForm.addEventListener('submit', function(e){
    e.preventDefault()
    const years = raceStandingsSearchForm.querySelector('#year')
    const rounds = raceStandingsSearchForm.querySelector('#round')
    getF1Standings(years.value, rounds.value)

    rounds.value = ""
    years.value = ""
})