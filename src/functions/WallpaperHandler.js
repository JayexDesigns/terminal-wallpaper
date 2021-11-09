const weColorToHex = (r, g, b) => {
    let hex;
    r = Math.floor(r * 255).toString(16);
    g = Math.floor(g * 255).toString(16);
    b = Math.floor(b * 255).toString(16);
    if (r.length <= 1) {
        r = `0${r}`;
    }
    if (g.length <= 1) {
        g = `0${g}`;
    }
    if (b.length <= 1) {
        b = `0${b}`;
    }
    hex = `#${r}${g}${b}`;
    return hex;
}

export default async function WallpaperHandler(setProperties) {
    window.wallpaperPropertyListener = {
        applyUserProperties: function(properties) {
            if (properties.backgroundColor) {
                let color = properties.backgroundColor.value.split(" ");
                color = weColorToHex(color[0], color[1], color[2]);
                setProperties(prevProperties => {
                    prevProperties.backgroundColor = color;
                    return prevProperties;
                });
            }
            if (properties.cursorColor) {
                let color = properties.cursorColor.value.split(" ");
                color = weColorToHex(color[0], color[1], color[2]);
                setProperties(prevProperties => {
                    prevProperties.cursorColor = color;
                    return prevProperties;
                });
            }
            if (properties.textColor) {
                let color = properties.textColor.value.split(" ");
                color = weColorToHex(color[0], color[1], color[2]);
                setProperties(prevProperties => {
                    prevProperties.textColor = color;
                    return prevProperties;
                });
            }
            if (properties.hintColor) {
                let color = properties.hintColor.value.split(" ");
                color = weColorToHex(color[0], color[1], color[2]);
                setProperties(prevProperties => {
                    prevProperties.hintColor = color;
                    return prevProperties;
                });
            }
            if (properties.primaryColor) {
                let color = properties.primaryColor.value.split(" ");
                color = weColorToHex(color[0], color[1], color[2]);
                setProperties(prevProperties => {
                    prevProperties.primaryColor = color;
                    return prevProperties;
                });
            }
            if (properties.secondaryColor) {
                let color = properties.secondaryColor.value.split(" ");
                color = weColorToHex(color[0], color[1], color[2]);
                setProperties(prevProperties => {
                    prevProperties.secondaryColor = color;
                    return prevProperties;
                });
            }
            if (properties.successColor) {
                let color = properties.successColor.value.split(" ");
                color = weColorToHex(color[0], color[1], color[2]);
                setProperties(prevProperties => {
                    prevProperties.successColor = color;
                    return prevProperties;
                });
            }
            if (properties.infoColor) {
                let color = properties.infoColor.value.split(" ");
                color = weColorToHex(color[0], color[1], color[2]);
                setProperties(prevProperties => {
                    prevProperties.infoColor = color;
                    return prevProperties;
                });
            }
            if (properties.warningColor) {
                let color = properties.warningColor.value.split(" ");
                color = weColorToHex(color[0], color[1], color[2]);
                setProperties(prevProperties => {
                    prevProperties.warningColor = color;
                    return prevProperties;
                });
            }
            if (properties.errorColor) {
                let color = properties.errorColor.value.split(" ");
                color = weColorToHex(color[0], color[1], color[2]);
                setProperties(prevProperties => {
                    prevProperties.errorColor = color;
                    return prevProperties;
                });
            }
            if (properties.terminalWidth) {
                let value = properties.terminalWidth.value;
                setProperties(prevProperties => {
                    prevProperties.terminalWidth = value;
                    return prevProperties;
                });
            }
            if (properties.terminalHeight) {
                let value = properties.terminalHeight.value;
                setProperties(prevProperties => {
                    prevProperties.terminalHeight = value;
                    return prevProperties;
                });
            }
            if (properties.terminalPosX) {
                let value = properties.terminalPosX.value;
                setProperties(prevProperties => {
                    prevProperties.terminalPosX = value;
                    return prevProperties;
                });
            }
            if (properties.terminalPosY) {
                let value = properties.terminalPosY.value;
                setProperties(prevProperties => {
                    prevProperties.terminalPosY = value;
                    return prevProperties;
                });
            }
        }
    }
}