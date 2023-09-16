console.log("before");

getData(1,(user)=>{
    console.log("user:",user);    
    
    getRepositories(user.gitUserName,(userRepositories)=>{

        console.log(userRepositories);

        getCommits(userRepositories[0],(comits)=>{
            console.log( userRepositories[0], comits);
        });
    });

});


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

function getCommits(repo,callback)
{
    setTimeout(()=>{
        callback("commit");
    },2000);
}