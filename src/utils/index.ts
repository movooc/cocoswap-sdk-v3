export { computePriceImpact } from './computePriceImpact'
export { sortedInsert } from './sortedInsert'
export { sqrt } from './sqrt'
export { validateAndParseAddress } from './validateAndParseAddress'



// import { BigintIsh } from '../constants'
import JSBI from 'jsbi'

// exports for external consumption
type BigintIsh = JSBI | bigint | string


// export enum TradeType {
//   EXACT_INPUT,
//   EXACT_OUTPUT
// }

// export enum Rounding {
//   ROUND_DOWN,
//   ROUND_HALF_UP,
//   ROUND_UP
// }

// export const FACTORY_ADDRESS = '0x553Deaee393ABc1A099a3d4e2834185a5164609B'

// export const INIT_CODE_HASH = '0x5f43ba80e99d33fca41aa69f99cd132a5db010e7eb0b38427e82752d23ebd39f'

// export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// // exports for internal consumption
// export const ZERO = JSBI.BigInt(0)
// export const ONE = JSBI.BigInt(1)
// export const TWO = JSBI.BigInt(2)
// export const THREE = JSBI.BigInt(3)
// export const FIVE = JSBI.BigInt(5)
// export const TEN = JSBI.BigInt(10)
// export const _100 = JSBI.BigInt(100)
// export const _997 = JSBI.BigInt(997)
// export const _1000 = JSBI.BigInt(1000)

// export enum SolidityType {
//   uint8 = 'uint8',
//   uint256 = 'uint256'
// }

// export const SOLIDITY_TYPE_MAXIMA = {
//   [SolidityType.uint8]: JSBI.BigInt('0xff'),
//   [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
// }

export function parseBigintIsh(bigintIsh: BigintIsh): JSBI {
    return bigintIsh instanceof JSBI
        ? bigintIsh
        : typeof bigintIsh === 'bigint'
        ? JSBI.BigInt(bigintIsh.toString())
        : JSBI.BigInt(bigintIsh)
}
