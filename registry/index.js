

const RegEntry= require('./entry')


class  Registry{
    constructor(myList) {
      this.list=myList                


    
 }


    register(user,ip,address,pic) {
             
 
         let num =this.list.length  
             let username=`${user}`
             console.log(this.list)
          let entry={}
              entry = RegEntry.newEntry(num,`${username}`,ip,address,pic);
        entry.isActive =true
               
         this.checkReg(entry,(cb)=>{
           
          if(cb="th"){ console.log( "CALL ME",cb)  }
         entry=cb
         })

         this.list.push(entry)
               return entry
      }
 
checkReg(entry,cb){

    for (let i =0 ;i<this.list.length;i++){
        
            if(entry.user=this.list[i].user ){
             let  cb= "the name you requested is in use"
               return cb} else 
               if(entry.id=this.list[i].id ){
                cb= "there has been an error regarding your id please restart the software, if the problem persists contact 'Spayse Mc G'"
                  return cb} else 
                  if(entry.ip=this.list[i].ip ){
                cb= "the ip address  you provided  is allready in use"
             return cb} else{
              this.list.push(entry)
              console.log (entry)
          cb="success"
            return entry,cb
          }
     }
}

    updateList(lists,cb){

      lists.forEach(list => {
        const entry=this.checkReg(list,(cb)=>{
          console.log
            if(cb="success"){ 
            this.list=[]
            this.list.push(entry)
            return list
           }
        })
     })
        console.log(list)
        return list
     }   

    }

module.exports= Registry