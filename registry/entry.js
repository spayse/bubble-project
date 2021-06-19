 
class RegEntry {
            constructor(num,timestamp,auser, ip,address,pic) {
           this.id =num
          this.timestamp = timestamp;
           this.user= auser;
             this.ip = ip;
               this.address=address
                this.pic =pic
               this.bubbles=0
             this.likes=0
           this.liked=0
          this.pops=0 
           this.popped = 0
            this.rank = 0
              this.title="worm"
                this.trust=0
                  this.subs=0
                 this.burns=0
                this.pwnd=0
                this.clout=0
                this.community=0
                 this.isActive=false            
    }



          static newEntry(num,username, ip,address,pic){
           let id =JSON.parse(num)
            let timestamp = Date.now();
         
               
         return new this(id,timestamp,username, ip,address,pic,this.bubbles,this.likes,this.liked,this.pops,this.popped,this.rank,this.trust,this.subs,this.burns,this.pwnd,this.clout,this.community,this.isActive);

      }
     




        
}

module.exports=  RegEntry