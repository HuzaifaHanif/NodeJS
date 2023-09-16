console.log("before");

// get data() sey user aya phir tum ney then mei getRepositories() ka 
// function call kia jis sey repos aya phir us key then mei tum ney 
// get commits ka function call kia jis sey commits return hua 
// aur phir us ko console log kar dia

getData(1)
        .then((user)=>getRepositories(user.gitUserName))
        .then((repositories=>getCommits(repositories[0])))
        .then((commits)=>console.log(commits))
        .catch((error)=>console.log(error.message));


console.log("after");

function getData(id)
{
    return new Promise((resolve,reject)=>{
        console.log("getting data from database");
        resolve({id:id , gitUserName:"Huzaifa"});
    });
}

function getRepositories(userName)
{
    return new Promise((resolve, reject) => {
        console.log(`Getting ${userName} repositories....`);
        resolve(["repo 1" , "repo2" , "repo3"]);
    })  
}

function getCommits(repo)
{
    return new Promise((resolve, reject) => {
        resolve("commit");
    })
}