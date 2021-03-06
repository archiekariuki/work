class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}
class Linkedlist{

    constructor(){
        this.head = null;
    }

    InsertFirst(data){
        this.head = new Node(data, this.head);
    }

    size(){
        let counter = 0;
        const node = this.head;

        while(node){
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head){
            return null;
        }
        let node = this.head;

        while(node){
            if(!node.next){
                return node;
            }
            node = node.next;
        }

    }


}