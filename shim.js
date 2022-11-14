/* -------------------------------------------------------------------------------------------------
 * Crypto related shims
 * -----------------------------------------------------------------------------------------------*/
import * as utils from '@noble/hashes/utils';
import * as Random from 'expo-random';
import * as secp from '@noble/secp256k1';
import { TextDecoder } from '@polkadot/x-textdecoder';
import { TextEncoder } from '@polkadot/x-textencoder';
import { hmac } from '@noble/hashes/hmac';
import { sha256 } from '@noble/hashes/sha256';

/* -------------------------------------------------------------------------------------------------
 * Random
 * -----------------------------------------------------------------------------------------------*/

const randomBytes = (byteLength = 32) => Random.getRandomBytes(byteLength);

// eslint-disable-next-line no-import-assign
secp.utils.randomBytes = utils.randomBytes = randomBytes;

/* -------------------------------------------------------------------------------------------------
 * hmac // sha256
 * -----------------------------------------------------------------------------------------------*/
secp.utils.hmacSha256Sync = (key, ...msgs) => hmac(sha256, key, secp.utils.concatBytes(...msgs));
secp.utils.hmacSha256 = async (key, ...msgs) => hmac(sha256, key, secp.utils.concatBytes(...msgs));
secp.utils.sha256 = async (...msgs) => sha256(secp.utils.concatBytes(...msgs));
secp.utils.sha256Sync = (...msgs) => sha256(secp.utils.concatBytes(...msgs));

/* -------------------------------------------------------------------------------------------------
 * Text encoding (utf8)
 * -----------------------------------------------------------------------------------------------*/
global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;


// freeze them so they can't be changed
Object.freeze(utils);
Object.freeze(secp.utils);
