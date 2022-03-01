class Queue {
	constructor() {
		this.a = []
	}
	front() {
		if(this.a.length === 0) {
			console.log("Queue is empty.")
			return 
		} else return this.a[0]
	}
	enqueue(value) {
		this.a.push(value)
	}
	dequeue() {
		if(this.a.length === 0) {
			console.log("Queue is empty")
			return
		}
		this.a.shift()
	}
}

const q = new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)

for(let i = 0; i < 4; i++) {
	console.log(q.front())
	q.dequeue()
}