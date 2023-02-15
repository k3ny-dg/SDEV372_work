window.onload = loadData;

function loadData()
{
    let uri= "http://localhost:8080/ufos";
    let params = {
        method: "get",
        mode: "cors"
    }
    fetch(uri, params)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (json){
        console.log(json);
        showData(json);
});
}

function showData(ufos)
{
    let list = document.getElementById("list");
}
