const {Huffman} = require('huffman-ts')

let text1=`aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnoopqrstuvwxyz0000000000000000000000000000000000000000"nonce":0,"difficulty":3,"bubbles":[{"u":0,"n":0}],"mints":[]}]"nonce":0,"difficulty":3,"bubbles":[{"u":0,"n":0}],"mints":[]}]333333333333333333333222222222222222222222{"chain":[{"timestamp":"Genesis time","lastHash":"-----","hash":"f1r57-h45h","data":[],"nonce":0,"difficulty":3,"bubbles":[{"u":0,"n":0}],"mints":[]}]}2222222224444444444444444444445555555555555555555555555555555555555556666666666666666666666666666666666777777777777777777777777777777777777777777777777788888888888887777777777777777777777777777777777777777777777777776666666666666666666666666666666666666666888888999999999999999999998898979789758957564563453452342345345345w123123210000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000asdfghasdfghjasdfgcbcbcbcbcbcbcbcbcbcbcbcbcbabcdfgabcdefgabcdefgblock chain ,{},[]<:::,mnopquwtyfdhasldwghcbzmcvbvzsdl;wer;;;111111111111111ffffffffffffffffffffff()77774563214554788845500000000000000000000000000000000000000000000000000000000000()abcdefgeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffefefeffefefefefefefefggggggggggggggggggg01234567aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeefffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`
let text2=`aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999998888888888888788888888888888888888888888877777777777777777777777777777777777777777777777777777777777777777776666666666666666666666666666666666666666666666666666666655555555555555555555555555555555555555555555555555564544444444444444444444444444444444444444444444444444333333333333333333333333333333333222222222222222222222222222222222222221111111111111111111abcdreinmbxcm,.vZMXC>?v,blockinputjjdfk'gl;gtio0000000000000abcdefggfedcaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbccccccccccccccccccccccccccddddddddddddddddddddeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffggggggggggggggggeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999080560756795r96459679753488509345803945898468396-590458609534985950345,,,,,,,,,{}{}{}{}{}{}{}{[][][][][][,,,,,,,,,,,,,::::::::::::::::::::::::0000012333330441jgdfgdfjghsdflkjhfnsxcbvhcbv000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111999999999`
let text3=`0900000000000000000000000000000000000000000000000000000000000000000000aaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbccccccccccccccccccccccccccddddddddddddddddddddeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffggggggggggggggggeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999080560756795r96459679753488509345803945898468396-590458609534985950345,,,,,,,,,{}{}{}{}{}{}{}{[][][][][][,,,,,,,,,,,,,::::::::::::::::::::::::0000012{"chain":[{"timestamp":"Genesis time","lastHash":"-----","hash":"f1r57-h45h","data":[],"nonce":0,"difficulty":3,"bubbles":[{"u":0,"n":0}],"mints":[]}]}333330441jgdfgdfjghsdflkjhfnsxcbvhcbvksdjfskljfdf99999999999999999999999999999999999999999999999999999988888888888887888888888888888888888888888777777777777777777777777777777777777777777777777777777777777777777766666666666666666666666666666666666666666666666666666666555555555555555555555555555555555555555555555555555645444444444444444444444444444441111111111111111111111111111111111111111111111111111111111111111111111111114444444444444444444443333333333333333333333333333333332222222222222222222222222222229999999999999999999999999999999999999999999999999999999999999998978978978090667867757456456456453452343523454565456565675676787878978989789989098967876756656456000000000`
let text4=`1111111111ffffffffffffffffffffff()7777456321455478884550000000000000123456780000000000asdfghasdfghjasdfgcbc0000000000000000000000000000000000000()abcdefgeeeeeeeeeeeeeeee{"chain":[{"timestamp":"Genesis time","lastHash":"-----","hash":"f1r57-h45h","data":[],"nonce":0,"difficulty":3,"bubbles":[{"u":0,"n":0}],"mints":[]}]}eeeeeeeeeeeeeeeeeeeeinputoutput,,,,efefefeffefefeffefefefefefefefggggggggggggggggggg012345678900000000000000000000000000000000000000000000000000000000000000011111111111111111111111111111111111111111111111111111113333333333333333333333333333333333333333333332222222222222222222222222222224444444444444444444445555555555555555555555555555555555555556666666666666666666666666666666666777777777777777777777777777777777777777777777777788888888888887777777777777777777777777777777777777777777777777776666666666666666666666666666666666666666888888888888889999999999999999999999999999999999999998898979789758957564563453452342345345345w123123210000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000abcdefghijklmnopqrstuvwxyz9876543210gfedcbaabcdefg00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004444444444444444444444444444444444444444444444444444455555555555555555555555555555566666666666666666666677777777777777777777788888888809090990888888888`
let text5=`{"balance":lastHash"500return new this('Genesis time', '-----', 'f1r57-h45h', [],[{"u":0,"n":0}],[], 0, 0)  },"keyPair":{"ec":{"curve":{"type":"short","p":"ffffffff}f{}gffffffffffffff[]][*()ffffffffffGffffffffffffffffffffffefffffc2f","red":{"m":"fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffhghghghghghghfffffffffffffffdddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111110000000000000000000999999999999900000000000000000000000000000000000000000000000000000000000000000000000000000000000099999999999999999999999999999999999900000000000000000000000000000000000000aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssscccccccccccccccvvvvvvvvvzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzdddddddddddddddddddd00000000000000000000000000000000000000001111111111111111111111111111111111`

