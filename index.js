//envirement for deployment
require('dotenv').config();
const express=require('express');
const app=express();
const port=process.env.PORT || 3000 ;

const githubData={
    "login": "AbdulAhad365",
    "id": 115157982,
    "node_id": "U_kgDOBt0r3g",
    "avatar_url": "https://avatars.githubusercontent.com/u/115157982?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/AbdulAhad365",
    "html_url": "https://github.com/AbdulAhad365",
    "followers_url": "https://api.github.com/users/AbdulAhad365/followers",
    "following_url": "https://api.github.com/users/AbdulAhad365/following{/other_user}",
    "gists_url": "https://api.github.com/users/AbdulAhad365/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/AbdulAhad365/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/AbdulAhad365/subscriptions",
    "organizations_url": "https://api.github.com/users/AbdulAhad365/orgs",
    "repos_url": "https://api.github.com/users/AbdulAhad365/repos",
    "events_url": "https://api.github.com/users/AbdulAhad365/events{/privacy}",
    "received_events_url": "https://api.github.com/users/AbdulAhad365/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Abdul ahad",
    "company": "Comsats University Islamabad",
    "blog": "",
    "location": "Islamabad Pakistan",
    "email": null,
    "hireable": true,
    "bio": "Like to discover the world and  very conscious about my world. Hobbies are doing programming and logic building",
    "twitter_username": null,
    "public_repos": 30,
    "public_gists": 1,
    "followers": 7,
    "following": 14,
    "created_at": "2022-10-06T12:03:09Z",
    "updated_at": "2024-10-12T13:19:05Z"
  }


app.get('/',(req,res)=>{
    res.send("hello wordld")
})
app.get('/twitter',(req,res)=>{
    res.send("hello twitter")
})
app.get('/facebook',(req,res)=>{
    res.send("hello facebook")
})
app.get('/login',(req,res)=>{
    res.send("<h1>Login here</h1>")
})
//to print the data
app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(port,()=>{
    console.log(`example app listing on port ${process.env.PORT}`);
    // console.log(`example app listing on port ${process.env.PORT}`);

})