const ChainUtil = require('../chain-util');
const Transaction = require('./transaction');
const { INITIAL_BALANCE } = require('../config');
let myKeys= require('../public/files/myKeys.json')
//let priv=parseInt(myKeys[0].priv,16)
//let pubx =parseInt( myKeys[2].pub[0],16)
//let puby =parseInt( myKeys[2].pub[1],16)
let pk = parseInt(myKeys[1].pubKey,16)
//let pub= [pubx,puby]
//console.log(priv,pk)
class Wallet {
  constructor() {
    this.balance = 0.000000000;
    this.keyPair = ChainUtil.genKeyPair();
   this.keyPair.priv.words=myKeys[0]
   this.publicKey = this.keyPair.getPublic().encode('hex');
  
    console.log (  "our keys :" ,this.keyPair)
  }

  toString() {
    return `Wallet -
      publicKey: ${this.publicKey.toString()}
      balance  : ${this.balance}`
  }

  sign(dataHash) {
    return this.keyPair.sign(dataHash);
  }


  createTransaction(recipient, amount, blockchain, transactionPool) {
    this.balance = this.calculateBalance(blockchain);

    if (amount > this.balance) {
      console.log(`Amount: ${amount} exceceds current balance: ${this.balance}`);
      return;
    }

    let transaction = transactionPool.existingTransaction(this.publicKey);

    if (transaction) {
      transaction.update(this, recipient, amount);
    } else {
      transaction = Transaction.newTransaction(this, recipient, amount);
      transactionPool.updateOrAddTransaction(transaction);
    }

    return transaction;
  }
  
     getTx(blockchain,tp){

      let transactions = [];
      //let blocks = []
    let sumchain =blockchain.decompHuff(blockchain.chain)
    
    
    
    sumchain.forEach(block => block.data.forEach(transaction => {
      transactions.push(transaction);
    }));

    let ins = []
transactions.forEach(transaction=>{

                          if (transaction.input.address==this.publicKey){

                                  ins.push(transaction)
                              }

                      })
    


    let inPut = []
    let outPut = []
      for (let tx of ins){
        let  kind= "Output"
        let date = tx.timestamp
        let id= tx.id
        //let recipient = tx.outputs[1].address
        //let amount = tx.outputs[1].amount
        let inob={date,id}//recipient,//amount,kind
                  
          
          outPut.push(inob)
          return outPut
      }

    let myk = this.publicKey
   // console.log("INS", ins)
   

   for(let transx of transactions){
   for(let i = 0;i< transx.outputs.length; i++){
        //console.log("this is an output",transx)
       if (transx.outputs[i].address=== myk&&transx.input.address!==myk){
        let  kind= "Input"
        let date = transx.timestamp
        let id= transx.id
        let recipient = "me"
        let amount = transx.outputs[i].amount
        let inob={date,id,recipient,amount,kind}

         outPut.push(inob)
       return outPut
      }
    }
  
 
   }


 console.log (inPut,outPut)
   //console.log("OUTS",outs)
   return [inPut,outPut]

  }
  calculateBalance(blockchain,tp) {
    //console.log("Blockchain :   ",blockchain)

        let balance = 0.00000000
       let transactions = [];
      let myK=this.publicKey                                                                                                     
     	let sumchain =blockchain.decompHuff(blockchain.chain)

       sumchain.forEach(block => block.data.forEach(transaction => {                       
      transactions.push(transaction);
    }));

      //let oTime= sumchain[sumchain.length-1].timestamp

      let myIns=0
      let myOuts=0
        if (tp&&tp.length>0){
            for (let i=0;i<tp.length;i++){
                //transactions.push(tp[i])
			//console.log("transpool ",tp[i])

              return transactions

            }
        }

        for(let transx of transactions ){
//console.log("transx  ",transx)
          //if (transx.timestamp>oTime){myIns+=transx.input.amount}
            if (transx.input.address===myK){
              //console.log( "thi   is  inputs    " ,transx)
			console.log("should be an amount  IN   ",transx.input.amount
)
              myIns+=transx.input.amount
            }
               for(let i = 0;i< transx.outputs.length; i++){
          //console.log("this is an output",transx)
                   if (transx.outputs[i].address ===  myK){
			console.log("should be an amount    OUT ",transx.outputs[i].amount)
                      myOuts+=transx.outputs[i].amount

                  }

               }
        }
       // console.log("these are tx", transactions)


        //console.log("input amt ", myIns)
        //console.log("output amt", myOuts)
        balance = 0
      balance= myOuts - myIns
      console.log ("my balance  :",balance )
     

    return balance;
  }

  static blockchainWallet() {
    const blockchainWallet = new this();
    blockchainWallet.address = 'xxFr33M0n3yf0rU$$$$ ';
    return blockchainWallet;
  }
}

module.exports = Wallet;