db.nilai_mahasiswa.aggregate([
  { $match: { matkul: "Basis Data" } },
  {
    $group: {
      _id: "$matkul",
      rata_rata_nilai: { $avg: "$nilai" }
    }
  }
])
