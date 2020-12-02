const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(number, DNA){
  return {
    _specimenNum: number,
    _dna: DNA,
    mutate(){
      const randomBaseNumber = Math.floor(Math.random()*15);
      const randomBase = this._dna[randomBaseNumber];
      console.log(randomBaseNumber)
      while(true){
        let changeBase = returnRandBase()
        if(changeBase !== randomBase){
          this._dna[randomBaseNumber] = changeBase;
          break;
        }
      }
      return this._dna;
    },
    compareDna(pAequor){
      let count = 0;
      for(let i = 0; i< 15;i++){
        if(this._dna[i] === pAequor._dna[i]){
          count += 1;
        }
      }
      const matchPercentage = (count*100)/15;
      console.log(`specimen: ${this._specimenNum} and specimen: ${pAequor._specimenNum} shares ${matchPercentage}% of DNA`);
    },
    willLikelySurvive(){
      let count = 0;
      for(let i =0;i<15;i++){
        if(this._dna[i] === 'C' || this._dna[i] === 'G'){
          count += 1;
        }
      }
      if(count/15 >= 0.6){
        return true;
      }else{
        return false;
      }
    }
  }
}
let specimens = [];
let count = 0;
while(count < 30){
  let specimen = pAequorFactory(count,mockUpStrand());
  if(specimen.willLikelySurvive()){
    specimens.push(specimen);
    count += 1;
  }
}
console.log(specimens)

//const testDna1 = mockUpStrand();
//console.log(testDna1)
//const testDna2 = mockUpStrand();
//console.log(testDna2)
//const specimen1 = pAequorFactory(1,testDna1);
//const specimen2 = pAequorFactory(2,testDna2);
//console.log(specimen1.mutate())
//specimen1.compareDna(specimen2)
//console.log(specimen1.willLikelySurvive())
