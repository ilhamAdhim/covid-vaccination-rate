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

export const getDayName = (dateStr, locale) => {
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });
}

export const getFormattedDate = (dateStr) => {
    let convertedDate = new Date(dateStr);
    let month = convertedDate.getMonth() + 1;
    let day = convertedDate.getDate();
    let year = convertedDate.getFullYear();

    return `${day}/${month}/${year}`
}