const Transaction = require('../wallet/transaction');

class TransactionPool {
  constructor() {
    this.transactions = [];
  }

  updateOrAddTransaction(transaction) {

    console.log("TP   TX    :",transaction)
    let transactionWithId = this.transactions.find(t => t.id === transaction.id);

    if (transactionWithId) {
      this.transactions[this.transactions.indexOf(transactionWithId)] = transaction;
    } else {
      this.transactions.push(transaction);
    }
  }

  existingTransaction(address) {
   
    console.log ("A clump",JSON.stringify(this.transactions))
    let klump= this.transactions.find(t => t.input.address === address);
   
     return klump
  }

  validTransactions() {
    //console.log (this.transactions)
    return this.transactions.filter(transaction => {

      //console.log("a transaction",transaction)
      const outputTotal = transaction.outputs.reduce((total, output) => {
        return total + output.amount;
      }, 0);

      if (transaction.input.amount !== outputTotal) {
        console.log(`Transaction Total is bad from ${transaction.input.address}.    `+outputTotal  );
        return;
      }

      if (!Transaction.verifyTransaction(transaction)) {
        console.log(`Invalid signature from ${transaction.input.address}.`);
        return;
      }

      return transaction;
    });
  }

  clear() {
    this.transactions = [];
  }
}

module.exports = TransactionPool;