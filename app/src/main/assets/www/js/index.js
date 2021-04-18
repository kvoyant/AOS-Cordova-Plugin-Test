/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function init() {
    document.querySelector("#startScan").addEventListener("touchend", startScan, false);
    resultDiv = document.querySelector("#results");
}

function searchQr() {
    console.log('searchQr()~!');

    cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
//          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          formats : "default", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
    );
}




//function startScan() {
//    cordova.plugins.barcodeScanner.scan(
//        function re (result) {
//            //바코드가 읽힌 결과 확인
//            /*
//            var s = "Result: " + result.text + "<br/>" +
//            "Format: " + result.format + "<br/>" +
//            "Cancelled: " + result.cancelled;
//            */
//            //바코드 읽은 결과를 실제 browser에 띄우기
//             var ref = window.open(result.text, '_self', 'location=no');
//             ref.addEventListener('loadstart', function(event) {
//                 var urlSuccessPage = result.txt;
//                 if (event.url == urlSuccessPage) {
//                 ref.close();
//                 }
//             });
//            alert('test');
//        },
//        function (error) {
//            alert("Scanning failed: " + error);
//        }
//    );
//}

// cordova.plugins.barcodeScanner.scan(
//      function (result) {
//          alert("A barcode has been scanned \n" +
//                "Result: " + result.text + "\n" +
//                "Format: " + result.format + "\n" +
//                "Cancelled: " + result.cancelled);
//      },
//      function (error) {
//          alert("Scanning failed: " + error);
//      }
// );