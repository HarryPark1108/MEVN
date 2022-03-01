// 2.7.4 3) error handling with "catch"

const async1 = param => {
	return new Promise((resolve, reject) => {
		resolve(param * 2)
	})
}

const async2 = param => {
	return new Promise((resolve, reject) => {
		throw "Error"
		resolve(param * 2)
	})
}

async1(1)
	.then(async2)
	.then(result => {
		console.log(result)
		throw "Error"
	})
	.catch(reason => {
		console.log(`This Promise is stopped for the ${reason}`)
	})
	.finally(() => {
		console.log("This Logic must be executed after Promise")
	})
	
