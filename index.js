var currentPage = 1;
var CountPerEachPage = 6;

const paginationObject  = [
    {
      src: "pictures/dog1/pic1.jpg",
      type: "American Bulldog cross",
      details: ["Male - 3Yrs 4Mths 4Wks (approx)","Location: Kenton county","Available for adoption: yes"],
    },
    {
      src: "pictures/dog2/pic1.jpg",
      type: "Boxer cross",
      details: ["Female - 2Yrs 2Mths 4Wks (approx)","Location: Kenton county","Available for adoption: yes"],
    },
    {
      src: "pictures/dog3/pic1.jpg",
      type: "Domestic Short Hair cross",
      details: ["Male - 1Yrs 5Mths 2Wks (approx)","Location: Kenton county","Available for adoption: yes"],
    },
    {
      src: "pictures/dog4/pic1.jpg",
      type: "Corgie mixed Siberian Husky",
      details: ["Male - 1Yrs 8Mths 3Wks","Location: Kenton county","Available for adoption: yes"],
    },
    {
      src: "pictures/dog5/pic1.jpg",
      type: "Coonhound cross",
      details: ["Male - 2Yrs 1Mths 1Wks (approx)","Location: Kenton county","Available for adoption: yes"],
    },
    {
      src: "pictures/dog6/pic1.jpg",
      type: "American Pit Bull cross",
      details: ["Male - 2Yrs 3Wks (approx)","Location: Kenton county","Available for adoption: yes"],
    },
    {
      src: "pictures/dog7/pic1.jpg",
      type: "American Pit Bull mixed Terrier",
      details: ["Male - 3Yrs 10Mths 4Wks","Location: Kenton county","Available for adoption: yes"],
    },
    {
      src: "pictures/dog8/pic1.jpg",
      type: "American Pit Bull cross",
      details: ["Male - 3Yrs 1Wks (approx)","Location: Kenton county","Available for adoption: yes"],
    },
    {
      src: "pictures/dog9/pic1.jpg",
      type: "Beagle mixed Terrier",
      details: ["Female - 10Yrs 2Mths 1Wks (approx)","Location: Kenton county","Available for adoption: yes"],
    },
    {
      src: "pictures/dog10/pic1.jpg",
      type: "Beagle cross",
      details: ["Female - 5Yrs (approx)","Location: Kenton county","Available for adoption: yes"],
    },
    {
      src: "pictures/dog11/pic1.jpg",
      type: "Boxer mixed Pit Bull",
      details: ["Female - 7Yrs 5Mths 3Wks (approx)","Location: Kenton county","Available for adoption: yes"],
    },
    {
      src: "pictures/dog12/pic1.jpg",
      type: "Boxer mixed Mastiff",
      details: ["Male - 2Yrs 5Mths 3Wks (approx)","Location: Kenton county","Available for adoption: yes"],
    },
  ];

  function getPereviousPage() {
    if (currentPage > 1) {
    currentPage--;
    validateEachPage(currentPage);
    }
    }
    //function for go to next page
    function getNextPage() {
    if (currentPage < numberOfPages()) {
    currentPage++;
    validateEachPage(currentPage);
    }
    }
    //function for validating real time condition like if move to last page, last page disabled etc
    function validateEachPage(paginationPage) {
    var nextPage = document.getElementById("nextPage");
    var previousPage = document.getElementById("previousPage");
    var showMyContent = document.getElementById("content");
    var paginationPage_span = document.getElementById("paginationPage");
    //validating pages based on page count
    if (paginationPage < 1)
    paginationPage = 1;
    if (paginationPage > numberOfPages())
    paginationPage = numberOfPages();
    showMyContent.innerHTML = "";
    for (var i = (paginationPage - 1) * CountPerEachPage; i < (paginationPage * CountPerEachPage); i++) {
    showMyContent.innerHTML += `
      <div class="card shadow-sm">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="225" src="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><image href=${paginationObject[i].src} width="250" height="250"/></svg>
        <div class="card-body">
          <p class="card-text">${paginationObject[i].details[0]}</p>
          <p class="card-text">${paginationObject[i].details[1]}</p>
          <p class="card-text">${paginationObject[i].details[2]}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button id="button${i}" type="button" class="btn btn-sm btn-outline-secondary" onlick="document.location='assignment_02/detail.html'">View</button>
            </div>
          <small class="text-muted">${paginationObject[i].type}</small>
          </div>
        </div>
      </div>
    `;
    }
    paginationPage_span.innerHTML = paginationPage;
    if (paginationPage == 1) {
    previousPage.style.visibility = "hidden";
    } else {
    previousPage.style.visibility = "visible";
    }
    if (paginationPage == numberOfPages()) {
    nextPage.style.visibility = "hidden";
    } else {
    nextPage.style.visibility = "visible";
    }
    }
    //function per number of Pages
    function numberOfPages() {
    return Math.ceil(paginationObject.length / CountPerEachPage);
    }
    //loading al JavaScript functions functionality
    window.onload = function() {
    validateEachPage(1);
    };

    function loadDetail() {
      window.location.href = "C:\Users\hunte\OneDrive\Desktop\School\ASE-220 Application Development\Week 3 - Fundamentals of JavaScript\assignment_02\detail.html";
    };