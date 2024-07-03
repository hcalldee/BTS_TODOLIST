# REST_CRUD
rest crud starter using express js

buat terlebih dahulu .env 

kemudian isi seperti dibawah (isi bagian setelah = )

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=
JWT_SECRET=

kemudian jalankan 

```node setup.js```

kemudian jalankan server.js

api daftar user baru
POST
``` /api/user/register ```
param {
    name,
    email,
    password
}

api Login
POST
``` /api/user/login ```
param {
    email,
    password
}