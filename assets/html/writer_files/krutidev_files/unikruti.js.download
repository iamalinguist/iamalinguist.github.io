var array_from = new Array( 
"‘",   "’",   "“",   "”",   "(",    ")",   "{",    "}",   "=", "।",  "?",  "-",  "µ", "॰", ",", ".", "् ", "०",  "१",  "२",  "३",     "४",   "५",  "६",   "७",   "८",   "९", "x", "फ़्",  "क़",  "ख़",  "ग़", "ज़्", "ज़",  "ड़",  "ढ़",   "फ़",  "य़",  "ऱ",  "ऩ", "त्त्",   "त्त",     "क्त",  "दृ",  "कृ", "ह्न",  "ह्य",  "हृ",  "ह्म",  "ह्र",  "ह्",   "द्द",  "क्ष्", "क्ष", "त्र्", "त्र","ज्ञ","छ्य",  "ट्य",  "ठ्य",  "ड्य",  "ढ्य", "द्य","द्व", "श्र",  "ट्र",    "ड्र",    "ढ्र",    "छ्र",   "क्र",  "फ्र",  "द्र",   "प्र",   "ग्र", "रु",  "रू","्र", "ओ",  "औ",  "आ",   "अ",   "ई",   "इ",  "उ",   "ऊ",  "ऐ",  "ए", "ऋ", "क्",  "क",  "क्क",  "ख्",   "ख",    "ग्",   "ग",  "घ्",  "घ","ङ", "चै",   "च्",   "च",   "छ",  "ज्", "ज",   "झ्",  "झ",   "ञ", "ट्ट",   "ट्ठ",   "ट",   "ठ",   "ड्ड",   "ड्ढ",  "ड",   "ढ",  "ण्", "ण",  "त्",  "त",  "थ्", "थ",  "द्ध",  "द", "ध्", "ध",  "न्",  "न",  "प्",  "प",  "फ्", "फ",  "ब्",  "ब", "भ्",  "भ",  "म्",  "म", "य्",  "य",  "र",  "ल्", "ल",  "ळ",  "व्",  "व", "श्", "श",  "ष्", "ष",  "स्",   "स",   "ह", "ऑ",   "ॉ",  "ो",   "ौ",   "ा",   "ी",   "ु",   "ू",   "ृ",   "े",   "ै","ं",   "ँ",   "ः",   "ॅ",    "ऽ",  "् ", "्" )
var array_to = new Array( 
"^", "*",  "Þ", "ß", "¼", "½", "¿", "À", "¾", "A", "\\", "&", "&", "Œ", "]","-","~ ", "å",  "ƒ",  "„",   "…",   "†",   "‡",   "ˆ",   "‰",   "Š",   "‹","Û","¶",   "d",    "[k",  "x",  "T",  "t",   "M+", "<+", "Q",  ";",    "j",   "u", "Ù",   "Ùk",   "ä",    "–",   "—", "à",   "á",    "â",   "ã",   "ºz",  "º",   "í", "{", "{k",  "«", "=","K", "Nî",   "Vî",    "Bî",   "Mî",   "<î", "|","}","J",   "Vª",   "Mª",  "<ªª",  "Nª",   "Ø",  "Ý",   "æ", "ç", "xz", "#", ":","z", "vks",  "vkS",  "vk",    "v",   "bZ",  "b",  "m",  "Å",  ",s",  ",",   "_", "D",  "d",    "ô",     "[",     "[k",    "X",   "x",  "?",    "?k",   "³", "pkS",  "P",    "p",  "N",   "T",    "t",   "÷",  ">",   "¥", "ê",      "ë",      "V",  "B",   "ì",       "ï",     "M",  "<",  ".", ".k", "R",  "r",   "F", "Fk",  ")",    "n", "/",  "/k",  "U", "u",  "I",  "i",   "¶", "Q",   "C",  "c",  "H",  "Hk", "E",   "e", "¸",   ";",    "j",  "Y",   "y",  "G",  "O",  "o","'", "'k",  "\"", "\"k", "L",   "l",   "g",  "v‚",    "‚",    "ks",   "kS",   "k",     "h",    "q",   "w",   "`",    "s",    "S", "a",    "¡",    "%",     "W",   "·",   "~ ", "~")   // "~j"

