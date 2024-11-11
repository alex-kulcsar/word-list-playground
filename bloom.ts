// Original implementation.

interface BloomFilter {
    n: number,
    m: number,
    k: number,
    p: string,
    prob: number,
    aValues: string[],
    bValues: string[],
    filter: string,
}

namespace Bloom {
    /*
    export function findWord(word: string): boolean {
        const value: JSBI.BigInt = getWordValue(word)
        const k: number = FILTERS[word.length].k
        // game.splash(value)
        for (let i: number = 0; i < k; i++) {
            if (!getFilterBit(getHashForWordValue(value, word.length, i), word.length)) {
                return false
            }
        }
        return true
    }

    function getFilterBit(location: number, wordLength: number): boolean {
        const blockNum: number = Math.floor(location / 24)
        const byteNum: number = Math.floor((location % 24) / 8)
        const bitNum: number = location % 8
        const block: string = FILTERS[wordLength].filter.substr(blockNum * 4, 4)
        const byte: number = Buffer.fromBase64(block).getUint8(byteNum)
        return (byte & (1 << bitNum)) != 0
    }

    function getHashForWord(word: string, hash: number) {
        return getHashForWordValue(getWordValue(word), word.length, hash)
    }

    function getHashForWordValue(value: JSBI.BigInt, wordLength: number, hash: number): number {
        const a: JSBI.BigInt = JSBI.CreateBigInt(FILTERS[wordLength].aValues[hash])
        const b: JSBI.BigInt = JSBI.CreateBigInt(FILTERS[wordLength].bValues[hash])
        const p: JSBI.BigInt = JSBI.CreateBigInt(FILTERS[wordLength].p)
        const m: JSBI.BigInt = JSBI.CreateBigInt(FILTERS[wordLength].m)
        // ax + b % p % m
        let r: JSBI.BigInt = JSBI.multiply(a, value)
        r = JSBI.add(r, b)
        r = JSBI.mod(r, p)
        r = JSBI.mod(r, m)
        return r.toNumber()
    }

    function getWordValue(word: string): JSBI.BigInt {
        const ucWord: string = word.toUpperCase()
        let toReturn: JSBI.BigInt = JSBI.CreateBigInt(0)
        for (let c of ucWord) {
            // toReturn = (toReturn << 5) + c.charCodeAt(0) - 'A'.charCodeAt(0)
            toReturn = JSBI.leftShift(toReturn, 5)
            toReturn = JSBI.add(toReturn, JSBI.CreateBigInt(c.charCodeAt(0) - 'A'.charCodeAt(0)))
        }
        return toReturn.length == 0 ? JSBI.CreateBigInt(1) : toReturn
    }
    */
}