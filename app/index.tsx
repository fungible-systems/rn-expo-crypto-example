import {Button, Text} from "react-native";
import * as React from 'react'
import {HDKey} from "@scure/bip32";
import {generateMnemonic, mnemonicToSeedSync} from "@scure/bip39";
import {wordlist} from '@scure/bip39/wordlists/english'

const makeKey = () => {
    console.log('starting key')
    const start = performance.now()
    HDKey.fromMasterSeed(mnemonicToSeedSync(generateMnemonic(wordlist)))
    const end = performance.now()
    console.log(`Creating a key took ${end - start} ms.`)
}

export default function Page() {
    return <React.Fragment>
        <Text>Demo page</Text>
        <Button title={"empty"}
        />
        <Button title={"Make key"}
                onPress={() => {makeKey()}}
        />
    </React.Fragment>;
}
