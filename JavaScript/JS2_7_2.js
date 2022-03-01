// 2.7.2 callback & promise

const job_1 = () => {
	const b = Math.random() * 100;
	setTimeout(() => {
		console.log(1);
		job_2();
	}, b)
};

const job_2 = () => {
	const b = Math.random() * 100;
	setTimeout(() => {
		console.log(2);
		job_3();
	}, b)
};

const job_3 = () => {
	const b = Math.random() * 100;
	setTimeout(() => {
		console.log(3);
	}, b)
};

job_1();


// promise
const a = (c = "naver") => {
	return new Promise((resolve, reject) => {
		// async function logic
		setTimeout(() => {
			resolve(`Love from ${c}`)
		}, 1000)
	});
};

a().then(ret => {
	console.log(ret);
	return a('Kakao');
}).then(ret => {
	console.log(ret)
})


// 2.7.1 Example -> Promise

const a1 = () => {
	return new Promise((resolve, reject) => {
		const delay = Math.random() * 100;
		setTimeout(() => {
			console.log(1)
			resolve(1)
		}, delay)
	});
};

const b1 = () => {
	return new Promise((resolve, reject) => {
		const delay = Math.random() * 100;
		setTimeout(() => {
			console.log(2)
			resolve(2)
		}, delay)
	});
};

const c1 = () => {
	return new Promise((resolve, reject) => {
		const delay = Math.random() * 100;
		setTimeout(() => {
			console.log(3)
			resolve(3)
		}, delay)
	});
};
a1().then(ret => b()).then(ret => c())
// a().then(b).then(c) // same result!!!

