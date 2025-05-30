db.nilai_mahasiswa.bulkWrite([
  {
    insertOne: {
      document: {
        nim: "123457",
        nama: "Budi Hartono",
        matkul: "PBO",
        nilai: 75,
        semester: 4
      }
    }
  },
  {
    insertOne: {
      document: {
        nim: "123458",
        nama: "Citra Lestari",
        matkul: "AI",
        nilai: 90,
        semester: 5
      }
    }
  }
])
