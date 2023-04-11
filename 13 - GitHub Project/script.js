let apiUrl = 'https://api.github.com/users/'
let input = document.getElementById('inputSearch')
let button = document.getElementById('searchBtn')

let card = document.querySelector('.card')

// functions
const showCard = async function () {
  if (card.classList.contains('hidden')) {
    card.classList.remove('hidden')
    card.innerHTML = 'Fetching Data'
  }

  const reponse = await fetch(apiUrl + input.value)
  const data = await reponse.json()
  console.log(data)
  // show data in my card

  if (!reponse.ok) {
    card.innerHTML = 'User not found'
  }

  const reponseRepo = await fetch(apiUrl + input.value + '/repos')
  let reponesData = await reponseRepo.json()

  reponesData = reponesData.slice(0, 5)
  console.log(reponesData)

  const html = `
    <div class="image">
    <img src="${data.avatar_url}" />
    </div>

    <!-- User Details-->
    <div class="user-info">
    <h2 class="user-name">${data.name}</h2>
    <p class="bio">${data.bio}</p>
    <ul>
        <li>${data.followers} Followers</li>
        <li>${data.following} Followings</li>
        <li>${data.public_repos} Repos</li>
    </ul>

    <div class="repos">
    ${reponesData
      .map(function (repo) {
        return `<a href="repo1.com">${repo.name}</a>`
      })
      .join(' ')}
        
  
    </div>
    </div>
  `

  if (!reponse.ok) {
    card.innerHTML = 'User not found'
  } else {
    card.innerHTML = ''
    card.insertAdjacentHTML('beforeend', html)
  }
}

// event listeners
button.addEventListener('click', showCard)
