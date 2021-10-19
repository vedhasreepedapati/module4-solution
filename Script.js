function a ()
{
	var names=["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
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
