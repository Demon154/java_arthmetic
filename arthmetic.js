/* arithmetic operation*/
// adding//
var x = 5
var y = 2
var z = x + y
console.log(z)
//subtraction//
var s = x - y
console.log(s)
// multiplication//
var m = x * y
console.log(m)
// division //
var d = x/y
console.log(d)
// increment //
x++
var i = x
console.log(i)
//decrement//
x--
var de = x
console.log(de)
// exponential//
var ex = x**2
console.log(ex)
//another way for exponential//
ex = 5
var z =Math.pow(ex,2)
console.log(z)
// arithmetic operator follows the bodmas rule like schools//
// in the code below first 100 will be multiplied by 3 then added to 4//
var u = 100 * 3 + 4
console.log(u)
// in the code below it will add first then multiply because the addition is in brackets//
u = 100 * (3 + 4)
console.log(u)
/* OPERATOR DICTIONARY
Value	Operator	Description	Example
21	( )	Expression grouping	(3 + 4)
 	 	 	 
20	.	Member	person.name
20	[]	Member	person["name"]
20	()	Function call	myFunction()
20	new	Create	new Date()
 	 	 	 
18	++	Postfix Increment	i++
18	--	Postfix Decrement	i--
 	 	 	 
17	++	Prefix Increment	++i
17	--	Prefix Decrement	--i
17	!	Logical not	!(x==y)
17	typeof	Type	typeof x
 	 	 	 
16	**	Exponentiation (ES2016)	10 ** 2
 	 	 	 
15	*	Multiplication	10 * 5
15	/	Division	10 / 5
15	%	Division Remainder	10 % 5
 	 	 	 
14	+	Addition	10 + 5
14	-	Subtraction	10 - 5
 	 	 	 
13	<<	Shift left	x << 2
13	>>	Shift right	x >> 2
13	>>>	Shift right (unsigned)	x >>> 2
 	 	 	 
12	<	Less than	x < y 
12	<=	Less than or equal	x <= y
12	>	Greater than	x > y
12	>=	Greater than or equal	x >= y
12	in	Property in Object	"PI" in Math
12	instanceof	Instance of Object	instanceof Array
 	 	 	 
11	==	Equal	x == y
11	===	Strict equal	x === y
11	!=	Unequal	x != y
11	!==	Strict unequal	x !== y
 	 	 	 
10	&	Bitwise AND	x & y
9	^	Bitwise XOR	x ^ y
8	|	Bitwise OR	x | y
7	&&	Logical AND	x && y
6	||	Logical OR	x || y
5	??	Nullish Coalescing	x ?? y
4	? :	Condition	? "Yes" : "No"
 	 	 	 
3	+=	Assignment	x += y
3	/=	Assignment	x /= y
3	-=	Assignment	x -= y
3	*=	Assignment	x *= y
3	%=	Assignment	x %= y
3	<<=	Assignment	x <<= y
3	>>=	Assignment	x >>= y
3	>>>=	Assignment	x >>>= y
3	&=	Assignment	x &= y
3	^=	Assignment	x ^= y
3	|=	Assignment	x |= y
 	 	 	 
2	yield	Pause Function	yield x
1	,	Comma	5 , 6*/

// large and small numbers
// if we have to write a number like 1000000000
// we can write it short like this
x = 1e9
console.log(x)
// if we have to write a number like 0.0000045
// we can write it like this
x = 45e-7
console.log(x)
// integers are accurate up to 15 digits
// if a number with 15 digits is input the output will be the same
x = 999999999999999
console.log(x)
// if the number exceeds 15 digits it will not be the same as the input
x = 9999999999999999
console.log(x)
// difference between concetation and additions
// they both have the same sign that is "+"
// in terms of numbers it adds
x = 10
y = 20
console.log(x + y)
// in terms of strings it merges the two words or sentences
// if we input two strings to x and y and then concetate it, it will give us a sentence like below
x = "hi my name is "
y = "waleed, nice to meet you"
console.log(x + y)
//in the below code output will be 100100 because it did the concetation with y so the 100"100" in 100100
// is a stringe and the "100"100 in 100100 is a number
x = 100
y = "100"
console.log(x + y)
x = "100"
y = "100"
console.log(z)
// NaN is short for Not a number 
// when you do arthmetic operation with a string it will give out NaN
x = 100  / "apple"
console.log(x)
// infinity//
let myNumber = 2; 
let txt = "";
while (myNumber != Infinity) {
   myNumber = myNumber * myNumber;
   txt = txt + myNumber + " ";
}
console.log(txt)