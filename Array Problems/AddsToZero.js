let numbers = [1,0,-1,2,-1,-2];
for (let i = 0; i < numbers.length-2; i++) 
{
  for (let j = i + 1; j < numbers.length-1; j++) 
  {
    for (let k = j + 1; k < numbers.length; k++) 
	{
      let sum = numbers[i] + numbers[j] + numbers[k];
      if (sum == 0) 
      {
        console.log("The triplets are : "+numbers[i] + " " + numbers[j] + " " + numbers[k]);
      }
    }
  }
}