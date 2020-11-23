const app = new Vue({
    el: '#root',
    data:{
        user: {
            profileImg: 'img/avatar_7.jpg',
            name: 'Davide Rinaldi'
        },

        counterIndexContact: 0,
        userMessage: '',
    
        contactArr: [
            {
                profileImg: 'img/avatar_1.jpg',
                name: 'Giovanni',
                message: 'Ciao Davide! Come stai?',
                dateMess: '15:11 23/11/2020',
                lastAccess: '10:49',
            },
            {
                profileImg: 'img/avatar_2.jpg',
                name: 'Michele',
                message: 'Ci manca il decimo a calcetto',
                dateMess: '15:11 23/11/2020',
                lastAccess: '10:15',
            },
            {
                profileImg: 'img/avatar_3.jpg',
                name: 'Francesco',
                message: 'Stasera cosa fate?',
                dateMess: '15:11 23/11/2020',
                lastAccess: '9:32',
            },
            {
                profileImg: 'img/avatar_4.jpg',
                name: 'Jhonny',
                message: 'Dormi?',
                dateMess: '15:11 23/11/2020',
                lastAccess: '6:46',
            },
            {
                profileImg: 'img/avatar_5.jpg',
                name: 'Franca',
                message: 'Vieni in palestra oggi?',
                dateMess: '15:11 23/11/2020',
                lastAccess: '10:01',
            },
            {
                profileImg: 'img/avatar_6.jpg',
                name: 'Donatella',
                message: 'Posso chiamarti?',
                dateMess: '15:11 23/11/2020',
                lastAccess: '10:52',
            },
            {
                profileImg: 'img/avatar_8.jpg',
                name: 'Federico',
                message: 'Sono stanco',
                dateMess: '15:11 23/11/2020',
                lastAccess: '10:29',
            },
            {
                profileImg: 'img/avatar_io.jpg',
                name: 'Giorgia',
                message: 'Chi è Jessico calcetto?',
                dateMess: '15:11 23/11/2020',
                lastAccess: '9:59',
            }
        ]
    },
    methods: {
        selectedContact(index){
            console.log(index);
            this.counterIndexContact = index;
        },

    }     
})
