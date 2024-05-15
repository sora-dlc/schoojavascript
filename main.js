//できる挙動





// //コンマ何秒後に動かす
// const me = {
//     firstName: 'Sora',
//     lastName:'Iijima',
//     introduce: function() {
//         console.log(`My name is ${this.firstName}`);
//         setTimeout(() => console.log(`${this.firstName} ${this.lastName}`), 1000)

//     }
// }
// me.introduce();













// //配列繰り返しの便利なやつ
// const colors = ['black', 'red', 'purple'];

// colors.forEach(item => console.log(`${item} flower blooms.`));

// //一つ一つに計算処理をしていくやつ
// const numbers = [0, 1, 2, 3, 4, 5];
// const doubles = numbers.map(item => item * 2);
// console.log(doubles); //

// //フィルターにかけて、条件に合うものを抜き出す
// const numbers = [0, 1, 2, 3, 4, 5];
// const evens = numbers.filter(item => item % 2 ===0);
// console.log(evens);


// const name1 = 'Migitera'
// const name2 = new String('Migitera')

// console.log(name2)





// //継承　extendでCharacterを複製できる
// //元のクラスでの関数を使える
// class Character {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }
//     introduce() {
//         console.log(`My name is ${this.name},I'm ${this.type}.`);
//     }
// }

// class MyCaracter extends Character {
//     constructor(name, type, attackPower) {
//         super(name, type);
//         this.attackPower = attackPower;
//     }
// }

// const gon = new MyCaracter('Gon Freecss', 'Enhancer',  20);
// console.log(gon.attackPower);
// gon.introduce();






// class Character {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }
//     introduce() {
//         console.log(`My name is ${this.name}, I'm ${this.type}.`);
//     }
// }

// const gon =new Character('Gon Freecss', 'Enhancer');

// gon.introduce();


////クラスとは
////クラスを使うときはnewを必ずつける
// class Character {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }
// }

// const gon =new Character('Gon Freecss', 'Enhancer');
// const killua = new Character('Killua Zoldyck', 'Trancmuter');
// const goreinu = new Character('Goreinu', 'Conjurer');

// console.log(gon); 
// console.log(gon.type);



// const now = new Date();
// console.log(now);
// console.log(now.getFullYear());

// const myBirthday = new Date('1982-12-23');
// console.log(myBirthday);
// console.log(myBirthday.getFullYear());





// //mathオブジェクト
// console.log(Math)

// //四捨五入
// console.log(Math.round(2.3));

// //ランダム
// console.log(Math.random())

// //0~80ランダム。四捨五入すると整数を出せる
// let randomNumber = Math.random() *80;
// randomNumber = Math.round(randomNumber)
// console.log(randomNumber);





// //関数の中で宣言された関数はほかの関数では認識されない
// const func = () => {
//     let a =1;
//     console.log(a);
// };

// func();
// console.log(a);



// let a = 'グローバルスコープにおいてのa';

// const func1 = () =>{
//     let a = 'func1においてのa';
//     console.log(a);
//     const func2 = () => {
//         let a = 'func2においてのa';
//         console.log(a);
//     };
//     func2();
// };
// console.log(a);
// func1();






// //引数がなかった時の挙動を設定できる
// const admire = (target = '電気') => {
//     console.log(`この年でオーラを${target}に変化させるなんて`);
// };

// admire();
// // admire('ゴリラ');


// const admire = (target = '先生の次回作にご期待ください') => {
//     console.log(`${target}`);
// };

// admire('○○をリリースしました!!');
// // admire('ゴリラ');






// //処理が一つしかない場合return書かなくてもいい
// const getCircleArea = r => r * r * Math.PI ;
// console.log(getCircleArea(5));





// //引数が一個の場合カッコを書かなくてもいい
// const getCircleArea = r => {
//     return r * r * Math.PI ;
// };

// console.log(getCircleArea(5));



// //引数なしでも作れる
// const func = () => {
//     console.log('hello');
// }

// func();


//じぶんでgetTriangleAreaという関数を作る
//関数式
// var getTriangleArea = function (base, height) {
//     return base * height / 2;
// };


//関数宣言
// function getTriangleArea (base, height) {
//     return base * height / 2;
// }



//アロー関数
// const getTriangleArea = (base, height) => {
//     return base * height / 2
// }

// console.log(getTriangleArea(10,5));
// console.log(getTriangleArea(1000,5));
// console.log(getTriangleArea(100000,5));





// age = 36;

// if(age){
//     console.log(`私は${age}歳です`)
// }





// const colors =['white','red','black'];

// for (let i = 0; i < colors.length; i++){
// console.log(`${colors[i]}flower blooms`);
// }





// for (let i = 0; i <10 ; i ++) {
//     console.log(`${i}回目のループ`)
// }





// let i =0;
// while (i< 10){
//     console.log(`${i + 1}回目のループ`);
//     i += 1;
// }







// const ANIMAL_DICTIONARY = {
//     cat: 'にゃー',
//     dog: 'わん',

// };

// const a = 'cat';

// console.log(ANIMAL_DICTIONARY[a])





// const a = 'pig';

// switch (a){
//     case 'cat':
//         console.log('にゃー');
//         break;
//     case 'dog':
//         console.log('わん')
//         break;
//     case 'pig':
//         console.log('ぶー')
//         break
//     default:
//         console.log('......')
// }




// const a = 100;

// if (a % 2 ===0){
//     if ( a> 10){
//         console.log('aは偶数で10より大きい数です');
//     } else {
//         console.log('aは偶数で10以下の数です');
//     }
// }



// const a = 200;
// const b = 200;

// if (a<b){
//     console.log('hello');
// } else if (a>b){
//     console.log('good night');
// } else{
//     console.log('good morning')
// }



// console.log(!(true && false)||(false || true))

// console.log(true || true)//or
// console.log(true || false)//or
// console.log(false || false)//or

// console.log(true && true)//and
// console.log(true && false)//and
// console.log(false && false)//and

// const age =36;
// if (age) {
//     console.log('私は$(age)歳です')
// }




// const myProfile = {
//    name: 'iijima sora',
//    age: 36,
//    married: true
// };

// for (key in myProfile) {
//     console.log(key, myProfile[key]);
// }



// const colors = ['white', 'black', 'red'];

// for (let i = 0; i < colors.length ; i ++) {
//     console.log(`${colors[i]}flower blooms.`);
// }


// for (let i = 0; i < 10 ; i ++) {
//     console.log(`${i + 1}回目のループ`);
// }


// let i = 0;

// while(i < 10) {
//     console.log(`${i + 1}回目のループ`);
//     i += 1;
// }





// const ANIMAL_DI[CTIONARY = {
//     cat: 'にゃ',



// };

// const a = 'cat';
// console.log(ANIMAL_DICTIONARY[a]);





// const $result = document.getElementById('result')

// const myProfile = {
//     name: 'Iijima Sora',
//     age: 22,
//     married: false,
// };
// const color = [
//     'white',
//     'red',
//     'puple',

// ];

// const result = color[0];



// $result.textContent = result;
