class CircularQueue{
    constructor(capacity){
        if(typeof capacity !=="number" || capacity<1){
            throw new Error("Please specify capacity of Queue");
        }
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.length = 0;
        this.rear = 0;
        this.front = 0;
    }
    isFull(){
        return this.length === this.capacity;
    }
    isEmpty(){
        return this.length === 0;
    }
    enqueue(element){
        if(this.isFull()){
          throw Error("Queue is full");
        }
        this.items[this.rear] = element;
        this.rear = (this.rear+1) %this.capacity;
        this.length++;
    }
    dequeue(){
        if(this.isEmpty()){
            throw new Error("Queue is empty");
        }
        let temp = this.peek();
        delete this.items[this.front];
        this.front = (this.front+1)%this.capacity;
        this.length--;
        return temp;
    }
    peek(){
        return this.isEmpty()? undefined : this.items[this.front];
    }
    size(){return this.length};
    clear(){
        this.items = [];
        this.length = 0;
        this.rear = 0;
        this.front = 0;
    }
    toArray(){return this.items}
}
module.exports = CircularQueue;