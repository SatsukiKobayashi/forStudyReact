/**
 * テンプレート文字列（文字列の中に変数を埋め込める）
 */
const name = "neko";
const age = "28";

//before
const before = "I'm " + name + ". Age is " + age;
console.log(before);

//Use templateString
const useTemplateString = `This is using templateString.I'm ${name}.Age is ${age}`;
console.log(useTemplateString);
