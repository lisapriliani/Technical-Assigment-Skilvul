const isR18Plus = new Promise((resolve, reject) => {
    if(properAge){
        resolve('anda sudah dewasa')
    }if(underAge){
        resolve('anda masih dibawah umur')
    }
    reject('not found')
});
const printR18Plus = async () => {
  const underAge = await isR18Plus(10);
  const properAge = await isR18Plus(19);

  console.log(underage);
  console.log(properAge);
}

printR18Plus();
