const Wallet = require('./wallet');
const Transaction = require('./wallet/transaction');

class Miner {
  constructor(blockchain, transactionPool, wallet, msocket,) {
    this.blockchain = blockchain;
    this.transactionPool = transactionPool;
    this.wallet = wallet;
	this.msocket=msocket
  this.bytes=0
  this.challenger
  this.block={}
  }

  mine(bubble) {
    this.msocket.on("connect",console.log("MSOCKET CONNECTED"))
   this.bubbles =bubble.bubbles
   this.bubble=bubble
    let validTransactions = this.transactionPool.validTransactions();
    
   // console.log("miner vtx  ",validTransactions)
    validTransactions.push(
      Transaction.rewardTransaction(this.wallet, Wallet.blockchainWallet())
    );
      
    let start =0  
    start= Date.now()
    
             this.block = this.blockchain.getBlock(validTransactions,this.bubbles)
               
      
        console.log("block found" ,this.block)
      
      let nx= JSON.stringify(this.block)
       this.bytes=nx.length
        
        const now =   Date.now()
        const lapse=now-start
      let hr= this.block.nonce/(lapse/1000)
       
         
          console.log("You found  majikul HASH!  time:",lapse/1000,"seconds ","Block Size  :" , this.bytes,"Hash Rate : ",hr)
          this.msocket.emit('goodmine',this.block) 
          this.transactionPool.clear();
          this.bubble.clear()
          return this.block

  
        
    
  }


}

module.exports = Miner;