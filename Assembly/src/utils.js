import {words} from "./words"

export function getWords(){
    const rand=Math.floor(Math.random()*words.length)
    return words[rand]
}


export function getFarewellText(language){
    const options=[
        `Farewell, ${language}`,
        `Adios, ${language}`,
        `R.I.P., ${language}`,
        `We will, ${language}`,
        `Oh no,not ${language}`,
        `${language},bites the dust`,
        `Gone but not forgetten, ${language}`,
        `The end of ${language} as we know it`,
        `${language},it's been real`,
        `${language}, your watch has ended`
     ];

     const randomIndex=Math.floor(Math.random() * options.length)

     return options[randomIndex]
}