// This is a JavaScript module that is loaded on demand. It can export any number of
// functions, and may import other JavaScript modules if required.

export function prompt(message, defaultValue) {
    return window.prompt(message, defaultValue);
}

export function alert(message) {
    window.alert(message);
}

export function confirm(message) {
    return window.confirm(message);
}
export function consolelog(args) {
    window.console.log(args)
}

export function getOptionSelected(element) {
  return element.selected;
}
export function setOptionSelected(element, val) {
  element.selected = val;
}

export function getElementById(id) {
  return window.document.getElementById(id);
}
export function getElementsByClassName(classNames) {
  return window.document.getElementsByClassName(classNames);
}
export function getElementsByTagName(tagName) {
  return window.document.getElementsByTagName(tagName);
}
export function scrollTo(element, x, y) {
  element.scrollTo(x, y);
}