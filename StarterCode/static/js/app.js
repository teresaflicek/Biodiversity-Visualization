// read in the samples.json file
function init() {


    d3.json("samples.json").then((samples) => {

        console.log(samples)
        console.log(samples.names)

        var dropdown = d3.select("#selDataset")

        samples.names.forEach(function(name){
            console.log(name)
            // <option value="cat">Cat</option>
            dropdown.append("option").text(name).attr("value", name)
        });
    });
};

function optionChanged(id){

    console.log(id)
}



















init();


