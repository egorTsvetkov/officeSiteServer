IMG = {
	//room -> filenames
	'1': [103,104,105,106],
	'2': [1,83,84,85,86,87],
	'3': [1,84,83,85,86,87],
	'4': [1,82,83,85,87],
	'5': [82,85,87],
	'6': [79,80,81],
	'7': [79,80,81],
	'8': [79,81],
	'9': [166],
	'10': [60,61,62,63,89,90,91,92,93,94],
	'11': [142,143],
	'12': [142,143,32,33,34,151,32,40,144,146,31,35,67,153,154],
	'13': [142,143,32,40,144,146,35,67,153,154,141,36,66,149,152],
	'14': [142,143,32,40,144,146,141,36,66,149,152,38,39,68,140,147,150],
	'15': [142,143,32,40,144,146,141,38,39,68,140,147,150,37,59],
	'16': [143,144,146,69,41,42,43,44,45,46,47,48,49,50,51,52,107,156,157,155,145],
	'17': [155,145,75,76,77,78],
	'18': [155,145,75,76,77,78,168],
	'19': [145,75,76,77,168],
	'20': [145,75,76,77],
	'21': [76,77],
	'22': [77],
	'23': [],
	'24': [],
	'25': [98,125,126,127128,6,122],
	'26': [6,122,74,134,135],
	'27': [168,6,122],
	'28': [6,122,123,124,167],
	'29': [6,122],
	'30': [6,122],
	'31': [6,122,100,159],
	'32': [6,122,159],
	'33': [6,122,99,120,121],
	'34': [7,8],
	'35': [9,10,11],
	'36': [72,73],
	'37': [14,15,16,17,18,129,130,131,132,133],
	'38': [19,20,21,22,88,138,137,138,139],
	'39': [12,13,70,71],
	'40': [167,23,24,25,26,27],
	'41': [28,30],
	'42': [],
	'43': [],
	'44': [],
	'45': [53,54,55,160,161,162],
	'46': [56,57,58,59],
	'47': [2,3,4,5,101,102,108,109,110,111,112,113,114,115,116,117,118,119,164,165],
	'48': [28,30],
};


function retr_filename(offcice_id, mobile) {
	let resolition = "1200x900/";
	if(mobile){
		resolition = "500x375/";
	}
	let array_of_filenames = [];
	let filenames = IMG[offcice_id];
	for (let i = 0; i < filenames.length; i++) {
		array_of_filenames.push('/static/images/'+resolition+filenames[i]+'.jpg'); 
		//array_of_filenames.push(filenames[i]); 
	}
	if (filenames.length == 0) {
		array_of_filenames.push('/static/images/'+resolition+'noImages.jpg'); 
	}
	return array_of_filenames;
}