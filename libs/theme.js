import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"

const styles = {
    global: props => ({
        body: {
            bg: mode("#ffffff", '#202023')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title':{
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: "#525252",
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },

    Link: {
        baseStyle: props =>({
            color: mode('#ff63c3','#3d7aed')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    
}

const colors = {
    glassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts
})

export default theme