class NumeralFormatConverter {
  romanToStandard = (romanNumeral: string): number => {
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
        if (standard !== 1) {
          throw new Error('Invalid Roman Numeral');
        }
        total -= standard;
      } else {
        total += standard;
      }
    }

    return total;
  }
}

export default NumeralFormatConverter;
