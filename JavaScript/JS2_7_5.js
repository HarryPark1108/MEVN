// 2.7.5 Promise.all

const async = (message, ret) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(message)
			console.log(new Data())
			resolve(ret)
		}, 2000)
	})
}

const promises = [async("async1_func_start", 1), async("async2_func_start", 2)]

Promise.all(promises)
 .then(data => {
	console.log(data)
})