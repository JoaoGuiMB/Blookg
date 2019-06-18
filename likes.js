var dblikes= {
    artigos: [{
        likes: 2
    },
    {
        likes: 2
    },
    {   
        likes:3
    },
    {
        likes:4
    },
    {
        likes:2
    }
]
}

var x = JSON.parse(localStorage.getItem('x'));
if (!db) {
    x = dblikes;
};


function Gostar(nlikes){
    nlikes = dblikes.artigos[x-1].likes++
    z=localStorage.getItem("idpost")
    localStorage.setItem('nlikes',nlikes)
    a=localStorage.getItem('nlikes')
    return a
}