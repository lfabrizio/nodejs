console.log('Before');
getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos) => {
        getCommits(repos[0], (commits) => {
            console.log(commits);
        })
    })
});

getUser(1)
.then(user => getRepositories(user.gitHubUsername))
.then(repos => getCommits(repos[0]))
.then(commits => console.log('Commits', commits))
.catch(err => console.log('Error', err.message));

console.log('After');

function getRepositories(user) {
    getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
    getCommits(repo, displayCommits)
}
function displayCommits(commits) {
    console.log(commits);
}

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database..');
            resolve({ id: id, gitHubUsername: 'mosh' });
            }, 2000);    
    });
   
}

function getRepositories(username){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('calling github api');
        resolve (['repo1', 'repo2', 'repo3']);
    }, 2000);
});    
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github api ..');
            resolve(['commit']);
        }, 2000);
    });
}