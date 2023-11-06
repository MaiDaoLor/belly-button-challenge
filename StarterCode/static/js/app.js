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
    bar(ids[0])
});

// Create the Demographic Info


// // Create the bar chart
function bar(selectValue) {

    // Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    const samples = data.samples
    const sample = samples.filter(element => element.id == selectValue) [0]
    console.log(sample)
    
    let trace = [{
        y: sample.otu_ids.slice(0,10).map(otu_id => "OTU " + otu_id).reverse(),
        x: sample.sample_values.slice(0,10).reverse(),
        text: sample.otu_labels.slice(0,10).reverse(),
        type: "bar",
        orientation: "h"
    }];

    let layout = {
        height: 600,
        width: 800
    };

    Plotly.newPlot("bar", trace, layout)
});

}

// Create the bubble chart

let sampleValues = Object.values(data.samples[0].sample_values);
let otuIDs = Object.values(data.samples[0].otu_ids);
let otuLables = Object.values(data.samples[0].otu_labels);
//let metadata = data.metadata[0];

function bubbleChart(selectValue) {
    const bubble = [{
        y: sampleValues
        x: otuIDs
        text: sample.otu_labels,
        type: "bubble",
        mode: "markers",
        marker: {
            size: sampleValues,
            color: otuIDs,
            colorscale: 'YlGnBu'
        };
        
    }];

    let layout2 = {
        height: 400,
        width: 1200,
        margin: 
        {t: 25, 
        r: 25,
        l: 25,
        b: 25}
    };

    Plotly.newPlot("bubble", bubble, layout2)
};

// Function called by DOM changes
function optionChanged(option) {
bar(option)
}