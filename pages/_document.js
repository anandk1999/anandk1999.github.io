import { ColorModeScript } from "@chakra-ui/react";
import NextDocument from "next/document"
import {Html, Head, Main, NextScript} from "next/document"
import theme from "../libs/theme"

export default class Document extends NextDocument {
    render(){
        return(
            <Html lang="en">
                <Head />
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}