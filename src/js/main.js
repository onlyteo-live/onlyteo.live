import "../scss/styles.scss"
import * as bootstrap from "bootstrap"
import jQuery from 'jquery';
window.$ = jQuery;

let age = Math.floor((new Date() - new Date("2008-01-01")) / 31557600000)
$("#age").html(`${age}`)
