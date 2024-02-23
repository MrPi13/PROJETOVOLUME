let resposta = document.getElementById("resposta")
let botao = document.getElementById("botao")
let comprimento = document.getElementById('comprimento').value
let altura = document.getElementById('altura').value
let arestaH = document.getElementById('arestaH').value
let raio = document.getElementById('raio').value

botao.addEventListener("click",()=>{
    let select = document.getElementById("select").value
    console.log(select)
    const calcular = new Calculo(comprimento,altura,arestaH,raio)
    let x = 0
    console.log(x)
    if (select = "esfera")
    {
        x = calcular.calculoEsfera()
    } else if (select = "cilindro")
    {
        x = calcular.calculoCilindro()
    } else if (select = "prisma")
    {
        x = calcular.calculoPrisma()
    } else if (select = "piramide")
    {
       x = calcular.calculoPiramide()
    } else if (select = "cone")
    {
        x = calcular.calculoCone()
    }
    resposta.innerHTML = ""
    resposta.innerHTML = "o volume do "+select+" é de "+x
})