// 2.7.4 2) error handling with "then"

const async1 = param => {
	return new Promise((resolve, reject) => {
		resolve(param * 2)
	})
}

const async2 = param => {
	return new Promise((resolve, reject) => {
		resolve(param * 2)
	})
}

async1(1)
	.then(async2)
	.then(result => {
		throw "Error"
		console.log(result)
	}, reason => {
		console.log(`This Promise is stopped for the ${reason}`)
	})
	
