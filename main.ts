let words: TernaryStringSet = TernaryStringSet.fromB64StringSet(GameWords.WORD_SET_BASE_64_STRINGS)
if (words) {
    let max: number = words.size
    let msg: string = "Random words from word list:"
    for (let i: number = 0; i < 10; i++) {
        msg += "\n" + words.get(randint(0, max - 1))
    }
    game.showLongText(msg, DialogLayout.Full)
}