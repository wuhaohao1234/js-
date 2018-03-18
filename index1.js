Vue.component('balence', {
    template : `<div>
                    <show @show_blance="show" >
                    </show>
                    <div v-if="show_blance" >显示余额</div>
                </div>`,
    data : function() {
        return {
            show_blance : false
        }
    },
    methods : {
        show : function() {
            this.show_blance = true;
        }
    }
});
Vue.component('show', {
    template : '<button @click="on_click()" >显示余额</button>',
    methods : {
        on_click : function() {
            this.$emit('show_blance')
        }
    }
});
new Vue({
    el : '#app',
    data : {
        name : '吴昊'
    }
})