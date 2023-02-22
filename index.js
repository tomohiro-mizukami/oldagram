const fullName = document.querySelectorAll(".full-name")
const username = document.querySelectorAll(".username")
const place = document.querySelectorAll(".place")
const avatar = document.querySelectorAll(".avatar")
const portrait = document.querySelectorAll(".portrait")
const comment = document.querySelectorAll(".comment")
const likes = document.querySelectorAll(".likes")
const iconLikes = document.querySelectorAll(".icon-like")

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

for (let i = 0; i < posts.length; i++) {
    avatar[i].setAttribute("src", `${posts[i].avatar}`)
    fullName[i].textContent = `${posts[i].name}`
    place[i].textContent = `${posts[i].location}`
    portrait[i].setAttribute("src", `${posts[i].post}`)
    likes[i].textContent = `${posts[i].likes}`
    username[i].textContent = `${posts[i].username}`
    comment[i].textContent = `${posts[i].comment}`
}


// Scaleup likes
iconLikes.forEach(el => el.addEventListener("dblclick", () => {
    el.classList.add("icon-like--scaleup")
    setTimeout(() => {
        el.classList.remove("icon-like--scaleup");
      }, "500")
}))

