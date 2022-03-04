const messages = [
    "Yojan",
    "Ana",
    "Yessica",
    "Diana",
    "Laura"
];

const randomMsg =()=>{
    const messagesR = messages[Math.floor(Math.random() * messages.length)];
    console.log(messagesR);
}

module.exports ={randomMsg}
const names = ['pablo, maria, andres, juan']
class myArray{
    constructor(){
        this.data = {}
        this.length = 0
    }
    get(){
        return this.data[this.length]
    }
    push(item){
        this.data[this.length] = item
        this.length++
        return this.data
    }
    pop(){
        const lastObject = this.data[this.length -1];
        delete this.data[this.length -1]
        this.length--
        return lastObject;
    }
    delete(index){
        const item = this.data[index];
        this.shiftIndex(index)
        return item;
    }
    shiftIndex(index){
        for(let i = index; i<this.length - 1; i++){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length -1]
        this.length--
    }
}

const array = new myArray();

array.push("juan");
array.push('camila');
array.push('felipe');
array.push('giselle');
array.pop()
array.delete(2)
console.log(array);

