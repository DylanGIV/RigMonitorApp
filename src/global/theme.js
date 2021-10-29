import { DarkTheme, Colors, DefaultTheme } from 'react-native-paper';

const dark = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: Colors.blue700,
        accent: Colors.green700,
        surface: Colors.grey900,
    }
}

const light = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.lightBlue200,
        accent: Colors.green700,
        surface: Colors.grey200,
    }
}

const darkTheme = {
    ...dark
}
const lightTheme = {
    ...light
}

export { darkTheme, lightTheme };