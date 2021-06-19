// elliptic curve    y^2=x^3+a*x +b 
// ported from python by spayse mcg 
// original https://github.com/wobine/blackboard101/blob/master/EllipticCurvesPart4-PrivateKeyToPublicKey.py
              

   class MyEcc{

            constructor(){
        this.pCurve = 2**256 - 2**32 - 2**9 - 2**8 - 2**7 - 2**6 - 2**4 -1// The proven prime
        this.bN=0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141 //Number of points in the field
        this.aCurve = 0;
        this.bCurve = 7 // These two defines the elliptic curve. y= x^3 + Acurve * x + Bcurve
        const gx = 55066263022277343669578718895168534326250603453777594175500187360389116729240
        const gy= 32670510020758816978083085130507043184471273380659243275938904335757337482424

        const gPoint = {gx,gy} //This is our generator point. Trillions of dif ones possible
      }

                
            modInv(a =this.aCurve  ,n=Pcurve){ //Extended Euclidean Algorithm/'division' in elliptic curves
                let lm=1
                let hm= 0
                let low= a%n
                let high = n


              while( low > 1){
                    let  aratio = high/low
                    let  nm = hm-lm*aratio
                const  myNew =  high-low*aratio
                 lm, low, hm, high = nm, myNew, lm, low
                }
                 
               return lm % n
            }







   }