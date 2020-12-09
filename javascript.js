let index= 1;
function my(){
  index++;
  if(index==12){
    index=1;
  }
  let picture= 'num ('+index+').jpg';
  document.getElementById('desktop').src=picture;
}
