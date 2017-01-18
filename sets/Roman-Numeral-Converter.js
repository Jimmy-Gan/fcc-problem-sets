function DigitRomanConverter(val) {
   // var biggest_part = val/(10 * val.length);    
var D2Rdict = {0:"",1:"I",2:"II",3:"III",4:"IV",5:"V",6:"VI",7:"VII",8:"VIII",9:"IX",10:"X",20:"XX",30:"XXX",40:"XL",50:"L",60:"LX",70:"LXX",80:"LXXX",90:"XC",100:"C",200:"CC",300:"CCC",400:"CD",500:"D",600:"DC",700:"DCC",800:"DCCC",900:"CM",1000:"M",2000:"MM",3000:"MMM"};
    
    var Roman = '';
    val = val.toString();
    for (var i=val.length;i>=1;i--) {

//        if (val[val.length-i] === 0) {
//	    break;
//	}

	if (val[val.length-i] !== "0") {
	console.log(val[val.length-i] + " is current digit");
	
	di = val[val.length-i] * Math.pow(10,i-1);
	console.log(di + " is the Digit");

	di = D2Rdict[di];
	console.log(di + " is the Roman");
        
	Roman = Roman.concat(di);
	console.log(Roman);
	}
    }     
    return Roman;
}
DigitRomanConverter(300)


