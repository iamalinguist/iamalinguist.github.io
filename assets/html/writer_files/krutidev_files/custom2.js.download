function exportHTML(){
       var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
            "xmlns:w='urn:schemas-microsoft-com:office:word' "+
            "xmlns='http://www.w3.org/TR/REC-html40'>"+
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
       var footer = "</body></html>";
       var sourceHTML = header+document.getElementById("krutitext").value+footer;
       
       var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
       var fileDownload = document.createElement("a");
       document.body.appendChild(fileDownload);
       fileDownload.href = source;
       fileDownload.download = 'krutidevunicodeconverter.doc';
       fileDownload.click();
       document.body.removeChild(fileDownload);
    }
function sendtowhatsapp()
{
	var texter = document.getElementById("krutitext").value;
	window.open('https://wa.me/?text='+texter, '_blank');
}
function sendtomail()
{
	var texter = document.getElementById("krutitext").value;
	window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&body='+texter, '_blank');
}