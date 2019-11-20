console.log("Niroshan");
//This is a comment
//(**)undefined=>not defined,null=>nothing,boolean,number,string,object,symbol==>7 data types
//(**)varibles can be defined in 3 ways in JS.1) var=> can be used in whole project and can be changed 2)let=>can be only used within that given file 3)const=>can use in whole the project but cant be changed its a permenant value var myName="niroshan" myName=8;>>let ourName="Hello">> const pi=3.14;
//var a=9;
//varible names and function names in js are casesensitve 
//use camelCaseFor Declartions
var a=10+20;
console.log(a);
//a+=10
//Escape charactor=> 
var name="niroshan \"Its my name mahn\"";
console.log(name);//niroshan "Its my name mahn"
var name1='niroshan "Ratnayake"';
console.log(name1);//niroshan "Ratnayake"
//concatanate
var str="niroshan "+"Ratnayake";
console.log(str);//niroshan Ratnayake
var str1="niro";
str1+="shan";
console.log(str1);//niroshan
var findLength=0;
findLength="niroshanratnayake";
findLength=findLength.length;
console.log(findLength);
var name2="niroshan";
console.log(name2[0]);
function wordBlanks (myNoun, myAdjective, myVerb, myAdverb){ 
 var result =""; 
 result ="The "+myAdjective+" " + myNoun+" "+myVerb+ " to the store" +myAdverb;
 return result; }
// 6 7) 8 9 //Change the words here to test your function 10 
console.log(wordBlanks ("dog", "big", "ran", "quickly"));//The big dog ran to the storequickly
console.log(wordBlanks ("bike", "slow", "flew", "slowly"));//The slow bike flew to the storeslowly
var name3=["Niroshan",7];
console.log(name3[1]);//7

var ourArray =[18,64,99];
ourArray[1] =45; 
// ourArray now equals [18,45,99].
console.log(ourArray);
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10, 11, 12], 13, 14]];
 var myData =myArray[3][0][1];
 console.log(myData);//11
 
 var ourArray= ["Stimpson","J","cat "]; 
  console.log(ourArray[0]);

 ourArray.push(["happy", "joy"]); 
 console.log(ourArray[3]);//["happy", "joy"]
 //add to the end
//  ourArray now equals "Stimpson " , cat 6 // Setup var myArray = [["John", 23], ["cat", 2]]; 7 8 9 / Only change code below this line. 10 myArray.push (["dog", 31) 11

var ourArray3= [1,2,3]; 
ourArray3.pop (); 
//remove from the end
//now the array is [1,2];
console.log(ourArray3[1]);//1

var ourArray4=["niroshan","antha","ratnayake",["brayan"]];
ourArray4.shift();
console.log(ourArray4[0]);//antha

//unshift=>putting elements in front

// var ourArray5=["niro","bunny","antha"];
// ourArray5.unshift("Ratnayke");
// for(var i=0;i<4;i++)
// {
//     console.log(ourArray5[i]);
// }
console.log("=============");


var shopList=[["cereal", 3], ["milk", 2] , ["bananas", 3], ["juice",2],["eggs",4]];
console.log(shopList[0]);//["cereal", 3]
console.log(shopList[0][0]);//"cereal"

var myGlobal =10; 
function fun1(){  
    var oopsGlobal =5;
 console.log(myGlobal);
 console.log(oopsGlobal);  


}
    function fun2(){
      console.log(myGlobal);
     //console.log(oopsGlobal);  
  
    }
     fun1();
     fun2();
 //=====================================//
 
function nextInLine(arr, item) {
    arr.push(item);//push element to last
    return arr.shift();//remove an element from begining 
    } 
    var testArr = [1,2,3,4,5]; 
    console.log("Before: "+JSON.stringify(testArr)); //stringify does is that it make all a string
    console.log(nextInLine(testArr, 6));
    console.log("After"+JSON.stringify(testArr)); 
    //Before: [1,2,3,4,5] 
    //After: [2,3,4,5,6]

    // if(3==3)=>true;
    // if(3=='3')=>true;
    // if(3===3)=>true;
    // if(3==='3')=>false;  
//==============================

function sequentialSizes (val) 
{ 
var answer =""; 
switch(val) {
    case 1: 
    case 2: 
    case 3: 
    return "Low"; 
    
    break; 
    case 4: 
    case 5:
    case 6: 
    return "Mid";  
      break; 
    case 7: 
    case 8:
    case 9:
    return "High";
    break ;
    }
}
console.log(sequentialSizes(7));

//==========JavaScript Object==================
var ourDog ={ 
    "name": "Camper",
     "legs": 4, 
     "tails": 1, 
     "friends": ["everything!"] 
      }; 
      
console.log(ourDog);//{name: "Camper", legs: 4, tails: 1, friends: ["everything!"]}

var ourDogObj1=ourDog.name;
console.log(ourDogObj1);//"Camper"


var testObj={
    12:"niroshan",
    13:"ratnayake",
    14:"brayan",
    };
    var playerNumber=12;
    console.log(testObj[playerNumber]);
//update obeject value
    var student={
        "name":"Niroshan",
        "id":"950822350v",
        "gpa":3.30,
        "bads":"yes"
        
    }
    student.gpa=3.35;
    
    console.log(student);//{name: "Niroshan", id: "950822350v", gpa: 3.35, bads: "yes"}

 //add new property for the object

 student.indexNumber="174139F";
     console.log(student);//{name: "Niroshan", id: "950822350v", gpa: 3.35, bads: "yes", indexNumber: "174139F"}


 //delete a property from the object
 
 delete student.bads;
 console.log(student); //{name: "Niroshan", id: "950822350v", gpa: 3.35, indexNumber: "174139F"}
function phoneticLookup(val) {
    var result ="";// Only change code below this line 
    var lookup = { 
        "alpha": "Adams", 
        "bravo": "Boston", 
         "charlie": "Chicago", 
         "delta": "Denver",  
          "echo": "Easy",
           "foxtrot": "frank" 
     }

      result= lookup[val];
             return result;

}
       var lookUp=phoneticLookup("alpha");
       console.log(lookUp);//Adams
//=================hasOwnPropert<=method=====================// 
var myObj7={
    gift: "pony",
    pet: "kitten", 
    bed: "sleigh"
}
function checkObj(checkProp){
 if (myObj7.hasOwnProperty(checkProp) ) 
 { return myObj7[checkProp]; 
 } 
 else 
  return "Not Found";
}
  console.log (checkObj("gift")) ;//pony
 console.log (checkObj("hello")) ;//pony
    


