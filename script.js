window.addEventListener("load", function () {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {

        response.json().then(function (json) {
            console.log(json);
            let container = document.getElementById("container");

            // Add number of astronauts
            container.innerHTML = `<p>Number of astronauts: ${json.length}</p>`;

            // Add each astronaut's info
            for (let i = 0; i < json.length; i++) {
                let astronaut = json[i];

                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}">
                </div>
                `;

                // If current astonaut is active, make active <li> green
                if (astronaut.active) {
                    let activeElement = document.querySelector("div[class=astronaut]:last-child").querySelector("li:nth-of-type(2)");
                    activeElement.setAttribute("style", "color: green");
                }
            }
        });
    });
});

