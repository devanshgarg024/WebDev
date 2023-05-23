fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
  .then((response) => response.json())
  .then((data) => {
    data.sort((a, b) => b.points - a.points);

    const upper = data.slice(0, 3);
    const lower = data.slice(3, 9);
 
    console.log(upper);
    console.log(lower);

    const winnerNamesElements = document.getElementsByClassName("upperName");
    winnerNamesElements[0].textContent = `${upper[1].name} - ${upper[1].points}`;
    winnerNamesElements[1].textContent = `${upper[0].name} - ${upper[0].points}`;
    winnerNamesElements[2].textContent = `${upper[2].name} - ${upper[2].points}`;

    const profileCircles = document.getElementsByClassName("upperCircle");
    profileCircles[0].style.backgroundImage = `url(${upper[1].avatar})`;
    profileCircles[1].style.backgroundImage = `url(${upper[0].avatar})`;
    profileCircles[2].style.backgroundImage = `url(${upper[2].avatar})`;

    let tableData = "";
    for (let index = 0; index < lower.length; index++) {
      const values = lower[index];
      const position = index + 4;
      tableData += `
     

     
<div class="lowerContainer">

<h4 class ="number">${position}</h4>
<div class="lowerCircle">
<div class="avatar-image" style="background-image: url(${values.avatar})"></div>
</div>
<h4 class="score">${values.points}</h4>
<h4 class="lowerName">${values.name}</h4>

</div>
      
      
      
      `;
    }

    document.getElementsByClassName("otherContainers")[0].innerHTML = tableData;
  })
  .catch((error) => {
    console.log("Error fetching data:", error);
  });
