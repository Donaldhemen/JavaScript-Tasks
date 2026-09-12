
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(data){
        let newNode = new Node(data);

        if(this.head == null){
            this.head = newNode;
        }
        else{
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    prepend(data){
        let newNode = new Node(data);
        let current = this.head;
        newNode.next = current;
        this.head = newNode;
        this.size++;
    }

    insertAt(data, position){
        
        if(position < 0 || position > this.size){
            return;
        }
         let newNode = new Node(data);
        if(position == 0){
            newNode.next = this.head;
            this.head = newNode;
        }
        else{
            let current = this.head;
            let counter = 0;
            while(counter < position - 1){
                current = current.next;
                counter++;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        this.size++;

    }
    removeAt(position){
        if(position < 0 || position >= this.size){
            return;
        }
        if(position == 0){
            this.head = this.head.next;
            this.size--;
            return;
        }
        let current = this.head;
        let counter = 0;
        while(counter < position - 1){
            current = current.next;
            counter++;
        }
        current.next = current.next.next;
        this.size--;
    }
    pop(){
        if(this.size == 0){
            return;
        }
        if(this.size == 1){
            this.head = null;
            this.size--;
            return;
        }
        let current = this.head;
        while(current.next.next != null){
            current = current.next;
        }
        current.next = null;
        this.size--;
    }
    replaceAt(data, position){
        if(position < 0 || position >= this.size){
            return;
        }
        let current = this.head;
        let counter = 0;
        while(counter < position){
            current = current.next;
            counter++;
        }
        current.data = data;
    }
    getAt(position){
        if(position < 0 || position >= this.size){
            return;
        }
        let current = this.head;
        let counter = 0;
        while(counter < position){
            current = current.next;
            counter++;
        }
        return current.data;
    }
}
module.exports = {LinkedList, Node}