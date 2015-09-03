walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bMigrant ([Ww]omen|[Ww]oman|[Mm]en|[Mm]an|[Cc]hild|[Cc]hildren)\b/g, "Desperate and terrified $1");
	v = v.replace(/\bmigrant (women|woman|men|man|child|children)\b/g, "desperate and terrified $1");
	v = v.replace(/\bMigrants\b/g, "Desperate and terrified people");
	v = v.replace(/\bmigrants\b/g, "desperate and terrified people");
	v = v.replace(/\bMigrant\b/g, "Desperate and terrified person");
	v = v.replace(/\bmigrant\b/g, "desperate and terrified person");
	
	textNode.nodeValue = v;
}


