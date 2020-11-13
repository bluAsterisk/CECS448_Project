const globalTheme = {
    switchWidth: '40px',
    switchHeight: '20px',
    switchPadding: '3px',
    colorContrastLow: '#d3d3d4',
    colorWhite: '#FFF',
    switchColorPrimary: '#302C40',
    switchAnimationDuration: '0.2s',
    gradient: 'linear-gradient(122deg, rgba(128,74,216,1) 0%, rgba(9875,217,1) 100%)',
    colorGreen: '#5DC399',
    colorGray: '#adadad',
}

export const LightTheme = {
    primary: '#FFF',
    secondary: '#F5F5F5',
    textColor: '#303030',
    header: '#585280',
    headerNumber: '#FFF',
    activeMenu: '#585280',
    ...globalTheme
}

export const DarkTheme = {
    primary: '#302C40',
    secondary: '#2C2839',
    textColor: '#FFF',
    header : '#FFF',
    headerNumber: '#585280',
    activeMenu: '#FFF',
    ...globalTheme
}