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
    export function findWord(word: string): boolean {
        const value: BigNum.BigInt = getWordValue(word)
        const k: number = GameWords.FILTERS[word.length].k
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
        const block: string = GameWords.FILTERS[wordLength].filter.substr(blockNum * 4, 4)
        const byte: number = Buffer.fromBase64(block).getUint8(byteNum)
        return (byte & (1 << bitNum)) != 0
    }

    function getHashForWord(word: string, hash: number) {
        return getHashForWordValue(getWordValue(word), word.length, hash)
    }

    function getHashForWordValue(value: BigNum.BigInt, wordLength: number, hash: number): number {
        const a: BigNum.BigInt = BigNum.CreateBigInt(GameWords.FILTERS[wordLength].aValues[hash])
        const b: BigNum.BigInt = BigNum.CreateBigInt(GameWords.FILTERS[wordLength].bValues[hash])
        const p: BigNum.BigInt = BigNum.CreateBigInt(GameWords.FILTERS[wordLength].p)
        const m: BigNum.BigInt = BigNum.CreateBigInt(GameWords.FILTERS[wordLength].m)
        // r = ax + b % p % m
        let r: BigNum.BigInt = a.multiply(value).add(b).mod(p).mod(m)
        return r.toNumber()
    }

    function getWordValue(word: string): BigNum.BigInt {
        const ucWord: string = word.toUpperCase()
        let toReturn: BigNum.BigInt = BigNum.CreateBigInt(0)
        for (let c of ucWord) {
            // toReturn = (toReturn << 5) + c.charCodeAt(0) - 'A'.charCodeAt(0)
            toReturn = toReturn.leftShift(5).add(c.charCodeAt(0)).subtract('A'.charCodeAt(0))
        }
        return toReturn.length == 0 ? BigNum.CreateBigInt(1) : toReturn
    }
}