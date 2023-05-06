function tambahData(){
  var dataBuah = ['Pisang','Jeruk']
  console.log(dataBuah);

  dataBuah.unshift('Aple','Mangga');

  return dataBuah;
}

console.log(tambahData());
