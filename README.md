# REST_CRUD
rest crud starter using express js

buat terlebih dahulu .env 

kemudian isi seperti dibawah (isi bagian setelah = )<br />
<br />
PORT=3000<br />
DB_HOST=localhost<br />
DB_USER=root<br />
DB_PASSWORD=<br />
DB_NAME=<br />
JWT_SECRET=<br />
<br />
kemudian jalankan <br />
<br />
```node setup.js```<br />

kemudian jalankan server.js<br />
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
DELETE <br />
``` /api/todos/:param ``` <br />

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

 api Get All Todo With List spesific <br />
GET <br />
``` /api/todos/:param/lists ``` <br />

![image](https://github.com/hcalldee/BTS_TODOLIST/assets/49970186/39fd9049-ba49-4865-86c1-c991f7791df6)<br />

 api Get All Todo With List <br />
GET <br />
``` /api/todos/allList ``` <br />
![image](https://github.com/hcalldee/BTS_TODOLIST/assets/49970186/38f55ee5-8b56-49f7-a028-1e9dc13be825)


api Get Detail List <br />
GET <br />
``` /api/list/:param ``` <br />

![image](https://github.com/hcalldee/BTS_TODOLIST/assets/49970186/931ee1c3-44f5-47bd-8aae-d9a44b6ebb97)<br />

api Update List <br />
PUT <br />
``` /api/list/:param ``` <br />
param {
  list,
  id_do,
  status
}
<br />
![image](https://github.com/hcalldee/BTS_TODOLIST/assets/49970186/1955d686-4b5a-4ac1-8523-cb957a9d7783)<br />

api Update status List <br />
PATCH <br />
``` /api/list/:param/status ``` <br />
param {
  status
}
<br />
![image](https://github.com/hcalldee/BTS_TODOLIST/assets/49970186/2a057083-9b83-4b69-abcf-937f5090d11d)<br />

api delete List <br />
DELETE <br />
``` /api/list/:param ``` <br />

![image](https://github.com/hcalldee/BTS_TODOLIST/assets/49970186/ef9707ba-4802-4e88-ade6-e6f7d43cee11)

