
/*Question 1.
Given that you are using JavaScript.
Write a function that takes n as input.
And prints the following pattern.
1
21
321
4321
...
*/



const pattern = (n) => {
    for(let i=1;i<=n;i++){
        let bag="";
        for(let j=i;j>=1;j--){
            bag+=j
        }
        console.log(bag)
    }
}

pattern(5)

/*
Explanation: This is the only way to solve this question, write now its time complexity is O(n^2) and space complexity is O(1) 
we cannot reduce it for pattern problem 
*/
















