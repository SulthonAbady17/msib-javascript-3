let frm = document.getElementById("pegawai");

let arrayJabatan = ["Manager", "Asisten Manager", "Staff"];
let pilihjabatan = `<option selected>Pilih jabatan</option>`;
for (let p in arrayJabatan) {
  pilihjabatan += `<option value="${arrayJabatan[p]}"> ${arrayJabatan[p]}</option>`;
}
frm.jabatan.innerHTML = pilihjabatan;

let arrayStatus = ["Menikah", "Belum Menikah"];
let pilihStatus = `<option selected>Pilih Status</option>`;
for (let p in arrayStatus) {
  pilihStatus += `<option value="${arrayStatus[p]}"> ${arrayStatus[p]}</option>`;
}
frm.status.innerHTML = pilihStatus;

function transaksi() {
  let nama = frm.nama.value;
  let jabatan = frm.jabatan.value;
  let status = frm.status.value;
  let gajiPokok = 0;

  if (jabatan == "Manager") {
    gajiPokok = 15000000;
  } else if (jabatan == "Asisten Manager") {
    gajiPokok = 10000000;
  } else if (jabatan == "Staff") {
    gajiPokok = 5000000;
  } else {
    gajiPokok = 0;
  }

  let tunjanganJabatan = 0.15 * gajiPokok;
  let bpjs = 0.1 * gajiPokok;
  let tunjanganKeluarga = status == "Menikah" ? 0.2 * gajiPokok : 0;
  let totalGaji = gajiPokok + tunjanganJabatan + tunjanganKeluarga + bpjs;

  const validator = (nama, jabatan, status) => {
    if (nama == "") {
      return "Nama wajib diisi!";
    } else if (jabatan == "") {
      return "Jabatan wajib dipilih!";
    } else if (status == "") {
      return "Status wajib dipilih!";
    } else {
      Swal.fire({
        title: "HASIL TABEL",
        width: 1200,
        height: 900,
        html: `
        <table border="1px" cellpadding="10" cellspacing="0" align="center" width="100%" style="font-size:0.9rem;">
                <thead align="center" style="background-color: lightsalmon;">
                    <tr align="center">
                      <td>Nama Pegawai</td>
                      <td>Jabatan</td>
                      <td>Status</td>
                      <td>Gaji Pokok</td>
                      <td>Tunjangan Jabatan</td>
                      <td>BPJS</td>
                      <td>Tunjangan Keluarga</td>
                    </tr>
                </thead>
                <tbody style="background-color: lightgrey;">
                    <tr align="center">
                      <td>${nama}</td>
                      <td>${jabatan}</td>
                      <td>${status}</td>
                      <td>${gajiPokok}</td>
                      <td>${tunjanganJabatan}</td>
                      <td>${bpjs}</td>
                      <td>${tunjanganKeluarga}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr align="center">
                        <td style="background-color: lightsalmon;" colspan="2" >Total Gaji</td>
                        <td colspan="6" style="background-color: lightgrey;">
                            Rp. ${totalGaji}
                        </td>
                    </tr>
                </tfoot>
        </table>
        `,
      });
      return "";
    }
  };

  document.getElementById("validator").innerHTML = validator(
    nama,
    jabatan,
    status
  );
}
