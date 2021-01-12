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

        // call funtions for plots and demographic information
        demoinfo(samples.names);
        plots(samples.names);
    });
};

// function for the change event (when a new id is selected)
function optionChanged(name) {

    console.log(name)
    demoinfo(name)
    plots(name)
};

// function for demographic information from metadata
function demoinfo(name) {

    // read in the samples.json file
    d3.json("samples.json").then((samples) => {

        // create a variable for the demographic information
        var meta = samples.metadata;

        // check if data is loaded successfully
        console.log(meta)
        console.log(name)
        // filter metadata by id
        var idMeta = meta.filter(demoInfo => demoInfo.id == name)[0];
        console.log(idMeta)
        // select the demographic information panel id
        var panel = d3.select("#sample-metadata");

        // clear the existing table when new id is chosen
        panel.html("");

        // loop through the data and render the table with the correct values
        Object.entries(idMeta).forEach(([key, value]) => {

            // check if data is loaded successfully
            console.log(`key ${key}`);

            // append the data to the panel
            panel.append("h6").text(`${key}: ${value}`);
        });

    });

};

// function for plots (top 10 OTUs per id)
function plots(name) {

    // read in the samples.json file
    d3.json("samples.json").then((data) => {

        // create a variable for the samples information
        var samps = data.samples;
        console.log(samps)

        // filter samples by id
        var idSample = samps.filter(sampID => sampID.id == name)[0];
        console.log(idSample)

        // create variable for sample_values
        var sampleValues = idSample.sample_values;
        console.log(sampleValues)
        
        // create variable for otu_ids
        var otuIds = samps.otu_ids;

        // create variable for otu_labels
        var labels = samps.otu_labels;

        // map the otu Id
        var yticks = otuIds.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();

        // create trace variable for bar plot
        var trace1 = {
            x: sampleValues.slice(0,10),
            y: otuIds,
            type: 'bar',
            text: yticks,
            orientation: 'h'
        };

        // create data variable 
        var data1 = [trace1];

        // create layout variable for bar plot
        var layout1 = {
            title: 'Top 10 OTUs',
            font: {
                family: 'Raleway, sans-serif'
            },
            showlegend: false,
            xaxis: {
                tickangle: -45
            },
            yaxis: {
                zeroline: false,
                gridwidth: 2
            },
            bargap: 0.05
        };

        // plot the bar plot
        Plotly.newPlot('bar', data1, layout1);

        // create the trace variable for the bubble chart
        var trace2 = {
            x: otuIds,
            y: sampleValues,
            text: labels,
            marker: {
                size: sampleValues,
                color: otuIds
            }
        };

        // create the data variable for the bubble chart
        var data2 = [trace2]

        // create layout variable for bubble chart
        var layout2 = {
            title: 'Sample OTUs',
            showlegend: false,
            height: 600,
            width: 600
        };

        // plot the bubble chart
        Plotly.newPlot('bubble', data2, layout2);

    });

};


// BUBBLE CHART
// var trace1 = {
//     x: [1, 2, 3, 4],
//     y: [10, 11, 12, 13],
//     text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
//     mode: 'markers',
//     marker: {
//         color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)', 'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
//         size: [40, 60, 80, 100]
//     }
// };

// var data = [trace1];

// var layout = {
//     title: 'Bubble Chart Hover Text',
//     showlegend: false,
//     height: 600,
//     width: 600
// };

// Plotly.newPlot('myDiv', data, layout);


// BAR CHART PLOTLY
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


