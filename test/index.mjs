export function createElement (type, properties, children) {
    properties = Object.entries(properties).map(([name, value]) => {return`${name}=${value}`}).join(' ');
    console.log(properties)
    return `<${type} ${properties}>${children}</${type}>`
}