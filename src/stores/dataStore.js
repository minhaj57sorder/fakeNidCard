import { defineStore } from "pinia";

let activatorString = localStorage.getItem("activatorString");

export const useNidDataFeilds = defineStore("counter", {
  state: () => ({
    nameEnglish: "",
    nameBangla: "",
    nameFather: "",
    nameMother: "",
    nidNo: "",
    bloodGroup: "",
    dathOfBirth: "",
    birthPlace: "",
    addressline1: "",
    addressline2: "",
    addressline3: "",
    addressline4: "",
    payingDate: "",
    payerSignature: null,
    photo: null,
    signature: null,
    barCode: null,
    payerSignatureURL: null,
    photoURL: null,
    signatureURL: null,
    barCodeURL: null,
  }),
  getters: {},
  actions: {
    set_photoURL(imageurl) {
      this.photoURL = imageurl;
    },
    set_signatureURL(imageurl) {
      this.signatureURL = imageurl;
    },
    set_barcodeURL(imageurl) {
      this.barcodeURL = imageurl;
    },
    set_payerSingatureURL(imageurl) {
      this.payerSingatureURL = imageurl;
    },
  },
});
export const useActivation = defineStore("activation_store", {
  state: () => ({
    activator: null,
  }),
  getters: {},
  actions: {
    checkActivation() {
      if (
        activatorString ===
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyf.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5"
      ) {
        return true;
      } else {
        return false;
      }
    },
    valuateActivate() {
      if (
        this.activator ===
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyf.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5"
      ) {
        localStorage.setItem("activatorString", this.activator);
      }
    },
  },
});
