// stacks are define as like array but blacnk 

let data = []   

let currentSize = data.length
let max = 5 

function push(val) {

    if(currentSize>= max) {
        alert('stack is full')
    }
    data[ currentSize ] = val
    currentSize+=1
}

function pop() { 

    if(currentSize > 0) {
        currentSize-=1
        data.length = currentSize
    } else {
        alert('stack is already empty')
    }
}

push(20)
push(2)
push(0)
push(20)
push(20)
// push(20)
// push(20)

pop()
pop()



console.log(data);

