function isValidColor(strColor) {
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor.toLowerCase();
}

function submit() {
    let input = (document.getElementById('input').value)
    let data = isValidColor(input)
    if(data == true) {
        document.getElementsByTagName('body')[0].style.backgroundColor = input
    } else if(/^#([0-9A-F]{3}){1,2}$/i.test(input) == true) {
        document.getElementsByTagName('body')[0].style.backgroundColor = input
    } else {
        document.getElementById('error').innerHTML=`'${input}' is not a valid color.`
    }
}