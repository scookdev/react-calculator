class NumeralFormatConverter {
  romanToStandard = (romanNumeral: string): number => {
    const numeralSequence = /M{4,}|D{4,}|C{4,}|L{4,}|X{4,}|V{4,}|I{4,}/
    if (romanNumeral.match(numeralSequence)) {
      throw new Error('Invalid Input');
    }
    const conversions = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }

    const digits: string[] = romanNumeral.split('');
    let total: number = 0;
    let standard: number = 0;
    let nextStandard: number = 0;
    let roman: string;
    let nextRoman: string;

    for (let i: number = 0; i < digits.length; i++) {
      roman = digits[i];
      standard = conversions[roman]
      nextRoman = digits[i + 1];
      nextStandard = conversions[nextRoman];
      if ((standard < nextStandard) && (nextRoman !== undefined)) {
        total -= standard;
      } else {
        total += standard;
      }
    }

    return total;
  }

  standardToRoman = (standardNumeral: number): string => {
    let total: string = '';
    const conversions = {
      'M': 1000,
      'CM': 900,
      'D': 500,
      'CD': 400,
      'C': 100,
      'XC': 90,
      'L': 50,
      'XL': 40,
      'X': 10,
      'IX': 9,
      'V': 5,
      'IV': 4,
      'I': 1
    }

    for (let k in conversions) {
      while (standardNumeral >= conversions[k]) {
        total += k;
        standardNumeral -= conversions[k];
      }
    }

    return total;
  }
}

export default NumeralFormatConverter;
