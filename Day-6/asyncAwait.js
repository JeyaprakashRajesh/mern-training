async function sample() {
    console.log("before await")
    await promiseFunction().then(result=>console.log(result))
    console.log("After Promise")
}

const promiseFunction = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Executing timeout");
            resolve("Resolved after 5 seconds");
        }, 5000);
    });
};

sample()