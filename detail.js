import data from './data.json' assert { type: 'JSON' };

function LoadDetailPage(petNum){
    const myData = JSON.parse(data);
    var showMyContent = document.getElementById("detailContent");
    var index = petNum - 1

    showMyContent.innerHTML += `
    <div id="content" class="col">
    <div class="album py-5 bg-light">
    <div class="container">
  <h1>${myData[index].name}</h1>
  <div>${myData[index].type}</div>
        <ul>
            <li>${myData[index].age}</li>
            <li>${myData[index].spaNeu}</li>
            <li>${myData[index].vaxStat}</li>
            <li>${myData[index].location}</li>
            <li>${myData[index].adoptable}</li>
            <li>${myData[index].animalType}</li>
        </ul>
  <hr />
  <h2>Image Gallery</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" src="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><image href=${myData[index].img1} width="250" height="250"/></svg>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" src="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><image href=${paginatidetailsPageonObject[petNum].img2} width="250" height="250"/></svg>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" src="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><image href=${myData[index].img3} width="250" height="250"/></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    `;
}
