console.log("before");

getData(1,displayUserData);

function displayUserData(user)
{
    console.log("user:",user); 
    getRepositories(user.gitUserName,displayRepos);
}

function displayRepos(repos)
{
    console.log("Repos: ",repos);
}


console.log("after");

function getData(id,callBack)
{
    setTimeout(()=>{
        console.log("Fetching data from database");
        callBack({id:id , gitUserName:"Huzaifa"});
    },2000);
}

function getRepositories(userName,callBack)
{
    setTimeout(()=>{
        console.log(`Getting ${userName} repositories....`);
        callBack(["repo 1" , "repo2" , "repo3"]);
    },2000)
}