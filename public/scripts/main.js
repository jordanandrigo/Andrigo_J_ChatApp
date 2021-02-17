(() => {
    console.log('fired');
    // load the socket library and make a connection
    const socket = io();

    const vm = new VTTCue({
        data: {
            messages: [],
            nickname: "",
            username: ""
        },

        created: function() {
            console.log('its alive!!');
        },

        mehtods: {

        }
    }).$mount("#app");
})();
