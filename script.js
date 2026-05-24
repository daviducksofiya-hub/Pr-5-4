function calc(){let a=+document.getElementById('a').value,b=+document.getElementById('b').value,h=+document.getElementById('h').value,html='';
for(let x=a;x<=b;x+=h){let y,cond;if(x<0){y=x*x+4;cond='x < 0'}else if(x===0){y=0;cond='x = 0'}else{y=Math.sqrt(x)+4;cond='x > 0'}html+='<tr><td>'+x+'</td><td>'+y.toFixed(3)+'</td><td>'+cond+'</td></tr>'}
document.getElementById('rows').innerHTML=html}calc();
