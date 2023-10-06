// Use the D3 library to read in samples.json from the URL
//Get the url
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

let data;

// Fetch the JSON data and console log it
d3.json(url).then(function(result) {
    data = result
    const ids = data.names
    const dropdownMenu = d3.select("#selDataset")
    //const optiontag = d3.create("option")
    //console.log(optiontag);
    for (let i = 0; i < ids.length; i++) {
        const id = ids[i]
        dropdownMenu.append("option").text(id)
    };

});

// Create the Demographic Info


// Create the bar chart
function bar(selectValue) {
    
    let trace = [{
        x:
        y:
        type: "bar",
        orientation: "h"
    }];

    let layout = {
        height: 600,
        width: 800
    };

    Plotly.newpot("bar", trace, layout)
}

// Create the bubble chart

// On change to the DOM, call getData()
//d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function optionChanged(option) {
//    let dropdownMenu = d3.select("")
console.log(option);
}