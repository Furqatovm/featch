

// const http = new XMLHttpRequest();
// http.addEventListener("readystatechange", ()=>{
//     console.log(http);
//     if(http.readyState === 4){
//         console.log(JSON.parse(http.response));
//     }
// });
// http.open("GET", "https://jsonplaceholder.typicode.com/users");
// http.send();

// 200 ma'lumot get
// 201 edit delete post

// 404 error not found
// 500 interval server error

// 403 Forbidden
// login 403 token expired

let cards =document.querySelector(".lists");

function getData(){
    const http =new XMLHttpRequest();

    return new Promise((res, rej) =>{
        http.addEventListener("readystatechange", ()=> {
            if(http.readyState ===4 && http.status === 200){
                res(JSON.parse(http.response));
            } else if (http.readyState ===4){
                rej("Opps nimadir xato ketdi");
            }
        });
        http.open("GET", "https://jsonplaceholder.typicode.com/users");

        http.send();
    });
}

getData()
.then((data) =>addUi(data))
.catch((error) => console.log(error));

function addUi(data){
    data.forEach((elemen) => {
        let div =document.createElement("div");
        div.classList.add("card");

        div.innerHTML =`
            <p>Id: ${elemen.id}</p>
            <p>Name: ${elemen.name}</p>
            <p>Email: ${elemen.email}</p>
        `;

        cards.append(div);
    })
}