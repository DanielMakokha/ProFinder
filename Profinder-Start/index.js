const CLIENT_ID ='00ff36582bb114d1bfb0'
const CLIENT_SECRET ='041bb6c7d15752721a77f83ae430ad889f646363'
async function getuser(name){
const res =await fetch(`https://api.github.com/users/${name}?client_id=${CLIENT_ID}& client_secret=${CLIENT_SECRET}`);
    const profile =await res.json();
    return profile;
}

async function getrepos(profile){
    const res=await fetch(`${profile.repos_url}?client_id=${CLIENT_ID}& client_secret=${CLIENT_SECRET} &per_page=10`);

    const repo =await res.json();
    return repo;
}

document.querySelector('#search').addEventListener('submit',async (e)=>{
    e.preventDefault();
    const username =document.querySelector('#findByUsername').value;
    const profile = await getuser(username);
    const repos=await getrepos(profile);
    console.log(repos);

    showprofile(profile);
    showRepos(repos);
    console.log(profile);
})
function showRepos(repos){

    let newhtml='';
    for(let repo of repos){
        newhtml += `
        <div class="repo">
        <div class="repo_name">
          <a href="${repo.html_url}">${repo.name}</a>
        </div>
        <p>
          <span class="circle"></span> ${repo.language}
          <ion-icon name="star-outline"></ion-icon> ${repo.watchers_count}
          <ion-icon name="git-branch-outline"></ion-icon> ${repo.forks_count}
        </p>
      </div>`
    }
    document.querySelector('.repos').innerHTML = newhtml;
}

function showprofile(profile){
    document.querySelector('.profile').innerHTML=`
    <img
            src="${profile.avatar_url}"
            alt="letstrie"
          />
          <p class="name">${profile.name}</p>
          <p class="username login">${profile.login}</p>
          <p class="bio">
          ${profile.bio}
          </p>

          <div class="followers-stars">
            <p>
              <ion-icon name="people-outline"></ion-icon>
              <span class="followers"> ${profile.followers}</span> followers
            </p>
            <span class="dot">·</span>
            <p><span class="following"> ${profile.following} </span> following</p>
          </div>

          <p class="company">
            <ion-icon name="business-outline"></ion-icon>
            ${profile.company}
          </p>
          <p class="location">
            <ion-icon name="location-outline"></ion-icon>Lille, ${profile.location}
          </p>`;
}

/*
<img
            src="https://avatars3.githubusercontent.com/u/47313?s=400&u=7ba05204271a726f8642ac15864e2f361b5c0198&v=4"
            alt="letstrie"
          />
          <p class="name">Fabien Potencier</p>
          <p class="username login">fabpot</p>
          <p class="bio">
            Simplifying things for fun
          </p>

          <div class="followers-stars">
            <p>
              <ion-icon name="people-outline"></ion-icon>
              <span class="followers"> 10 </span> followers
            </p>
            <span class="dot">·</span>
            <p><span class="following"> 20 </span> following</p>
          </div>

          <p class="company">
            <ion-icon name="business-outline"></ion-icon>
            Symfony/Blackfire
          </p>
          <p class="location">
            <ion-icon name="location-outline"></ion-icon>Lille, France
          </p>
*/