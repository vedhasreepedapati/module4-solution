function a ()
{
	var names=["Vedhasree","John","Jin","Jason","Harsha","Lasya","Jimin","Jungkook","Jennifer","Namjoon","Suga","Hoseok","Taehyung"];
	var x=names.length;
    for (var i = 0; i < x; i++) 
    {
    	var firstLetter=names[i].charAt(0);
    	if (firstLetter==='J') 
    	{
    		speak2(names[i]);
    	}
    	else
    	{
    		speak1(names[i]);
        }
    }
}
a();
