interface MajorCredits {
  credits: number;
  _majorBrand: 'major';
}

interface MinorCredits {
  credits: number;
  _minorBrand: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: 'major',
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: 'minor',
  };
}

const Mathematics = { credits: 4 } as MajorCredits;
const English = { credits: 4 } as MajorCredits;
const Writing = { credits: 2 } as MinorCredits; 
const Sport = { credits: 1 } as MinorCredits; 

console.log(sumMajorCredits(Mathematics, English));
console.log(sumMinorCredits(Writing, Sport));
