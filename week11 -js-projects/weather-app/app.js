
const key="620549b806f64268a5c221842231102"
let data =fetch(`http://api.weatherapi.com/v1 `)
.then((data) => data.json())
.then((d) => {
    console.log(d);
})