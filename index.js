/* 
Your previous Swift 5 content is preserved below:


/*

++++++++
QUESTION
++++++++

Implement wildcard pattern matching with support for ‘?’ and ‘*’ for strings A and B.

’?’ : Matches any single character.
‘*’ : Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Input Format:

The first argument of input contains a string A.
The second argument of input contains a string B.
Output Format:

Return 0 or 1:
    => 0 : If the patterns do not match.
    => 1 : If the patterns match.
Constraints:

1 <= length(A), length(B) <= 9e4
Examples :

Input 1:
    A = "aa"
    B = "a"

Output 1:
    0

Input 2:
    A = "aa"
    B = "aa"

Output 2:
    1

Input 3:
    A = "aaa"
    B = "aa"

Output 3:
    0
    
Input 4:
    A = "aa"
    B = "*"

Output 4:
    1

Input 5:
    A = "aa"
    B = "a*"

Output 5:
    1

Input 6:
    A = "ab"
    B = "?*"

Output 6:
    1

Input 7:
    A = "aab"
    B = "c*a*b"

Output 7:
    0
    
*/
function patternMatching(str1,str2){
  let arr = [];
   if(str1 === str2){
     return 1;
   } else{
       if((str2.indexOf("*") === -1) && (str2.indexOf("?") === -1)){
         return 0;
       } else {
         for(let i=0;i<str1.length;i++){
           for(let j=0;j<str2.length;j++){
             if(i===j){
               if(str1[i] !== str2[j]){
                 if(str2[j]==="?"){
                   arr.push(str1[i]);
                 }else if(str2[j] === "*"){
                    if(j === str2.length -1){
                       return 1;
                     } else{
                       arr.push(str1[i]);
                       let indStr1 = i;
                       let indStr2 = j;
                        while((str2.indexOf("*")!==-1) &&(indStr1< str1.length-1)){
                         indStr2++;
                         indStr1++;
                         while((str1[indStr1]!== str2[indStr2])&& (indStr1 < str1.length)){
                           arr.push(str1[indStr1]);
                           indStr1++;
                         }
                        if(str1[indStr1] === str2[indStr2]){
                          arr.push(str1[indStr1])
                        }
                        str2 = str2.substring(indStr2,str2.length-1);
                        }
                      }
                  }else{
                     return 0;
                  }
               } else{
                 arr.push(str1[i]);
               }
             }
           }
         }
         if(arr.join(",").replace(/,/g,"") === str1){
           return 1;
         }else{
           return 0;
         }
      }
   }
}

  console.log("pattern match for aa ,a : "+patternMatching("aa","a"));
  console.log("pattern match for aa ,aa : "+patternMatching("aa","aa"));
  console.log("pattern match for aaa ,aa : "+patternMatching("aaa","aa"));
  console.log("pattern match for aa ,* : "+patternMatching("aa","*"));
  console.log("pattern match for aa ,a* : "+patternMatching("aa","a*")); 
  console.log("pattern match for ab ,?* : "+patternMatching("ab","?*"));
  console.log("pattern match for aab ,c*a*b : "+patternMatching("aab","c*a*b"));
  console.log("pattern match for aabaacb ,a*a*b : "+patternMatching("aabaacb","a*a*b"));
  /*
  
  ++++++++
  QUESTION
  ++++++++
  
  A Palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam
  
  Make a isPalindrome() function that returns true if the provided string is a palindrome, and false otherwise.
  
  // Example
  "eve" returns true
  "eva" returns false
  */
  function isPalindrome(str){
    str = str.toUpperCase();
    let strArr = str.split("");
    let strRevArr = [...strArr];
    strRevArr.reverse();
    return (strArr.join(",").replace(/,/g, "") === strRevArr.join(",").replace(/,/g,""));
  }
  
  console.log("palindrome check for liril: "+isPalindrome('liril'));
  console.log("palindrome check for mango: "+isPalindrome('mango'));
  /*
  
  ++++++++
  QUESTION
  ++++++++
  
  You're now a sports game point recorder. Your job is to calculate the total score of the game after all of the rounds are complete. Each round is either worth a score or can modify a previous rounds score. 
  
  The game (your input) is represented by an array of strings. Each string is one round and can be one of the 4 following types:
  
  1) Integer: Directly represents the number of points scored this round. 
  2) "+": The points scored this round are the sum of the last two valid round's points.
  3) "D": The points scored this round are double the last valid round's points.
  4) "C": The last valid round's points were invalid and should not be counted towards the total score or any future operations. 
  
  Write a function that returns the total score of the game after all rounds are complete.
  
  Example:
  
  Input: ["5","2","C","D","+"]
  Output: 30
  Explanation: 
  Round 1: You could get 5 points. The sum is: 5.
  Round 2: You could get 2 points. The sum is: 7.
  Operation 1: The round 2's data was invalid. The sum is: 5.  
  Round 3: You could get 10 points (the round 2's data has been removed). The sum is: 15.
  Round 4: You could get 5 + 10 = 15 points. The sum is: 30.
  */
  function sports(strArr){
    let sum = 0;
    let scoreArr = [];
    strArr.forEach((str,ind)=>{
      if(str === "C"){
        scoreArr.splice(scoreArr.length -1,1);
        sum = sumArrays(scoreArr);
        scoreArr.push(sum);
      } else if(str === "D"){
        sum = sumArrays(scoreArr);
        scoreArr.push(scoreArr[scoreArr.length-1]*2 + sum);
      } else if(str === "+"){
       sum = sumArrays(scoreArr);
      } else{
        scoreArr.push(Number(str));
      }
    });
    return sum;
  }
  function sumArrays(arr){
    let sum = 0;
     arr.forEach((score,i)=>{
          sum += score;
        })
    return sum;
  }
  console.log("sports check for [5,2,C,D,+] : "+sports(["5","2","C","D","+"]));
  
  function bonAppetit(bill, k, b) {
    res = 0;
    bill.forEach((b,i)=>{
     if(i !== k){
       res += b;
     }
    })
    if(res/2 === b){
        console.log("Bon Appetit");
    }else{
        console.log(b-(res/2));
    }
  }
  bonAppetit([3,10,2,9],1,7);
  bonAppetit([3,10,2,9],1,12);
  function breakingRecords(scores) {
    let highScoreArr = [];
    let lowScoreArr = [];
    let highScore = scores[0];
    let lowScore = scores[0];
    //console.log(scores)
    for(let i=1;i<=scores.length;i++){
     // console.log(scores[i])
      if(highScore < scores[i]){
        highScoreArr.push(scores[i]);
        highScore = scores[i];
      } else if(lowScore > scores[i]){
        lowScoreArr.push(scores[i]);
        lowScore = scores[i];
      }
      
    }
    return [highScoreArr.length,lowScoreArr.length];
    }
    console.log(breakingRecords([10,5,20,20,4,5,2,25,1]))
    
    function birthday(s, d, m) {
      let sum = 0;
      let j;
      let track = 1;
      let sumArr = [];
      for(let i=0;i<s.length;i++){
        j = i;
        while((track<=m)&&(j<s.length)){
         sum += s[j];
         j++;
         track++;
        }
        track = 1;
        sumArr.push(sum);
        sum = 0;
      }
    return sumArr.filter((su,ind)=>su === d).length;
    }
    console.log(birthday([2,5,1,3,4,4,3,5,1,1,2,1,4,1,3,3,4,2,1],18,7));
    function divisibleSumPairs(n, k, ar) {
      let j;
      let sum;
      let resArr = [];
      ar.forEach((el,ind)=>{
        sum = ar[ind];
        j = ind+1;
      while(j<n){
         sum += ar[j];
         resArr.push(sum);
         j++;
         sum=ar[ind];
        }
      })
      return (resArr.filter((res)=>(res%k===0)).length)
    }
    console.log(divisibleSumPairs(6,3,[1,3,2,6,1,2]))
    ;
    function migratoryBirds(arr) {
      let resArr = [];
      let result;
      arr.forEach((el,ind)=>{
        if(!(resArr.find((n,i)=>n.num === el))){
          resArr.push({num:el,count:1})
        } else{
          resArr[resArr.findIndex((n)=>n.num === el)].count++;
        } 
      })
    resArr.sort((a,b)=>(a.count-b.count));
    let dupArr=resArr.filter((res)=>res.count === resArr[resArr.length-1].count);
    if(dupArr.length > 1){
      dupArr.sort((a,b)=>(a.num - b.num));
      result = dupArr[0].num;
    }else{
      result = resArr[resArr.length-1].num;
    }
    return result;
    }
    console.log(migratoryBirds([1,2,3,4,5,4,3,2,1,3,4]));  