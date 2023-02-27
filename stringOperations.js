/*

1.2. Преобразование строки с целью правильно расстановки пробелов. 
“Вот пример строки,в которой     используются знаки препинания.
После знаков должны стоять пробелы , а перед знаками их быть не должно .    
Если есть лишние подряд идущие пробелы, они должны быть устранены.” =>
“Вот пример строки,в которой используются знаки препинания. После знаков должны стоять пробелы, а перед знаками их быть не должно. 
Если есть лишние подряд идущие пробелы, они должны быть устранены.”
1.3. Посдчитывающие кол-во слов в строке.
1.4. Подсчитывающий, уникальные слова. 
“Текст, в котором слово текст несколько раз встречается и слово тоже” - в ответе, что “слово - 2 раза, текст - 2 раза, в - 1 раз, несколько - 1 раз“. 
Самостоятельно придумать наиболее удачную структуру данных для ответа.
*/
function delBackAdd(text) {

    let resultText = '';

    for (let i = 0; i < text.length; i++) {
        let currenSymbol = text[i];
        let nextSymbol = text[i + 1];
        if (currenSymbol === ' ' && nextSymbol === ' ') {
            resultText += '';
        } else if (currenSymbol === ' ' && (nextSymbol === '.' || nextSymbol === ',')) {
            resultText += '';
        } else if ((currenSymbol === '.' || currenSymbol === ',') && nextSymbol !== ' ') {
            resultText += text[i] + ' ';
        } else {
            resultText += text[i];
        }
    }
    return resultText[0].toUpperCase() + resultText.slice(1);
}

function getNumnerOfWord(text) {
    word = text.replace(/\.|\,/g, ' ').replace(/^\s*/, '').replace(/\s*$/, '').split(/[\s]+/).length;
    return word;
}

function getNumberWord(text) {
    const newObj = {};
    text = text.replace(/\.|\,/g, ' ').replace(/^\s*/, '').replace(/\s*$/, '').split(/[\s]+/);
    for (let word of text) {
        newObj[word] = newObj[word] + 1 || 1;
    }
    return newObj;
}

let someText = `вот пример строки, в которой     используются знаки препинания.После знаков должны     стоять пробелы    , а перед знаками их быть не должно .Если есть лишние подряд идущие пробелы    , они должны быть устранены .End,some,extra    text  .`;


someText = delBackAdd(someText);
console.log('Скорректированная строка:');
console.log(someText);
console.log('Количество слов в предложении: ' + getNumnerOfWord(someText));
console.log('Подсчет уникальных слов в предложении: ');
console.log(getNumberWord(someText));
