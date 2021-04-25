class Queue {

    constructor (){
        this.data = [];
    }

    add(record){
        this.data.unshift(record);
    }

    remove(){
        this.data.pop();
    }

    peek(){
        return this.data[this.data.length - 1];
    }

}