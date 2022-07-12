const sayHello = (name) => console.log(`Hello ${name}!`);
// sayHello("neko");
//これはundefinedになる
sayHello(); //Hello undefined!

//setting default value at name
const sayGoodbye = (name = "ゲスト") => console.log(`Hello ${name}!`);
sayGoodbye(); //これは初期値の"ゲスト"が設定される.
sayGoodbye("neko"); //これは引数で渡された値が設定される。
