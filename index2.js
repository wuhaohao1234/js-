var event = new Vue();
Vue.component('wuhao',{
    template : `
        <div>
            我说 ： <input @keyup="on_change" v-model="say">
        </div>    
    `,
    methods : {
        on_change : function() {
            event.$emit('said_somthing',this.say)
        }
    },
    data : function() {
        return {
            say : ''
        }
    }
});
Vue.component('xiaojianhua',{
    template : `
        <div>
            你听 ：{{said}} 
        </div>
    `,
    data : function() {
        return {
            said : ''
        }
    },
    mounted : function() {
        var me = this;
        event.$on('said_somthing',function(data){
            me.said_somthing = data;
        })
    }
})
new Vue({
    el : '#app',
    data : {
        name : '吴昊'
    }
})