class Stack {

    constructor (){
        this.data = [];
    }

    add(record){
        this.data.push(record);
    }

    remove(){
        this.data.pop();
    }

    peek(){
        return this.data[this.data.length - 1];
    }

}

const q = new Stack();

q.add(10);
q.add(20);

console.log(q);