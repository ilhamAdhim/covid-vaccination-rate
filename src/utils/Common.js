export const uppercaseFirst = word => word.charAt(0).toUpperCase() + word.slice(1)

export const splitByUppercase = word => word.match(/[A-Z][a-z]+/g).join(" ")

export const changeSumateraToSumatra = (area) => {
    if (area.includes('Sumatera') || area.includes('Sumatra'))
        area.replace('Sumatera', 'Sumatra')
}