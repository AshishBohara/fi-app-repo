exports.windowHeight = () => {
  return window.innerHeight;
};

exports.isLogin = () => {
  const FiUserToken = localStorage.getItem("FiUserToken");
  if (FiUserToken) return true;
  else return false;
};

exports.getUserToken = () => {
  return localStorage.getItem("FiUserToken") || null;
};

exports.getUser = () => {
  return JSON.parse(localStorage.getItem("FiUser")) || null;
};

exports.getCustomerToken = () => {
  return localStorage.getItem("FiUserToken") || null;
};

exports.inr = (num) => {
  let n = parseFloat(num);
  let negativeNumber = false;
  if (n < 0) {
    negativeNumber = true;
    n = n * -1;
  }
  var x = n.toString();
  var afterPoint = "";
  if (x.indexOf(".") > 0) afterPoint = x.substring(x.indexOf("."), x.length);
  x = Math.floor(x);
  x = x.toString();
  var lastThree = x.substring(x.length - 3);
  var otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != "") lastThree = "," + lastThree;
  var res =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;

  if (negativeNumber) {
    return "-" + res;
  } else {
    return res;
  }
};

exports.format_sr_no = (sr_no) => {
  return `SR-${this.pad(sr_no, 7)}`;
};

exports.pad = (n, width, z) => {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};
