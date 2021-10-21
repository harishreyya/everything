
        var numbers=[4, 5 , 1, 3];
       var i = numbers[0];

        while ( i < numbers.length ) 
        {
            if ( numbers[i] - numbers[i-1] == 1 ) 
            {
            } 
            else 
            {
                console.log( "Missing number is " + ( numbers[i-1] + 1 ) );
            }
            i++;
        }