/*

var Year = function (input) {
    this.year = input;
};

Year.prototype.isLeap = function () {

    const year = this.year;

    if (year % 4 === 0 && year % 100 === 0) {
        return year % 400 === 0
    } else {
        return year % 4 === 0
    }
};

*/

var RnaTranscription = function () {};

RnaTranscription.prototype.toRna = function (dna) {

    dna = dna.toString().split('');

    let rna = '';

    dna.forEach(e => {
        switch (e) {
            case 'C':
                rna += 'G';
                break;

            case 'G':
                rna += 'C';
                break;

            case 'A':
                rna += 'U';
                break;

            case 'T':
                rna += 'A';
                break;
        
            default:
                throw new Error('Invalid input');
                break;
        }
    });

    return rna;
};

module.exports = RnaTranscription;