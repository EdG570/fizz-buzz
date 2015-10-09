for(i = 0; i <= 100; i++) {
  if((i % 3 !== 0) && (i % 5 !== 0)){
      document.write("<p>" + i + "</p>\n");
  }

   else if((i % 5 === 0) && (i % 3 === 0)) {
    document.write('<p>fizz buzz</p>\n')
  }

  else if(i % 3 === 0) {
      document.write('fizz\n');
  }

  else if(i % 5 === 0) {
    document.write('<p>buzz</p>\n');
  } 

};