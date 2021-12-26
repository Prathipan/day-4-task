// task 1
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

if(obj1["name"] == obj2["name"]) {
    if(obj1["age"] == obj2["age"])
       {
           console.log("Both are equal")
       }
}


// task 2

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all",true);
request.send();
request.onload = function(){
    var data =JSON.parse(this.response);
    // console.log(data[0]);
    for(let i=0 ; i < data.length; i++) {
        console.log(data[i].flags);
    }
}

// task3
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all",true);
request.send();
request.onload = function(){
    var data =JSON.parse(this.response);
    // console.log(data[0]);
    for(let i=0 ; i < data.length; i++) {
        console.log(`Name : ${data[i].name}
            Region : ${data[i].region}
            Sub-region : ${data[i].subregion}
            Population : ${data[i].population}`);
    }
}