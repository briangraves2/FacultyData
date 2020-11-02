var getPicture = function(employees)
{return (employees.photo) }

d3.select("body")
.selectAll("img")
.data(employees)
.enter()
.append("img").src(getPicture)

