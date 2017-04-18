/* Create a scatter plot of 1960 life expectancy (gdp) versus 2013 life expectancy (life_expectancy).*/

$(function() {
    // Graph margin settings
    var margin = {
        top: 10,
        right: 10,
        bottom: 150,
        left: 60
    };

    // SVG width and height
    var width = 960;
    var height = 500;

    // Graph width and height - accounting for margins
    var drawWidth = width - margin.left - margin.right;
    var drawHeight = height - margin.top - margin.bottom;

    /************************************** Create chart wrappers ***************************************/
    // Create a variable `svg` by selecting the element with id `vis` and appending an svg
    // Set the width and height to your `width` and `height` variables

        var svg = d3.select('#vis')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    // Append a `g` element to your svg in which you'll draw your bars. Store the element in a variable called `g`, and
    // Transform the g using `margin.left` and `margin.top`
        var g = svg.append('g')
        .attr('wdith', drawWidth)
        .attr('height', drawHeight)
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // Load data in using d3's csv function.
    d3.csv('data/prepped_data.csv', function(error, data) {

        /************************************** Defining scales ***************************************/
        // Find the maximum GDP value for the maximum of the x Scale, and multiply it by 1.05 (to add space)
            var xMax = d3.max(data, function(d){return +d.gdp})*1.05;

        // Find the minimum GDP value for the minimum of the x Scale, and multiply it by .85 (to add space)
            var xMin = d3.min(data, function(d){return +d.gdp}) * 0.85;


        // Use `d3.scaleLog` to define a variable `xScale` with the appropriate domain and range
            var xScale = d3.scaleLog()
            .domain([xMin, xMax])
            .range([0,drawWidth]);

        // Find the maximum life expectance value for the maximum of the y Scale, and multiply it by 1.05 (to add space)
            var yMax = d3.max(data, function(d){
                return +d.life_expectancy;
            }) * 1.05;

        // Find the minimum life expectance value for the minimum of the y Scale, and multiply it by .9 (to add space)
            var yMin = d3.min(data, function(d){
                return +d.life_expectancy;
            }) * 0.9;

        // Use `d3.scaleLinear` to define a variable `yScale` with the appropriate domain and range
            var yScale = d3.scaleLinear()
            .domain([yMin, yMax])
            .range([drawHeight,0]);

        /************************************** Defining axes ***************************************/

        // Define x axis using d3.axisBottom, assigning the scale as the xScale

            var xAxis = d3.axisBottom()
            .scale(xScale);

        // Define y axis using d3.axisLeft(), assigning the scale as the yScale
            var yAxis = d3.axisLeft()
            .scale(yScale);

        /************************************** Rendering axes and labels ***************************************/

        // Append a g to your SVG as an x axis label, specifying the 'transform' attribute to position it
        // Make sure to use the `.call` method to render the axis in the label
            var xAxisLabel = d3.select()
            .attr('transform', )
            .call()


        // Append a g to your SVG as a y axis label, specifying the 'transform' attribute to position it
        // Make sure to use the `.call` method to render the axis in the label
            var gY = svg.('g')

        // Append a text element to your svg to label your x axis, and place it in the proper location


        // Append a text element to your svg to label your y axis, and place it in the proper location


        /************************************** Data Join ***************************************/

        // Select all circles and bind data
            var circles = g.selectAll('circle').data(data);


        // Use the .enter() method to get your entering elements, and assign their positions
        // Assign a 'title' property equal to the 'country' property (for hovers)
            circles.enter()
            .append('circle')
            .attr('r', 15)
            .attr('cx', function(d){return xScale(d.gdp)})
            .attr('cy', function(d){return xScale(d.life_expectancy)})

        // Use the .exit() and .remove() methods to remove elements that are no longer in the data


        /* For easy hovers, let's use jQuery to select all circles and apply a tooltip
        If you want to use bootstrap, here's a hint:
        http://stackoverflow.com/questions/14697232/how-do-i-show-a-bootstrap-tooltip-with-an-svg-object
        */

    });
});