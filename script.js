// TODO: 
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
      response.json().then(function(data){
          console.log(data)
        let divNode = document.getElementById("container");
        for(let i =0; i<data.length; i++){
        divNode.innerHTML += 
        `<div class="astronaut">
        <div class="bio">
        <h3> ${data[i].firstName}</h3>
        <h3> ${data[i].lastName}</h3>
        <ul>
        <li> ${data[i].hoursInSpace}</li>
        <li> ${data[i].active}</li>
        <li> ${data[i].skills}</li>
    </ul>
    </div>
    <img class="avatar" src="${data[i].picture}">
    </div>`
        
        
    };
    });
  });
});


