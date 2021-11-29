export const uppercaseFirst = word => word.charAt(0).toUpperCase() + word.slice(1)

export const splitByUppercase = word => word.match(/[A-Z][a-z]+/g).join(" ")

export const normalizeProvinceName = province => {
    switch (province) {
        case "dki jakarta":
            return "Jakarta"
        case "di yogyakarta":
            return "Daerah Istimewa Yogyakarta"
        default:
            if (province.includes("sumatera"))
                return province.replace('sumatera', 'sumatra')
            else
                return province
    }
}

export const uppercaseEachWord = (inputWord) => {
    if (inputWord !== undefined) {
        let words = inputWord.split(' ');
        let capitalizedWords = [];
        words.forEach(element => {
            capitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));
        });

        return (capitalizedWords.join(' '));
    }
    else return inputWord
}
