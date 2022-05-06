document.getElementById("btn").addEventListener("click", makerequest);
/*
function makerequest(){
    console.log("Button Clicked")


    config = {
        method: 'get',
        url: 'data.json'
    }
    const promisObj = axios(config)
    promisObj.then((res) => {
        console.log(res)
        console.log(res.data)
        console.log(res.config)
        console.log(res.status)
    })
}
*/


/*    or we can write like this

function makerequest() {
    console.log("Button Clicked")


    config = {
        method: 'get',
        url: 'data.json'
    }
    
    //axios(config)
    //.then((res) => {
    //or we can write it like this.....
        
    axios(config).then((res) => {
        console.log(res)
        console.log(res.data)
        console.log(res.config)
        console.log(res.status)
    })
}

*/

/*
//   or like this

function makerequest() {
    console.log("Button Clicked")

        axios({
            method: 'get',
            url: 'data.json'
        }).then((res) => {
        console.log(res)
        console.log(res.data)
        console.log(res.config)
        console.log(res.status)
    })
}
*/

/*
// or using Shorthand Property like this....

function makerequest() {
    console.log("Button Clicked")
    axios.get('data.json').then((res) => {
        console.log(res)
        console.log(res.data)
    })
}
*/

/*
//  get is by default method

function makerequest() {
    console.log("Button Clicked")
    axios('data.json').then((res) => {
        console.log(res)
        console.log(res.data)
    })
}
*/


/*
// writing get method like this axios('data.txt',{'method':'get'}).then((res)=>{})

function makerequest() {
    console.log("Button Clicked")
    axios('data.json',{'method':'get'}).then((res) => {
        console.log(res)
        console.log(res.data)
    })
}
*/


/*

function makerequest() {
    console.log("Button Clicked")
    config = {
         'method': 'get'
        }
    axios('data.json',config).then((res) => {
        console.log(res)
        console.log(res.data)
    })
}
*/


/*

function makerequest() {
    console.log("Button Clicked")
    config = {
        'method': 'get'
    }
    axios('data.json', config).then((res) => {
        console.log(res)
        console.log(res.data)
    })
}
*/


/*
//  Promise Then | Error Handling  ( graceful termination of program)

function makerequest() {
    console.log("Button Clicked")
    axios.get('data.json').then((res) => {   // data1.txt will give error 
        console.log(res)
        console.log(res.data)
    }).catch((error)=>{   //  this will run if error comes
        console.log(error)
    }).then(()=>{      // this .then will aways execute whether error comes of not
        console.log("Clean")
    })
}

*/

/*
// Promise Then | Showing data in browser
function makerequest() {
    console.log("Button Clicked")
    axios.get('data.json').then((res) => {   // data1.txt will give error 
        console.log(res)
        console.log(res.data)
        document.getElementById("divdata").innerText = res.data
    }).catch((error) => {   //  this will run if error comes
        console.log(error)
    })
}
*/

/*
// Async and await 
async function makerequest() {
    console.log("Button Clicked")

    config = {
        method: 'get',
        url: 'data.json'
    }
    const res = await axios(config)
    console.log(res)
    console.log(res.data)
}
*/


/*
// Async and await 
async function makerequest() {
    console.log("Button Clicked")

    config = {
        method: 'get',
    }
    const res = await axios('data.json',config)
    console.log(res)
    console.log(res.data)
}
*/

/*
// Async and await | Error Handling
async function makerequest() {
   try {
       console.log("Button Clicked")
       const res = await axios.get('data.json')   //  data1.txt will give error
       console.log(res)
       console.log(res.data)
   } catch (error) {
       console.log(error)
   }
}
*/



// Async and await | Showing data in browser
async function makerequest() {
    try {
        console.log("Button Clicked")
        const res = await axios.get('data.json')   //  data1.txt will give error
        console.log(res)
        console.log(res.data)
        console.log(res.data.name)
        console.log(res.data.roll)
        document.getElementById("divdata1").innerText =res.data.name
        document.getElementById("divdata2").innerText =res.data.roll
    } catch (error) {
        console.log(error)
    }
}

