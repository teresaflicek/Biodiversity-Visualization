// function for initialization
function init() {

    // read in the samples.json file
    d3.json("samples.json").then((samples) => {

        // check if data loaded successfully
        console.log(samples)
        console.log(samples.names)

        // select the dropdown 
        var dropdown = d3.select("#selDataset");

        // function for appending the id to the dropdown
        samples.names.forEach(function (name) {
            console.log(name)
            dropdown.append("option").text(name).attr("value", name)
        });
    });
};

// function for the change event (when a new id is selected)
function optionChanged(id) {

    console.log(id)
    // demoinfo()

};

// function for demographic information from metadata
function demoinfo() {

    // read in the samples.json file
    d3.json("samples.json").then((samples) => {

        // create a variable for the demographic information
        var meta = samples.metadata;

        // check if data is loaded successfully
        console.log(meta)

        // filter metadata by id
        var idMeta = meta.filter(meta => meta.id.toString() === id)[0];

        // select the demographic information panel id
        var panel = d3.select("#sample-metadata");

        // clear the existing table when new id is chosen
        panel.html("");

        Object.entries(idMeta).forEach(([key, value]) => {

            // check if data is loaded successfully
            console.log(key);

            // append the data to the panel
            var indInfo = panel.append("h4");
            indInfo.text([key, value]);
        });

    });

};

// function for plots
function plots() {

    // read in the samples.json file
    d3.json("samples.json").then((samples) => {

        // create a variable for the samples information
        var samps = samples.samples;
        console.log(samps)

        // filter samples by id
        var idSample = samps.filter(samps => samps.id.toString() === id)[0];

        // create variable for sample_values
        
        // create variable for otu_ids

        // create variable for otu_labels

    });

};

// var trace1 = {
//     x: ['Liam', 'Sophie', 'Jacob', 'Mia', 'William', 'Olivia'],
//     y: [8.0, 8.0, 12.0, 12.0, 13.0, 20.0],
//     type: 'bar',
//     text: ['4.17 below the mean', '4.17 below the mean', '0.17 below the mean', '0.17 below the mean', '0.83 above the mean', '7.83 above the mean'],
//     marker: {
//       color: 'rgb(142,124,195)'
//     }
//   };

//   var data = [trace1];

//   var layout = {
//     title: 'Number of Graphs Made this Week',
//     font:{
//       family: 'Raleway, sans-serif'
//     },
//     showlegend: false,
//     xaxis: {
//       tickangle: -45
//     },
//     yaxis: {
//       zeroline: false,
//       gridwidth: 2
//     },
//     bargap :0.05
//   };

//   Plotly.newPlot('myDiv', data, layout);













init();


