import {Text} from "react-native";
import * as React from 'react'
import * as secp from '@noble/secp256k1';


// from readme
async function testFn () {
    // keys, messages & other inputs can be Uint8Arrays or hex strings
    // Uint8Array.from([0xde, 0xad, 0xbe, 0xef]) === 'deadbeef'
    const privKey = secp.utils.randomPrivateKey();
    const pubKey = secp.getPublicKey(privKey);
    // @ts-ignore, wrong input, should be byte array
    const msgHash = await secp.utils.sha256('hello world');
    const signature = await secp.sign(msgHash, privKey);
    const isValid = secp.verify(signature, msgHash, pubKey);

    // Schnorr signatures
    const rpub = secp.schnorr.getPublicKey(privKey);
    const rsignature = await secp.schnorr.sign(msgHash, privKey);
    const risValid = await secp.schnorr.verify(rsignature, msgHash, rpub);
    // log the results
    console.log(privKey, pubKey, signature, isValid, risValid)
}
export default function Page() {
    // run the test fn
    void testFn()
    return <React.Fragment><Text>Demo page</Text></React.Fragment>;
}
