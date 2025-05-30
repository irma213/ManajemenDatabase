use kampus; // Pastikan berada di database "kampus"

db.nilai_mahasiswa.insertOne({
  nim: "D0222007",
  nama: "Irmayanti",
  matkul: "Basis Data",
  nilai: 85,
  semester: 4
})
