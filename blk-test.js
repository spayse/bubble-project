const Block=require ('./blockchain');
const Blockchain=require ('./blockchain');
bc= new Blockchain
for (let i=0;i<2200 ;i++){
    let data= "fuckyou"+i
 block =bc.mineBlock([bc.chain.length-1], data);
    this.chain.push(block);
    console.log(block)
}
