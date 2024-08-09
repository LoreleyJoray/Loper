let usuarios =
[   
    {
        nombre : "nombre",
        email : "email",
        password : "password"
    },
    {
        nombre : "daniela",
        email : "daniela@gmail.com",
        password : "1234"
    },
    {
        nombre : "jimena",
        email : "jimena@gmail.com",
        password : "5678"
    },
    {
        nombre : "lorelei",
        email : "lorelei@gmail.com",
        password : "9123"
    }
]

localStorage.setItem ('usuarios', JSON.stringify(usuarios));