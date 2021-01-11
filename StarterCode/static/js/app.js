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
    demoinfo(id)

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
            var indInfo = panel.append();
            indInfo.text([key, value]);
        });

    });

};

// function for plots
















init();