let myTxt

class BlockGame{

constructor(huff) {

    this.huff=huff
     this.something =this.funct(this.huff)

}

            funct(challenger ){

                
                let myTxt = ''
                  let ar2=[]
                  let ar1=[]
                  let ar3=[]
                  let ar4=[]
                  let ar5=[]
                //lets create our input from the block and our shared text
              //our seed text
              //create arrays from texts
              
              
              for (var i = 0; i < text1.length; i++) {
                let estrings= text1.charCodeAt(i)
              
                   ar1.push(estrings)  //our array of 8 bit  decimal values
              }
              for (var i = 0; i < text2.length; i++) {
               let estrings= text2.charCodeAt(i)
              
                   ar2.push(estrings)  //our array of 8 bit  decimal values
              }
              
              for (var i = 0; i < text3.length; i++) {
              let estrings= text3.charCodeAt(i)
              
                 ar3.push(estrings)  //our array of 8 bit  decimal values
              }
              
              
              for (var i = 0; i < text4.length; i++) {
              let estrings= text4.charCodeAt(i)
              
                 ar4.push(estrings)  //our array of 8 bit  decimal values
              }
              
              for (var i = 0; i < text5.length; i++) {
              let estrings= text5.charCodeAt(i)
              
                 ar5.push(estrings)  //our array of 8 bit  decimal values
              }
                     
              // lets re-create our input 
                  
                  
                    
                        let v1 = challenger.v1
                                let v2 = challenger.v2
                                  let v3 = challenger.v3
                                    let v4 = challenger.v4
                                         let blurray2=[]
                                     let blurray=[]
                                  let blurray3=[]
                                   let blurray4=[]
                                        let blurray5=[]
                                myTxt=`[{"amount":420,"address":"04574dc615ac4864b446b32e1e51133ba28f5abe71fe51501fde9a25d247fe169a633ff685f8a841cb78ec5c9127e52fb533e0effddba849b83e92d4434620fa75"}]}],"nonce":223,"difficulty":2,"bubbles":[{"u":"Spayse","n":1}]},{"timestamp":1619021121282,"lastHash":"009c1c8de8e2bf38c12c6cafc9f53e293ae8bf4ba55e8d494b546d1940a272635dfdf2c32769ca96","hash":"000df63de5b23c7a8fb22e6dee69850633624f121f32e355f56321e2d2bc912c00a58ec8714f72a6","data":[{"id":"5f935fd0-a2bb-11eb-840e-517d3b283763","input":{"timestamp":1619021121101,"amount":0,"address":"04e18a0f551bdf457852848c53ef0368f05aa20b6fa7a23b09dce924f10ca60ad999b93017d095d9f755b38b70f8d991b396e6f4f7cc4a23825c309330f8727298","signature":{"r":"578eb3fe69325281ba1d11f5065903385e2195d78fe3362755960e45ad81b0ee","s":"7ad8c9ac53fae1aaed30255b6e90248e79564ab30f29dfebf34cf14d2b81fb9","recoveryParam":1}},"outputs":[{"amount":420,"address":"04574dc615ac4864b446bffffffffffffffffffffffffffdfffffffffffffffffddddddddddddddddddddddddddddd4eeeeeeeee43343400000000000000000000000000000000000000000111111111fbbbbhbbbbbbbbbbbbbbbbbbb32e1e51133ba28f5abe71fe51501fde9a25d247fe169a633ff685f8a841cb78ec5c9127e52fb533e0effddba849b83e92d4434620fa75"}]}],"nonce":3379,"difficulty":3,"bubbles":[]},{"timestamp":1619021650150,"lastHash":"000df63de5b23c7a8fb22e6dee69850633624f121f32e355f56321e2d2bc912c00a58ec8714f72a6"}]`
                
                                for (let i = 0; i<ar1.length; i++ ){
                                  let slidx=challenger.v1
                                let n = lerp(ar1[i],ar4[i],slidx)
                                blurray.push(n)
                                
                                
                                }
                                
                                for (let i = 0; i<ar2.length; i++ ){
                                  let slidx=challenger.v2
                                  let n = lerp(ar2[i],ar3[i],slidx)
                                  blurray2.push(n)
                                  
                                  }
                                
                                
                                 for (let i = 0; i<blurray.length; i++ ){
                                    let slidx=challenger.v3
                                    let n = lerp(blurray2[i],blurray[i],slidx)
                                      blurray3.push(n)
                                    }
                                
                                 for (let i = 0; i<blurray.length; i++ ){
                                    let slidx=challenger.v4
                                    let n = lerp(blurray2[i],blurray3[i],slidx)
                                      blurray5.push(n)
                                    }
                                
                                
                                 for (let i = 0; i<ar5.length; i++ ){
                                    let slidx=challenger.v3
                                    let n = lerp(blurray5[i],blurray[i],slidx)
                                      blurray4.push(n)
                                    }
                                 
                                
                                   
                                 for (let i = 0; i<blurray2.length; i++ ){
                                    let slidx=challenger.v4
                                    let n = lerp(blurray4[i],blurray3[i],slidx)
                                    myTxt+=String.fromCharCode(n)     
                                   }
                                
                                
                              //strip the block from the chain 
                          let pBlock=challenger.huff
                   let huffman = Huffman.treeFromText(myTxt)
                  let decoded = huffman.decode(JSON.stringify(pBlock))


                return decoded
            }


}

moidule.exports = BlockGame