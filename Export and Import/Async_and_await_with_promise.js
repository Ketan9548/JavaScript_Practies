function data(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('https://fake-json-api.mock.beeceptor.com/users')
        },)
    })
}

let val = []

async function fetchdata() {
    try {
        console.log("fetching data...")
        let url = await data();

        let response = await fetch(url)
        let result = await response.json();

        val.push(result);
        console.log("the value is",val);
    } catch (error) {
        console.log("error is: ",error);
    }
}

fetchdata()