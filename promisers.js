function add (a,b){
  return new Promise(function(resolve, reject){
    if (typeof a == 'number' && typeof b =='number'){
      resolve (a+b);
    }else{
      reject ('cant add if they arre not num.');
  }
  });
};
add('s',3).then(function(sum){
    console.log('success',sum)
},function(err){
  console.log('error',err);
})



function addPromise (a,b) {
	return new Promise = (function(resolve,reject){
		if(typeof a === 'number' && typeof b ==== 'number'){
			resolve (a+b);
		}else {
			reject ('Syntax Error');
		}
		
	})
}
addPromise(2,5).then(function(sum){
	console.log(sum);
},function(err){
	console.log(err);
})

dwn132.yourseedbox.com:51413
90.171.130.199:51413

template strings or query strings => ``,`${}`
