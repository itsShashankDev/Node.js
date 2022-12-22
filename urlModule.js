import url from 'node:url';

const myURL = new URL('https://example.org:5000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL)
console.log(myURL.href); //To get the constructed URL string, use the href4

// #new URL(input[, base])
const myURLs = new URL('/foo', 'https://example.org/'); // here Creates a new URL object by parsing the input relative to the base. If base is passed as a string, it will be parsed equivalent to new URL(base).
console.log(myURLs)

// url.host
// <string>
// Gets and sets the host portion of the URL.
const myURL1 = new URL('https://example.org:81/foo');
console.log(myURL1.host); //example.org:81



// url.hostname {hostname does't prints port number}
//Gets and sets the host name portion of the URL. 
const myURL2 = new URL('https://example.org:81/foo');
console.log(myURL2.hostname); // example.org

// URL password
// Gets and sets the password portion of the URL.
const myURL3 = new URL('https://abc:xyz@example.com');
console.log(myURL3.password); //xyz