function array(start, len) 
     {
		newArr = [len];
		for (i = 0; i < len; i++) 
        {
			newArr[i] = start;
			start++;
		}
      		return newArr;
}


console.log(array(1, 4));

console.log(array(-6, 4));
