        //using github api to display infomation

        //api
        const apiUrl = 'https://api.github.com/users/';

        //const elements
        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');
        const avatar = document.getElementById('avatar');
        const username = document.getElementById('username');
        const bio = document.getElementById('bio');
        const followers = document.getElementById('followers');
        const following = document.getElementById('following');
        const repos = document.getElementById('repos');

        let usernameValue= "MontossoriVisualization";

//on search
        searchButton.addEventListener('click', () => {
             usernameValue = searchInput.value.trim();
            if (usernameValue) {
                fetchUserProfile(usernameValue);
            }
        });

        //fetch user profile
          function fetchUserProfile(username) {
            fetch(apiUrl + username)
                .then((res)=> res.json())
                .then((data) => {
                    if (data.message === "Not Found") {
                        alert("User not found");
                        return;
                    }
                    if(data.status === 404) {
                        console.error('User not found');
                        return;
                    }
                    console.log(data);
                    avatar.src = data.avatar_url;
                    username.textContent = data.login;
                    bio.textContent = data.bio || 'No bio available';
                    followers.textContent = `Followers: ${data.followers}`;
                    following.textContent = `Following: ${data.following}`;
                    //fetch user repos
                    fetch(apiUrl + username + '/repos')
                        .then((res) => res.json())
                        .then((reposData) => {
                            createRepoList(reposData);
                        })
                        .catch((error) => {
                            console.error('Error fetching user repositories:', error);
                        });
                })
                .catch(error => {
                    console.error('Error fetching user profile:', error);
                });
          }

  function createRepoList(reposData) {
    
    repos.innerHTML = '';

    const repoList = document.createElement('ul');

    reposData.forEach(repo => {
        const listItem = document.createElement('li');
        const repoLink = document.createElement('a');
        repoLink.href = repo.html_url;
        repoLink.textContent = repo.name;
        repoLink.target = '_blank';
        listItem.appendChild(repoLink);
        repoList.appendChild(listItem);
    });

    repos.appendChild(repoList);
}


          //initial fetch for default user
   window.onload = () => {
            fetchUserProfile('MontessoriVisualization');
   }            


