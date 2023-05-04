const CLIENT_ID ='00ff36582bb114d1bfb0'
const CLIENT_SECRET ='041bb6c7d15752721a77f83ae430ad889f646363'
async function getuser(name){
const res =await fetch(`https://api.github.com/users/${name}?client_id=${CLIENT_ID}& client_secret=${CLIENT_SECRET}`);
    const profile =await res.json();
    return profile;
}

document.querySelector('#search').addEventListener('submit',async (e)=>{
    e.preventDefault();
    const username =document.querySelector('#findByUsername').value;
    const profile = await getuser(username);
    showprofile(profile);
    console.log(profile);
})

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