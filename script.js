function convertToLowerCase() {
    const inputText = document.getElementById('input').value;
    const outputText = inputText.toLowerCase();
    document.getElementById('output').value = outputText;
}

function convertToUpperCase() {
    const inputText = document.getElementById('input').value;
    const outputText = inputText.toUpperCase();
    document.getElementById('output').value = outputText;
}

function convertToTitleCase() {
    const inputText = document.getElementById('input').value;
    const words = inputText.split(' ');
    const titleCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    const outputText = titleCaseWords.join(' ');
    document.getElementById('output').value = outputText;
}

function convertToSentenceCase() {
    const inputText = document.getElementById('input').value;
    const sentences = inputText.split('. ');
    const sentenceCaseSentences = sentences.map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase());
    const outputText = sentenceCaseSentences.join('. ');
    document.getElementById('output').value = outputText;
}
