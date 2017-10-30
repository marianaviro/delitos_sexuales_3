var margin = {top: 100, right: 100, bottom: 100, left: 100},
    width = 800,
    height = 800;

var x = d3.scale.ordinal().rangeBands([0, width/2]),
    z = d3.scale.linear().domain([1, 200])
      .interpolate(d3.interpolateRgb)
      .range([d3.rgb("#fee5d9"), d3.rgb('#99000d')]);

var svg = d3.select("body").append("svg")
    .attr("id", "graph1")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("margin-left", margin.left + "px")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("./data/delitos_sexuales.csv", function(links) {
  d3.json("./data/delitos.json", function(delitos) {
    var matrix = new Map(),
        nodes = delitos.nodes,
        n = nodes.length,
        cols = [];

    // Compute index per node.
    nodes.forEach(function(node, i) {
      node.index = i;
      node.count = 0;
      cols[node.name] = node;
      var row = {};

      nodes.forEach(function(j) {
        row[j.name] = {x: node.name, y: j.name, z: 0};
      });

      matrix[node.name] = row;
    });

    // Convert links to matrix; count character occurrences.
    links.forEach(function({ source, target }) {
      if (matrix[source][target].z < 200) {
        matrix[source][target].z += 1;
        cols[source].count += 1;
      } 
    });

    // The default sort order.
    x.domain(Object.keys(matrix));

    var row = svg.selectAll(".row")
        .data(Object.keys(matrix))
        .enter().append("g")
        .attr("class", "row")
        .attr("transform", function(d, i) { return "translate(0," + x(d) + ")"; })
        .each(row);

    row.append("line")
        .attr("x2", width);

    row.append("text")
        .attr("x", -6)
        .attr("y", x.rangeBand() / 2)
        .attr("dy", ".32em")
        .attr("text-anchor", "end")
        .text(function(d, i) { return nodes[i].name; });

    var column = svg.selectAll(".column")
        .data(Object.keys(matrix))
      .enter().append("g")
        .attr("class", "column")
        .attr("transform", function(d, i) { return "translate(" + x(d) + ")rotate(-90)"; })

    column.append("line")
        .attr("x1", -width);

    column.append("text")
        .attr("x", 6)
        .attr("y", x.rangeBand() / 2)
        .attr("dy", ".32em")
        .attr("text-anchor", "start")
        .text(function(d, i) { return nodes[i].name; });

    function row(key) {
      var row = matrix[key];
      var cell = d3.select(this).selectAll(".cell")
          .data(Object.keys(row).filter(function(d) { return matrix[key][d].z; }))
          .enter().append("rect")
            .attr("class", "cell")
            .attr("x", function(d) { return x(matrix[key][d].z); })
            .attr("width", x.rangeBand())
            .attr("height", x.rangeBand())
            .style("fill", function(d) { return z(matrix[key][d].z); })
            .attr("transform", function(d, i) { return "translate(" + x(d) + "," + x.rangeBand() + ")rotate(-90)"; })
            .on("mouseover", mouseover)
            .on("mouseout", mouseout);
    }

    function mouseover(p) {
      d3.selectAll(".row text").classed("active", function(d, i) { return nodes[i] == cols[p].name; });
      d3.selectAll(".column text").classed("active", function(d, i) { return i == p.x; });
    }

    function mouseout() {
      d3.selectAll("text").classed("active", false);
    }
  });
});
