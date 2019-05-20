import Vue from "vue";
import HelloComponent from "./components/Hello.component";

let v = new Vue({
    el: "#app",
    template: `<hello-component name="momo" />`,
    components: {
        HelloComponent
    }
});