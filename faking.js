let array = [];
let str = "";
array[1] ='S';
array[2] ='E';
array[3] ='X';
array[4] ='Y';
array[5] =', ';
array[6] ='F';
array[7] ='R';
array[8] ='E';
array[9] ='E';
array[10] =' & ';
array[11] ='S';
array[12] ='I';
array[13] ='N';
array[14] ='G';
array[15] ='L';
array[16] ='E';
array[17] ='!';
array[18] ='!';

    

    function fake()
    {
        let text = document.getElementById("txt").value;
        if (text.length > 0){
            for(let i = 1; i <= text.length; i++)
        {
            str = str + array[i];
            if (i == 18)
            {
                text = "";
                str = "";
            }
        
        }
        }
        
        
        document.getElementById("txt").value = str;
        str = "";
        setTimeout("fake()", 1000);
    }