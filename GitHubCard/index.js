/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'

axios.get('https://api.github.com/users/Fry-Fr')
  .then(element => {
    ryansData = element
  })
  .catch(err => err)

  let ryansData
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
const followersArray = ['karapeoples', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
const followers = []
followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
    .then(element => {
      followers.push(element)
      }
    )
    .catch(err => console.log(err))
})
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
setTimeout(()=>{
  cardMaker(ryansData)
  followers.forEach(item => {
    cardMaker(item)
  })
},200)
function cardMaker(obj){
  let card = document.createElement('div')
  let cardInfo = document.createElement('div')
  let img = document.createElement('img')
  let h3 = document.createElement('h3')
  let a = document.createElement('a')
  let username = document.createElement('p')
  let location = document.createElement('p')
  let profile = document.createElement('p')
  let followers = document.createElement('p')
  let following = document.createElement('p')
  let bio = document.createElement('p')
  a.setAttribute('href',obj.data.html_url)
  img.setAttribute('src',obj.data.avatar_url)
  a.textContent = obj.data.html_url
  h3.textContent = obj.data.name
  username.textContent = `Username: ${obj.data.login}`
  location.textContent = `Location: ${obj.data.location}`
  profile.textContent = `Profile: `
  followers.textContent = `Followers: ${obj.data.followers}`
  following.textContent = `Following: ${obj.data.following}`
  bio.textContent = `Bio: ${obj.data.bio}`

  profile.addEventListener

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  h3.classList.add('name')
  username.classList.add('username')
  profile.appendChild(a)
  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(h3)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
  document.body.querySelector('.cards').appendChild(card)

  return card

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
