  function addToken (token,req) {
    if (typeof window === 'undefined') {
      req.headers.cookie= 'token=' + token + ';path=/';
    }
    else {
      document.cookie = 'token=' + token + ';path=/';
    }

  }
  function deleteToken () {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getToken(name);
    if (cval != null) {
      document.cookie = 'token=' + cval + ';expires=' + exp.toGMTString() + ';path=/';
    }
  }
  function getToken (req) {
    let reg = new RegExp('(^| )token=([^;]*)(;|$)');
    
    let arr ;
    if (typeof window === 'undefined') {
      arr = req.headers.cookie
    }
    else {
      arr = document.cookie;
    }

    if (arr) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  }
  

  export default{
    addToken,
    deleteToken,
    getToken
  }