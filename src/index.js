module.exports = function toReadable (number) {
   const numbers = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six', 
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen', 
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
    }
      let result = []
      if (numbers[number] !== undefined) {
         return numbers[number]
      } else if (number > 20 && number < 100) {
         convertFrom21To99(number)
      } else if (number >= 100 && number < 1000) {
         convertFrom100To999(number)
      }
   
      function convertFrom21To99(num) {
         let units = num % 10;
         let tens = num - units;
         if (tens !== 0) {result.push(numbers[tens])};
         if (units !== 0) {result.push(numbers[units])}
      }
      function convertFrom100To999(num){
         let hundreds = (num - num % 100) / 100;
         result.push(numbers[hundreds])
         result.push('hundred')
         let remainder = num % 100
         remainder <= 20 && remainder > 0? result.push(numbers[remainder]) : convertFrom21To99(remainder);
      }
      return result.join(' ')
}
