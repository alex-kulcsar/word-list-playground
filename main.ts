let input: string
input = ""
let msg: string
msg = "Random words from word list:"
for (let index = 0; index < 10; index++) {
    msg = "" + msg + "\n" + WordLists.getRandomWordFromSet(WordLists.MoodleWords)
}
game.showLongText(msg, DialogLayout.Full)
let EXIT_TOKEN: string
EXIT_TOKEN = "EXIT NOW"
msg = ""
while (input != EXIT_TOKEN) {
    input = game.askForString("Enter a word.")
    if (input.toUpperCase() == EXIT_TOKEN) {
        break;
    }
    if (false) {

    } else {

    }
}
