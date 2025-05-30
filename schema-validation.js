db.createCollection("nilai_mahasiswa_validated", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nim", "nama", "matkul", "nilai", "semester"],
      properties: {
        nim: { bsonType: "string" },
        nama: { bsonType: "string" },
        matkul: { bsonType: "string" },
        nilai: {
          bsonType: "int",
          minimum: 0,
          maximum: 100
        },
        semester: {
          bsonType: "int",
          minimum: 1
        }
      }
    }
  }
})
