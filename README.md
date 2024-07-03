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
 <br />
api daftar user baru  <br />
POST  <br />
``` /api/user/register ```  <br />
 param {
    name,
    email,
    password
}  <br />

![image](https://github.com/hcalldee/BTS_TODOLIST/assets/49970186/4da1dec2-bf92-4753-ab01-7e7f3575ee4a)
 <br />

api Login <br />
POST  <br />
``` /api/user/login ```  <br />
param {  <br />
    email,
    password
}
 <br />
![image](https://github.com/hcalldee/BTS_TODOLIST/assets/49970186/4808a470-6817-48fa-af6a-6aa7f3ccf21d)
 <br />
api Create Todo <br />
POST <br />
``` /api/todos/ ``` <br />
param { <br />
    title
}
 <br />
![image](https://github.com/hcalldee/BTS_TODOLIST/assets/49970186/223849e9-a198-408f-8b9e-3d5a0846c9bc)
 <br />
 
api delete Todo <br />
DELET <br />
``` /api/todos/2 ``` <br />

 ![image](https://github.com/hcalldee/BTS_TODOLIST/assets/49970186/de6e57c8-06f6-4e05-98ac-09f9f2054749)<br />

 api Get All Todo <br />
GET <br />
``` /api/todos/ ``` <br />

![image](https://github.com/hcalldee/BTS_TODOLIST/assets/49970186/9581c642-d86d-4181-aa08-7298d4ea6df0)<br />

api create Todo list <br />
POST <br />
``` /api/list/ ``` <br />
param {
  list,
  id_do,
  status
}

![image](https://github.com/hcalldee/BTS_TODOLIST/assets/49970186/dcbdc8d4-5366-434e-b181-02355bf9f099)<br />

 api Get All List <br />
GET <br />
``` /api/list/ ``` <br />

![image](https://github.com/hcalldee/BTS_TODOLIST/assets/49970186/54643987-9740-4469-bc0d-56691c0d5325)<br />

 api Get All Todo With List <br />
GET <br />
``` /api/todos/:param/lists ``` <br />

![image](https://github.com/hcalldee/BTS_TODOLIST/assets/49970186/39fd9049-ba49-4865-86c1-c991f7791df6)
