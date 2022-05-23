let obj = {
    prop: true,
    subObj: { val: 100 },
    greeting: function () {
    console.log("こんにちは。");
    },
   };
console.log(obj.prop);

console.log( obj.subObj.val)

obj.greeting();

//それぞれ、true 100 "こんにちは"とコンソールに出力するためのコード