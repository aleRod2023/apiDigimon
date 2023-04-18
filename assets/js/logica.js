function mostrarMensaje() {
    document.getElementById('caja2').style.display = "block";
}

function ocultarMensaje() {
    document.getElementById('caja2').style.display = "none";
}

function cambiarFondo() {
    document.getElementById('botonDigimon').style.backgroundColor = "black";
}

var contenido = document.querySelector("#contenido")

fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.json() )
    .then(datos => {
        tabla(datos)
    })

function tabla(datos) {
    contenido.innerHTML = ""
    for (let temp of datos) {
        contenido.innerHTML += `
            <tr>
                <th scope="row">${temp.name}</th>
                <td><img src="${temp.img}" width="50px" height="50px"</td>
                <td>${temp.level}</td>
            </tr>
        `
        if (temp.name == 10) {
            break
        }
    }
}

var form = document.getElementById("consulta")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    var inputForm = document.getElementById("inputDigimon").value
    console.log(inputForm)

    fetch(`https://digimon-api.vercel.app/api/digimon/name/${inputForm}`)
    .then(response => response.json())
        .then(data => {
            console.log(data)
            digimonInyection(data)
        })

})
    
function digimonInyection(buscarDigimon) {
    
    document.getElementById("capturaDigimon").style.display = "none"
    var card = document.getElementById("card1")
    card.innerHTML = ""
    for (var digimon of buscarDigimon) {
        card.innerHTML += `
        <div class="card1 mb-5 mx-auto" style="width: 18rem";>
            <img src="${digimon.img}" class="card-img-top" alt="">
            <div class="card-body">
                <ul class="list-group list-group-flush" style="width: 18rem">
                        <li class="list-group-item">NAME: ${digimon.name}</li>
                        <li class="list-group-item">LEVEL ${digimon.level}:</li>
                </ul>          
            </div>
        </div>
        `
    }
}
