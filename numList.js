var getlastName = function(employees)
{return (employees.lastName) }

d3.select("body")
.selectAll("ol")
.data(employees)
.enter()
.append("ol").text(getlastName)