`# API SPEC MONITORING PRODUKSI

## PRODUK

**GET /produk**

- Response Success

```json
{
  "code": 200,
  "status": "success",
  "data": [
    {
      "id": 1,
      "nama": "Plat Besi",
      "berat": 10,
      "jumlah_total": 300,
      "material_pendukung": [
        {
          "id": 1,
          "jumlah": 100
        }
      ],
      "updated_at": "",
      "created_at": ""
    },
    {
      "id": 2,
      "nama": "Plat Besi",
      "berat": 10,
      "jumlah_total": 300,
      "material_pendukung": [
        {
          "id": 1,
          "jumlah": 100
        }
      ],
      "updated_at": "",
      "created_at": ""
    }
  ]
}
```

**GET /produk/:id**

- Response Success

```json
{
  "code": 200,
  "status": "success",
  "data": {
    "id": 1,
    "nama": "Plat Besi",
    "berat": 10,
    "jumlah_total": 300,
    "material_pendukung": [
      {
        "id": 1,
        "jumlah": 100
      }
    ],
    "updated_at": "",
    "created_at": ""
  }
}
```

**POST /produk**

- Request Body

```json
{
  "nama": "Plat Besi",
  "berat": 10,
  "material_pendukung": [
    {
      "id": 1,
      "jumlah": 100
    }
  ]
}
```

- Response Success

```json
{
  "code": 201,
  "status": "success",
  "data": {
    "id": 1,
    "nama": "Plat Besi",
    "berat": 10,
    "jumlah_total": 0,
    "material_pendukung": [
      {
        "id": 1,
        "jumlah": 100
      }
    ],
    "updated_at": "",
    "created_at": ""
  }
}
```

**PUT /produk/:id**

- Request Body

```json
{
  "nama": "Plat Besi", // Optional
  "berat": 10 // Optional
}
```

- Response Success

```json
{
  "code": 200,
  "status": "success",
  "data": {
    "id": 1,
    "nama": "Plat Besi",
    "berat": 10,
    "jumlah_total": 0,
    "material_pendukung": [
      {
        "id": 1,
        "jumlah": 100
      }
    ],
    "updated_at": "",
    "created_at": ""
  }
}
```

**DELETE /produk/:id**

- Response Success

```json
{
  "code": 200,
  "status": "success",
  "message": true
}
```

**PUT /produk/tambah/:id**

- Request Body

```json
{
  "jumlah": 100,
  "deskripsi": "" // optional
}
```

- Response Success

```json
{
  "code": 200,
  "status": "success",
  "data": {
    "id": 1,
    "nama": "Plat Besi",
    "berat": 10,
    "jumlah_total": 100,
    "material_pendukung": [
      {
        "id": 1,
        "jumlah": 100
      }
    ],
    "updated_at": "",
    "created_at": ""
  }
}
```

**PUT /produk/kurang/:id**

- Request Body

```json
{
  "jumlah": 100,
  "deskripsi": "" // optional
}
```

- Response Success

```json
{
  "code": 200,
  "status": "success",
  "data": {
    "id": 1,
    "nama": "Plat Besi",
    "berat": 10,
    "jumlah_total": 100,
    "material_pendukung": [
      {
        "id": 1,
        "jumlah": 100
      }
    ],
    "updated_at": "",
    "created_at": ""
  }
}
```

- Response Failed

```json
{
  "code": 400,
  "status": "success",
  "message": "Material Pendukung tidak cukup, produk membutuhkan alumunium 100 pcs"
}
```

## MATERIAL

**GET /material**

- Response Success

```json
{
  "code": 200,
  "status": "success",
  "data": [
    {
      "id": 1,
      "nama": "Kawat",
      "satuan": "kg",
      "jumlah": 300,
      "material_pendukung": [],
      "updated_at": "",
      "created_at": ""
    },
    {
      "id": 1,
      "nama": "Kawat",
      "satuan": "pcs",
      "jumlah": 15000,
      "material_pendukung": [],
      "updated_at": "",
      "created_at": ""
    }
  ]
}
```

**GET /material/:id**

- Response Success

```json
{
  "code": 200,
  "status": "success",
  "data": {
    "id": 1,
    "nama": "Kawat",
    "satuan": "kg",
    "jumlah": 300,
    "material_pendukung": [],
    "updated_at": "",
    "created_at": ""
  }
}
```

**POST /material**

- Request Body

```json
{
  "nama": "Kawat",
  "satuan": "kg",
  "material_pendukung": [] // Optional
}
```

- Response Success

```json
{
  "code": 200,
  "status": "success",
  "data": [
    {
      "id": 1,
      "nama": "Kawat",
      "satuan": "kg",
      "jumlah": 0,
      "material_pendukung": [],
      "updated_at": "",
      "created_at": ""
    }
  ]
}
```

**PUT /material/:id**

- Request Body

```json
{
  "nama": "Kawat", // optional
  "satuan": "kg", // optional
  "material_pendukung": [] // optional
}
```

- Response Success

```json
{
  "code": 200,
  "status": "success",
  "data": [
    {
      "id": 1,
      "nama": "Kawat",
      "satuan": "kg",
      "jumlah": 0,
      "material_pendukung": [],
      "updated_at": "",
      "created_at": ""
    }
  ]
}
```

**PUT /material/tambah/:id**

- Request Body

```json
{
  "jumlah": 100,
  "deskripsi": "" // optional
}
```

- Response Success

```json
{
  "code": 200,
  "status": "success",
  "data": [
    {
      "id": 1,
      "nama": "Kawat",
      "satuan": "kg",
      "jumlah": 100,
      "material_pendukung": [],
      "updated_at": "",
      "created_at": ""
    }
  ]
}
```

**PUT /material/kurang/:id**

- Request Body

```json
{
  "jumlah": 100,
  "deskripsi": "" // optional
}
```

- Response Success

```json
{
  "code": 200,
  "status": "success",
  "data": [
    {
      "id": 1,
      "nama": "Kawat",
      "satuan": "kg",
      "jumlah": 100,
      "material_pendukung": [],
      "updated_at": "",
      "created_at": ""
    }
  ]
}
```

**DELETE /material/:id**

- Response Success

```json
{
  "code": 200,
  "status": "success",
  "message": true
}
```

## RIWAYAT

**GET /riwayat**

- Request parameters

```json
{
  "keyword": "", // filter by name (Optional)
  "date": "" // filter by updated_at (Optional)
}
```

- Response Success

```json
{
  "code": 200,
  "status": "success",
  "data": [
    {
      "id": 1,
      "deskripsi": "",
      "jenis": "Produk Bertambah", // type : bertambah/berkurang
      "created_at": ""
    },
    {
      "id": 2,
      "deskripsi": "",
      "jenis": "Material Bertambah", // type : bertambah/berkurang
      "created_at": ""
    }
  ]
}
```
