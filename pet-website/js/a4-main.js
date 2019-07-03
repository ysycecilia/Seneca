var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

window.onload = function () {
    loadTableWithFilters(filterType, filterAgeMin, filterAgeMax);
}

function loadTableWithFilters(petType, minAge, maxAge) {
    var a = document.querySelector("#main-table-body");
    var tableRow;
    a.innerHTML = "";
    //filter by type
    for (var i = 0; i < petData.length; i++) {
        if (petType == petData[i].type) {
            
            tableRow = document.createElement("tr");
            var tableColumn1 = document.createElement("td");
            tableRow.appendChild(tableColumn1);  
            var image = document.createElement("img");
            image.setAttribute("src", petData[i].image.src);
            image.setAttribute("alt", petData[i].image.alt);
            image.setAttribute("height", petData[i].image.height);
            image.setAttribute("width", petData[i].image.width);
            tableColumn1.appendChild(image);
            var tableColumn2 = document.createElement("td");
            var header = document.createElement("h4");
            var header_text = document.createTextNode(petData[i].name);
            header.appendChild(header_text);
            tableColumn2.appendChild(header);
            var para = document.createElement("p");
            para.innerHTML = petData[i].description;
            tableColumn2.appendChild(para);
            var span = document.createElement("span");
            var span_text = document.createTextNode("Age: " + petData[i].age + " years old.");
            span.appendChild(span_text);
            tableColumn2.appendChild(span);
            tableRow.appendChild(tableColumn2); 
            a.appendChild(tableRow);
            
        }
    } 
    
    // filter by Age
    for (var j = 0; j < petData.length; j++) {
        if (petType == "" && minAge <= petData[j].age && maxAge >= petData[j].age) {
            tableRow = document.createElement("tr");
            var tableColumn1 = document.createElement("td");
            tableRow.appendChild(tableColumn1);  
            var image = document.createElement("img");
            image.setAttribute("src", petData[j].image.src);
            image.setAttribute("alt", petData[j].image.alt);
            image.setAttribute("height", petData[j].image.height);
            image.setAttribute("width", petData[j].image.width);
            tableColumn1.appendChild(image);
            var tableColumn2 = document.createElement("td");
            var header = document.createElement("h4");
            var header_text = document.createTextNode(petData[j].name);
            header.appendChild(header_text);
            tableColumn2.appendChild(header);
            var para = document.createElement("p");
            para.innerHTML = petData[j].description;
            tableColumn2.appendChild(para);
            var span = document.createElement("span");
            var span_text = document.createTextNode("Age: " + petData[j].age + " years old.");
            span.appendChild(span_text);
            tableColumn2.appendChild(span);
            tableRow.appendChild(tableColumn2);
            a.appendChild(tableRow);
        }
    } 
}


function filterDog() {
    filterType = "dog";
    loadTableWithFilters(filterType, filterAgeMin, filterAgeMax);
}

function filterCat() {
    filterType = "cat";
    loadTableWithFilters(filterType, filterAgeMin, filterAgeMax);
}

function filterBird() {
    filterType = "bird";
    loadTableWithFilters(filterType, filterAgeMin, filterAgeMax);
}

function filter_zero_1() {
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters(filterType, filterAgeMin, filterAgeMax);
}

function filter_1_3() {
    filterType = "";
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters(filterType, filterAgeMin, filterAgeMax);
}

function filter_4_plus() {
    filterType = "";
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters(filterType, filterAgeMin, filterAgeMax);
}

function filterAllPets() {
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters(filterType, filterAgeMin, filterAgeMax);
}

