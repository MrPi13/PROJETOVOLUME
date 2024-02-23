class Calculo{
    constructor(comprimento,altura,arestaH,raio){
        this.comprimento = comprimento
        this.altura = altura
        this.arestaH = arestaH
        this.raio = raio
    }
    // Bryan
    calculoPrisma(){
        let calc = (this.comprimento * this.comprimento) * (this.altura)
        return calc.toFixed(2)
    }
    // Bryan
    calculoCilindro(){
        let calc = (3.14 * (this.raio^2)) * (this.altura)
        return calc.toFixed(2)
    }
    // Julian
    calculoEsfera(){
        let resultadoEsfera = 0
        resultadoEsfera = (4 * 3.14 * this.raio) / 3
        return resultadoEsfera.toFixed(2)
    }
    // Vitor
    calculoCone(){
        let calc = ((3.14 * this.raio^2) * this.altura) / 3
        return calc.toFixed(2)
    }
    // Vitor
    calculoPiramide(){
    let calc =  (this.arestaH * this.arestaH) * altura / 3
    return calc.toFixed(2)
    }
}