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

api daftar user baru <br>
POST <br>
``` /api/user/register ``` <br>
<br> param {
    name,
    email,
    password
} <br>

![image](https://github.com/hcalldee/BTS_TODOLIST/assets/49970186/4da1dec2-bf92-4753-ab01-7e7f3575ee4a)


api Login
POST
``` /api/user/login ```
param {
    email,
    password
}

![image](https://github.com/hcalldee/BTS_TODOLIST/assets/49970186/4808a470-6817-48fa-af6a-6aa7f3ccf21d)

api Creat Todo
POST
``` /api/todos/ ```
param {
    title
}

![image](https://github.com/hcalldee/BTS_TODOLIST/assets/49970186/223849e9-a198-408f-8b9e-3d5a0846c9bc)

