const app = new Vue({
    el: '#root',
    data:{
        user: {
            profileImg: 'img/avatar_7.jpg',
            name: 'Davide Rinaldi'
        },

        counterIndexContact: 0,
        message: '',
    
        contactArr: [
            {
                profileImg: 'img/avatar_1.jpg',
                name: 'Giovanni',
                dateMess: '15:11 23/11/2020',
                lastAccess: '10:49',
                historicalMessage: [
                    {
                        message: 'Ciao Davide! Come stai?',
                        time: '12:40',
                        type: 'ricevuto',
                    }
                ],
            },
            {
                profileImg: 'img/avatar_2.jpg',
                name: 'Michele',
                dateMess: '15:11 23/11/2020',
                lastAccess: '10:15',
                historicalMessage: [
                    {
                        message: 'Lasciami stare o chiamo la polizia',
                        time: '12:40',
                        type: 'ricevuto',
                    }
                ],
            },
            {
                profileImg: 'img/avatar_3.jpg',
                name: 'Francesco',
                dateMess: '15:11 23/11/2020',
                lastAccess: '9:32',
                historicalMessage: [
                    {
                        message: 'Ti va di chiamarmi?',
                        time: '12:40',
                        type: 'ricevuto',
                    }
                ],
            },
            {
                profileImg: 'img/avatar_4.jpg',
                name: 'Jhonny',
                dateMess: '15:11 23/11/2020',
                lastAccess: '6:46',
                historicalMessage: [
                    {
                        message: 'Dove vai a dicembre?',
                        time: '12:40',
                        type: 'ricevuto',
                    }
                ],
            },
            {
                profileImg: 'img/avatar_5.jpg',
                name: 'Franca',
                dateMess: '15:11 23/11/2020',
                lastAccess: '10:01',
                historicalMessage: [
                    {
                        message: 'Che fai stasera?',
                        time: '12:40',
                        type: 'ricevuto',
                    }
                ],
            },
            {
                profileImg: 'img/avatar_6.jpg',
                name: 'Donatella',
                dateMess: '15:11 23/11/2020',
                lastAccess: '10:52',
                historicalMessage: [
                    {
                        message: 'Come ho dormito bene',
                        time: '12:40',
                        type: 'ricevuto',
                    }
                ],
            },
            {
                profileImg: 'img/avatar_8.jpg',
                name: 'Federico',
                dateMess: '15:11 23/11/2020',
                lastAccess: '10:29',
                historicalMessage: [
                    {
                        message: 'Marianna va in campagna',
                        time: '12:40',
                        type: 'ricevuto',
                    }
                ],
            },
            {
                profileImg: 'img/avatar_io.jpg',
                name: 'Giorgia',
                dateMess: '15:11 23/11/2020',
                lastAccess: '9:59',
                historicalMessage: [
                    {
                        message: 'Chi è jessico calcetto?',
                        time: '12:40',
                        type: 'ricevuto',
                    }
                ],
            }
        ]
    },
    methods: {
        selectedContact(index){
            console.log(index);
            this.counterIndexContact = index;
        },
        sendMessage(){
            this.contactArr[this.counterIndexContact].historicalMessage.push({
                message: this.message,
                time: '12:40',
                type: 'inviato',
            })

            this.message = ''
        }

    }     
})
