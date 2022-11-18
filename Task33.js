function newArray(value) {
    return value > 0;
    }
    
    var filtered = [58, '', 'abcd', true, null, false, 0].filter(newArray);
    console.log(filtered);
    