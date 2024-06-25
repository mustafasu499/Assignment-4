let input = document.getElementById("inputBox");
let div = document.getElementById("mainBox");

let searchBtn = () => {
  let promise = new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${input.value}`)
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })

      .catch((err) => console.log("err==>", reject(err)));
  });
  promise
    .then((res) => {
      console.log(res);
      div.innerHTML = `<div>
      <div class="img-and-followers-Box">
        <div class="img-Box">
          <img
            width="100%"
            class="img-tag"
            src="${res.avatar_url}"
            alt=""
          />
          <h2 class="profile-Name">${res.name}</h2>
        </div>
        <div class="followers-and-following-box">
          <div>
            <h3>${res.followers} followers</h3>
          </div>
          <div><h3>${res.public_repos} repo</h3></div>
          <div><h3>${res.following} following</h3></div>
        </div>
      </div>
      <div class="Bio-Box">
        ${res.bio}
      </div>
    </div>
    <div class="main-section-box">
      <div class="main-section-innher-box">
        <p class="main-section-pera-box">
          <a href=""><button>${res.blog}</button></a>
          <a href=""><button>${res.html_url}</button>.</a
          ><a href=""> <button>${res.organizations_url}</button></a>
          <a href=""><button>${res.repos_url}</button></a>
          <a href=""><button>${res.events_url}</button></a>
        </p>
        <p>
          <a href=""><button>${res.twitter_username}</button></a>
          <a href=""><button>${res.subscriptions_url}</button>.</a
          ><a href=""> <button>${res.starred_url}</button></a>
          <a href=""><button>${res.followers_url}</button></a>
          <a href=""><button>${res.gists_url}</button></a>
          <a href=""><button>${res.url}</button></a>
        </p>
      
      </div>
    </div>`;
    })
    .catch((err) => console.log(err));
};
