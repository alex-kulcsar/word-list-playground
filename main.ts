let msg = "Random words from WMW word list:"
for (let index = 0; index < 10; index++) {
    msg = "" + msg + "\\n" + WordLists.getRandomWordFromSet(WordLists.WhatsMyWordList)
}
game.showLongText(msg, DialogLayout.Full)
let EXIT_TOKEN = "EXITNOW"
let input2 = ""
while (EXIT_TOKEN != input2) {
    input2 = game.askForString("Enter a word.")
    if (String.makeUppercase(input2) == EXIT_TOKEN) {
        break;
    }
    if (WordLists.isWordInFilter(WordLists.GameWords2020, String.makeUppercase(input2))) {
        game.showLongText("The word '" + input2 + "' is likely in the database.", DialogLayout.Center)
    } else {
        game.showLongText("The word '" + input2 + "' is not in the database.", DialogLayout.Center)
    }
}
