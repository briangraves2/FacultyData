var getfullName = function(employees)
{return (employees.firstName + " " + employees.lastName) }

d3.select("body")
.selectAll("h2")
.data(employees)
.enter()
.append("h2").text(getfullName)