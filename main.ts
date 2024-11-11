let words: TernaryStringSet = TernaryStringSet.fromB64StringSet(GameWords.WORD_SET_BASE_64_STRINGS)
if (words) {
    let max: number = words.size
    let msg: string = "Random words from word list:"
    for (let i: number = 0; i < 10; i++) {
        msg += "\n" + words.get(randint(0, max - 1))
    }
    game.showLongText(msg, DialogLayout.Full)
}

// From original implementation.
/*
const EXIT_TOKEN: string = 'EXIT NOW'
let input: string = ''
let msg: string
while (input != EXIT_TOKEN) {
    input = game.askForString('Enter a word.')
    if (input.toUpperCase() == EXIT_TOKEN) {
        break
    }
    if (input.length < GameWords.FILTERS.length && GameWords.findWord(input)) {
        msg = `Your word ${input} is likely in the database.`
    } else {
        msg = `Your word ${input} is not in the database.`
    }
    game.showLongText(msg, DialogLayout.Center)
}
*/