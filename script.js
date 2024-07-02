function shortcut(s1, s2) {
  // your code here
if (typeof s1 === 'string' && s1.length === 1;) {
for (let j = 0; j < s1.length; j++) {
	return j[0];
}
}else if(typeof s2 === 'string' && s2.length === 1;){
	for (let i = 0; i < s2.length; i++) {
		return i[0];
	}
}	
}
// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