function unicodekruti()
{
var ts = document.getElementById("unicodetext").value.length ;
var afl = array_from.length ;
var mss = document.getElementById("unicodetext").value  ;
var st1 = 0,st2 = 0,looper = 1 ;
var pt = '' ;  
var max_ts = 10000;
    while ( looper == 1 ) 
    {
     st1 = st2 ;
     if ( st2 < ( ts - max_ts ) )  
     { 
      st2 +=  max_ts ;
      while (document.getElementById("unicodetext").value.charAt ( st2 ) != ' ') {st2--;}
     } 
     else  { st2 = ts  ;  looper = 0 }
     var mss = document.getElementById("unicodetext").value.substring ( st1, st2 )  ;
    repsymb( ) ;
    pt += mss ;
    document.getElementById("krutitext").value = pt  ;
   }


function repsymb( )
   {


    if (mss != "" )  
       {

mss = mss.replace ( /क़/ , "क़" )  ; 
mss = mss.replace ( /ख़‌/g , "ख़" )  ;
mss = mss.replace ( /ग़/g , "ग़" )  ;
mss = mss.replace ( /ज़/g , "ज़" )  ;
mss = mss.replace ( /ड़/g , "ड़" )  ;
mss = mss.replace ( /ढ़/g , "ढ़" )  ;
mss = mss.replace ( /ऩ/g , "ऩ" )  ;
mss = mss.replace ( /फ़/g , "फ़" )  ;
mss = mss.replace ( /य़/g , "य़" )  ;
mss = mss.replace ( /ऱ/g , "ऱ" )  ;


        
        var pof = mss.indexOf( "ि" )  ;
         while ( pof != -1 )  
           {
            var clf = mss.charAt( pof - 1 )  ;
            mss = mss.replace( clf + "ि" ,  "f" + clf )  ;

            pof = pof - 1  ;

            while (( mss.charAt( pof - 1 ) == "्" )  &  ( pof != 0  ) )
               {
                var repl_str = mss.charAt( pof - 2 ) + "्"  ;
                  mss = mss.replace( repl_str + "f", "f" + repl_str ) ;

                pof = pof - 2  ;
               }
            pof = mss.search( /ि/ , pof + 1 ) ; 

           } 

       mat = "ािीुूृेैोौं:ँॅ" 

mss += '  '    ;  

       var pohr = mss.indexOf( "र्" ) ;
        while ( pohr > 0  )  
           {
            var ppoz = pohr + 2   ;  

            var cook = mss.charAt( ppoz + 1 )

            while ( mat.indexOf( cook ) != -1 )  
               {
                ppoz = ppoz + 1 ;
                cook = mss.charAt( ppoz + 1 ) ;
               } 

            repl_str = mss.substr ( pohr + 2 , ( ppoz - pohr - 1 ))  ;
            mss = mss.replace( "र्" + repl_str  ,  repl_str + "Z" ) ;
            pohr = mss.indexOf( "र्" ) ;
           } 


mss = mss.substr ( 0 , mss.length - 2 )  ;


        for( idx_sym = 0; idx_sym < afl; idx_sym++ )
           {
            idx = 0  ;  

            while (idx != -1 ) 
               {
                mss = mss.replace( array_from[ idx_sym ] , array_to[idx_sym] )
                idx = mss.indexOf( array_from[idx_sym] )
               } 
           } 

        } 

    }

  } 
  function copyclipboard() {
   var copyText = document.querySelector("#krutitext");
   copyText.select();
   copyText.setSelectionRange(0, 99999);
   document.execCommand("copy");
   alert("Text Copied To Clipboard.");
}
function cleartext() {
	document.getElementById("unicodetext").value = '';
	document.getElementById("krutitext").value = '';
}