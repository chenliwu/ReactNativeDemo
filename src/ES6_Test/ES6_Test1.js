import React from 'react';
import { 
    View,
    Text
 } from 'react-native';


/**
 * ES6 语法练习 
 * 2018-08-30
 * 
 * 箭头函数
 * 
 * ES6 允许使用“箭头”（=>）定义函数。
 * 
 */
export default class ES6Test extends React.Component{
    render(){
        //等同于 var f = function () { return 5 };
        const f = () => 5;

        //等同于var sum = function(num1, num2) { return num1 + num2;};
        //var sum = (num1, num2) => num1 + num2;

        //如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
        var sum = (num1, num2) => {
            num1 = 20;
            num2 = 30;
            return num1+num2;
        };

        //由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
        let getTempItem = id => ({ id: id, name: "Temp" });

        //如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。
        let fn = () => void alert("箭头函数练习");

        //箭头函数可以与变量解构结合使用。
        //// 等同于 function full(person) {return person.first + ' ' + person.last;}
        const full = ({ first, last }) => first + '---' + last;


        //箭头函数使得表达更加简洁。
        const isEven = n => n % 2 == 0;
        const square = n => n * n;

        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>value:{f()}</Text>
                <Text>value:{sum(10,10)}</Text>
                <Text>TempItem:{getTempItem.getTempItem}</Text>
                <Text>full:{full({first:"chenlw",last:"jsws"})}</Text>
                <Text>isEven：10---{isEven(10) == true?'yes':'no'},5---{isEven(5) == true?'yes':'no'}</Text>
                <Text>square：10*10 = {square(10)}</Text>
            </View>
        );
    }
}

/**
 * 使用注意点
箭头函数有几个使用注意点。

（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。
 */
