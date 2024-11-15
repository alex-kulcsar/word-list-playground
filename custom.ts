
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 * Won symbol: \uf159
 * Clipboard list: \uf46d
 * Table header list: \uf00b
 */
//% weight=0 color=#000000 icon="\uf022"
namespace WordLists {
    //% block
    export function getRandomWordFromSet(s: TernaryStringSet): string {
        return s.get(randint(0, s.size - 1))
    }

    //% block
    export function isWordInFilter(b: Bloom, w: string): number {
        return 0
    }
}
