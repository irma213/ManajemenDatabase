db.nilai_mahasiswa.find({
  $and: [
    { semester: 4 },
    { matkul: "Basis Data" }
  ]
})
