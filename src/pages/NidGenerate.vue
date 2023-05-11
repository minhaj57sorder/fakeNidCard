<template>
  <div ref="nidCard" id="nid-card">

    <q-btn @click="printInv()">Generate NID</q-btn>
    <div ref="nidCard" id="nid-card">
      <div class="" style="
                                                                                    position: relative;
                                                                                    height: 641px;
                                                                                    width: 2089px;
                                                                                    transform-box: fill-box;
                                                                                    transform-origin: 0% 0%;
                                                                                    transform: scale(0.519);
                                                                                  ">
        <!-- <img
          alt="Quasar logo"
          src="~assets/essential/nid.jpg"
          style="    height: 590px;
        position: absolute;
        left: 0.2%;
        top: 4%;"
        /> -->
        <div style="
                                                                                      width: 930px;
                                                                                      height: 590px;
                                                                                      position: absolute;
                                                                                      left: 1.1%;
                                                                                      top: 4%;
                                                                                      border: 4px solid black;
                                                                                    "></div>
        <div style="
                                                                                      width: 930px;
                                                                                      height: 184px;
                                                                                      position: absolute;
                                                                                      left: 1.1%;
                                                                                      top: 4%;
                                                                                      border: 4px solid black;
                                                                                    "></div>
        <div style="
                                                                                      width: 930px;
                                                                                      height: 590px;
                                                                                      position: absolute;
                                                                                      left: 46.8%;
                                                                                      top: 4%;
                                                                                      border: 4px solid black;
                                                                                    "></div>
        <div style="
                                                                                          width: 930px;
                                                                                  height: 200px;
                                                                                  position: absolute;
                                                                                  left: 46.8%;
                                                                                  top: 19.5%;
                                                                                      border: 4px solid black;
                                                                                    "></div>

        <img alt="logo1" src="~assets/essential/logo2.png" style="
                                                                                      width: 100px;
                                                                                      position: absolute;
                                                                                      left: 2.07%;
                                                                                      top: 8.15%;
                                                                                      width: 106px;
                                                                                    " />
        <img alt="logo1" src="~assets/essential/logo1.png" style="
                                                                                      width: 350px;
                                                                                      position: absolute;
                                                                                      left: 16.4%;
                                                                                      top: 33.9%;
                                                                                      opacity: 0.3;
                                                                                    " />
        <img v-if="nidDataFeilds.photoURL" alt="person" :src="nidDataFeilds.photoURL" style="
                                                                                      width: 195px;
                                                                                      height: 225px;
                                                                                      position: absolute;
                                                                                      left: 1.7%;
                                                                                      top: 33.7%;

                                                                                    " />
        <img v-else alt="person" src="~assets/essential/person.jpg" style="
                                                                                      width: 195px;
                                                                                      height: 225px;
                                                                                      position: absolute;
                                                                                      left: 1.7%;
                                                                                      top: 33.7%;

                                                                                    " />
        <img v-if="nidDataFeilds.signatureURL" alt="signature" :src="nidDataFeilds.signatureURL" style="
                                                                                      width: 195px;
                                                                                      position: absolute;
                                                                                      left: 1.7%;
                                                                                      top: 71.7%;

                                                                                    " />
        <img v-else alt="signature" src="~assets/essential/signature.png" style="
                                                                                      width: 195px;
                                                                                      position: absolute;
                                                                                      left: 1.7%;
                                                                                      top: 71.7%;

                                                                                    " />
        <div style="
                                                                                      color: #000;
                                                                                      position: absolute;
                                                                                      left: 26.4%;
                                                                                      top: 11.5%;
                                                                                      font-size: 46px;
                                                                                      font-weight: 600;
                                                                                      font-family: sutonnyMJ;
                                                                                      transform: translate(-50%, -50%);
                                                                                    ">
          গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
        </div>
        <div style="
                                                                                      color: #0d7f3f;
                                                                                      position: absolute;
                                                                                      left: 26.4%;
                                                                                      top: 18.5%;
                                                                                      font-size: 33px;
                                                                                      font-family: arial;
                                                                                      transform: translate(-50%, -50%);
                                                                                    ">
          Government of the People's Republic of Bangladesh
        </div>
        <div style="
                                                                                      color: #000;
                                                                                      position: absolute;
                                                                                      left: 26.4%;
                                                                                      top: 25.8%;
                                                                                      font-size: 30px;
                                                                                      font-family: arial;
                                                                                      transform: translate(-50%, -50%);
                                                                                    ">
          <span style="color: #ed1f24">National ID Card</span>
          <span style="color: black;font-size: 40px;
                                                                                      font-family: sutonnyMJ;"> / জাতীয়
            পরিচয়
            পত্র</span>
        </div>
        <div style="
                                                                                      color: #000;
                                                                                      position: absolute;
                                                                                      left: 12.4%;
                                                                                  top: 39.8%;
                                                                                      font-size: 42px;
                                                                                      font-family: sutonnyMJ;
                                                                                      transform: translate(0%, -50%);
                                                                                    ">
          নাম:
          <span style="font-weight: 700; margin-left: 48px; font-size: 40px">
            {{ nidDataFeilds.nameBangla }}</span>
        </div>
        <div style="
                                                                                      color: #000;
                                                                                      position: absolute;

                                                                                      left: 12.4%;
                                                                                      top: 49%;
                                                                                      font-size: 30px;
                                                                                      font-family: arial;
                                                                                      transform: translate(0%, -50%);
                                                                                    ">
          Name:
          <span style="font-weight: 400; margin-left: 24px; font-size: 40px">{{ nidDataFeilds.nameEnglish }}</span>
        </div>
        <div style="
                                                                                      color: #000;
                                                                                      position: absolute;
                                                                                       left: 12.3%;
                                                                                  top: 61%;
                                                                                  font-size: 42px;
                                                                                      font-family: sutonnyMJ;
                                                                                      transform: translate(0%, -50%);
                                                                                    ">
          পিতা: <span style="margin-left: 39px">{{ nidDataFeilds.nameFather }}</span>
        </div>
        <div style="
                                                                                      color: #000;
                                                                                      position: absolute;
                                                                                      left: 12.4%;
                                                                                      top: 70.8%;
                                                                                      font-size: 42px;
                                                                                      font-family: sutonnyMJ;
                                                                                      transform: translate(0%, -50%);
                                                                                    ">
          মাতা: <span style="margin-left: 39px">{{ nidDataFeilds.nameMother }}</span>
        </div>
        <div style="
                                                                                      color: #000;
                                                                                      position: absolute;
                                                                                      left: 12%;
                                                                                      top: 78.9%;
                                                                                      font-size: 36px;
                                                                                      font-family: arial;
                                                                                      transform: translate(0%, -50%);
                                                                                    ">
          Date of Birth: <span style="margin-left: 17px; color: #ed1f24">{{ nidDataFeilds.dathOfBirth }}</span>
        </div>
        <div style="
                                                                                      color: #000;
                                                                                      position: absolute;
                                                                                      left: 12%;
                                                                                  top: 86.3%;
                                                                                      font-size: 36px;
                                                                                      font-weight: 500;
                                                                                      font-family: arial;
                                                                                      transform: translate(0%, -50%);
                                                                                    ">
          ID NO:<span style="font-weight: 600; margin-left: 13px;color: #ed1f24; font-family: arial;">{{ nidDataFeilds.nidNo }}</span>
        </div>
        <div style="
                                                                                      color: #000;
                                                                                      position: absolute;
                                                                                      left: 48.1%;
                                                                                  top: 8.8%;
                                                                                  font-size: 34px;
                                                                                      font-family: sutonnyMJ;
                                                                                      transform: translate(0%, -50%);
                                                                                    ">
          এই কা‍র্ডটি গণপ্রজানন্ত্রী বাংলাদেশ সরকারের সম্পত্তি। কা‍র্ডটি ব্যবহারকারী ব্যতীত অন্য
        </div>
        <div style="
                                                                                      color: #000;
                                                                                      position: absolute;
                                                                                      left: 48.1%;
                                                                                  top: 14.9%;
                                                                                  font-size: 34px;
                                                                                      font-family: sutonnyMJ;
                                                                                      transform: translate(0%, -50%);
                                                                                    ">
          কোথাও পাওয়া গেলে নিকটস্থ পোস্ট অফিসে জমা দেবার জন্য অনুরোধ করা হলো।
        </div>
        <div style="
                                                                                      color: #000;
                                                                                      position: absolute;
                                                                                      left: 48.1%;
                                                                                  top: 20.9%;
                                                                                  font-size: 34px;
                                                                                      font-family: sutonnyMJ;
                                                                                      transform: translate(0%, 0%);
                                                                                    ">
          ঠিকানা:
        </div>
        <div style="
                                                                                      color: #000;
                                                                                      position: absolute;
                                                                                      left: 52.1%;
                                                                                  top: 20.9%;
                                                                                  font-size: 34px;
                                                                                      font-family: sutonnyMJ;
                                                                                      transform: translate(0%, 0%);
                                                                                    ">
          গ্রাম/রাস্তা: {{ nidDataFeilds.addressline1 }}, ডাকঘর: {{ nidDataFeilds.addressline2 }},
          {{ nidDataFeilds.addressline3 }},<br /> {{ nidDataFeilds.addressline4 }}।
        </div>
        <div style="
                                                                                      color: #000;
                                                                                      position: absolute;
                                                                                      left: 47.6%;
                                                                                  top: 42.9%;
                                                                                  font-size: 32px;
                                                                                      font-family: sutonnyMJ;
                                                                                      transform: translate(0%, 0%);
                                                                                    ">
          রক্তের গ্রুপ / <span style="
                                                                                      font-family: arial; ">Blood Group:
            {{
              nidDataFeilds.bloodGroup
            }}</span>
        </div>
        <div style="
                                                                                      color: #000;
                                                                                      position: absolute;
                                                                                      left: 67.3%;
                                                                                  top: 43.9%;
                                                                                  font-size: 32px;
                                                                                      font-family: sutonnyMJ;
                                                                                      transform: translate(0%, 0%);
                                                                                    ">
          জন্মস্থান: {{ nidDataFeilds.birthPlace }}
        </div>
        <div style="
                                                                              position: absolute;
                                                                              left: 86.3%;
                                                                              top: 43.9%;
                                                                              width: 101px;
                                                                              height: 40px;
                                                                              border: 20px solid black;
                                                                              transform: translate(0%, 0%);
                                                                                    ">
        </div>
        <div style="
                                                                                  color: #fff;
                                                                                  position: absolute;
                                                                                  left: 86.6%;
                                                                                  top: 43.4%;
                                                                                  font-size: 34px;
                                                                                      font-family: sutonnyMJ;
                                                                                      font-weight: 500;
                                                                                      transform: translate(0%, 0%);
                                                                                    ">মুদ্রণ: ০১
        </div>
        <div style="
                                                                                     color: #000;
                                                                                  position: absolute;
                                                                                  left: 48.1%;
                                                                                  top: 63.8%;
                                                                                  font-size: 40px;
                                                                                      font-family: sutonnyMJ;
                                                                                      transform: translate(0%, 0%);
                                                                                    ">
          প্রদানকারী ক‍র্তৃপক্ষের স্বাক্ষর
        </div>
        <img v-if="nidDataFeilds.payerSignatureURL" alt="payersignature" :src="nidDataFeilds.payerSignatureURL" style="
                                                                                      width: 195px;
                                                                                      position: absolute;
                                                                                      left: 54.4%;
                                                                                  top: 63.8%;
                                                                                  transform:translate(-50%,-100%)

                                                                                    " />
        <img v-else alt="payersignature" src="~assets/essential/payerSignature.jpg" style="
                                                                                      width: 195px;
                                                                                      position: absolute;
                                                                                      left: 54.4%;
                                                                                  top: 63.8%;
                                                                                  transform:translate(-50%,-100%)

                                                                                    " /><img
          v-if="nidDataFeilds.barCodeURL" alt="barcode" :src="nidDataFeilds.barCodeURL" style="    width: 899px;
                                                                              height: 111px;
                                                                              position: absolute;
                                                                              left: 69.1%;
                                                                              top: 91.8%;
                                                                              transform: translate(-50%, -100%);

                                                                                    " />
        <img v-else alt="barcode" src="~assets/essential/barcode.png" style="    width: 899px;
                                                                              height: 111px;
                                                                              position: absolute;
                                                                              left: 69.1%;
                                                                              top: 91.8%;
                                                                              transform: translate(-50%, -100%);

                                                                                    " />
        <div style="
                                                                                    color: #000;
                                                                                  position: absolute;
                                                                                  left: 72.1%;
                                                                                  top: 63.9%;
                                                                                  font-size: 37px;
                                                                                      font-family: sutonnyMJ;
                                                                                      transform: translate(0%, 0%);
                                                                                    ">
          প্রদানের তারিখ: {{ nidDataFeilds.payingDate }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import jsPDF from 'jsPDF'
import { useNidDataFeilds } from 'stores/dataStore'
import { useActivation } from 'src/stores/dataStore';
import { useRouter } from 'vue-router';
import html2canvas from 'html2canvas';
// import { saveAs } from 'file-saver';
import filesaverJsNpm from 'filesaver.js-npm';
const activatorStore = useActivation()
const router = useRouter()

if (!activatorStore.checkActivation()) {
  router.push("/activate")
}
const nidDataFeilds = useNidDataFeilds()
const nidCard = ref(null)
const printInv = () => {
  // var doc = new jsPDF();
  // var source = document.getElementById('nid-card');
  // doc.html(
  //   source.innerHTML,
  //   {
  //     "x": 15,
  //     "y": 15,
  //     'width': 1084.191,
  //   });

  // // doc.save("a" + 1000 * Math.random() + '.pdf');
  // doc.output("dataurlnewwindow");
  // const printable = window.open('', 'PRINT', 'height=842,width=595')
  // const styles = document.getElementsByTagName('style')

  // printable.document.write('</head><body >')
  // printable.document.write(nidCard.value.innerHTML)
  // for (let i = 0, l = styles.length; i < l; i++) {
  //   printable.document.write(`<style> ${styles[i].innerHTML} </style>`)
  // }
  // printable.document.write('</body></html>')
  // setTimeout(function () {
  //   printable.document.close() // necessary for IE >= 10
  //   printable.focus() // necessary for IE >= 10*/

  //   printable.print()
  //   printable.close();
  // }, 500)
  var div = document.getElementById("nid-card");

  html2canvas(nidCard.value,{type: "dataURL"}).then(function(canvas) {
  // Save the image using FileSaver.js
  console.log(canvas)
  document.body.appendChild(canvas)
  // canvas.toBlob(function(blob) {
  //   console.log(blob)
  //   filesaverJsNpm.saveAs(blob, "screenshot.png",{type:"File"});
  // });
});

  return true
}
</script>
<style>
@font-face {
  font-family: 'sutonnyMJ';
  src: url('assets/fonts/SutonnyOMJ.ttf');
}

@font-face {
  font-family: 'arial';
  src: url('assets/fonts/arial.ttf');
}

@font-face {
  font-family: 'arialBold';
  src: url('assets/fonts/G_ari_bd.ttf');
}

/* @font-face {
  font-family: 'Graublau Web';
  src: url('GraublauWeb.eot');
  src: local('Graublau Web Regular'), local('Graublau Web'),
    url("GraublauWeb.woff") format("woff"),;
} */
</style>
