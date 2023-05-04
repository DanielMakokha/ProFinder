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
    console.log(profile);
})