require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData={
  "login": "prabhakarsingh",
  "id": 3774889,
  "node_id": "MDQ6VXNlcjM3NzQ4ODk=",
  "avatar_url": "https://avatars.githubusercontent.com/u/3774889?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/prabhakarsingh",
  "html_url": "https://github.com/prabhakarsingh",
  "followers_url": "https://api.github.com/users/prabhakarsingh/followers",
  "following_url": "https://api.github.com/users/prabhakarsingh/following{/other_user}",
  "gists_url": "https://api.github.com/users/prabhakarsingh/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/prabhakarsingh/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/prabhakarsingh/subscriptions",
  "organizations_url": "https://api.github.com/users/prabhakarsingh/orgs",
  "repos_url": "https://api.github.com/users/prabhakarsingh/repos",
  "events_url": "https://api.github.com/users/prabhakarsingh/events{/privacy}",
  "received_events_url": "https://api.github.com/users/prabhakarsingh/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 0,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2013-03-05T10:18:55Z",
  "updated_at": "2016-02-27T06:57:09Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/prabhakar',(req,res)=> {
    res.send("This is Prabhakar Section")
})
app.get('/login',(req,res)=> {
    res.send('<h1>This is Login Section</h1>')
})
app.get('/singh',(req,res)=> {
    res.send("<h6>SINGH</h6 >")
})

app.get('/github',(req,res)=> {
  res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})