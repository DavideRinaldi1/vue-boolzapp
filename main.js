const app = new Vue({
    el: '#root',
    data:{
        user: {
            profileImg: 'img/avatar_7.jpg',
            name: 'Davide Rinaldi'
        },
        activeEmoji: false,
        counterIndexContact: 0,
        message: '',
        searchInput: '',
        contactArr: [
            {
                profileImg: 'img/avatar_1.jpg',
                name: 'Giovanni',
                lastAccess: '10:49',
                visibile: true,
                historicalMessage: [
                    {
                        message: 'Ciao Davide! Come stai?',
                        time: new Date().toLocaleDateString(),
                        type: 'ricevuto',
                    },
                    {
                        message: 'ho un po di Covid, ma il tempo di una tachipirina e scendo',
                        time: new Date().toLocaleDateString(),
                        type: 'inviato',
                    }
                ],
            },
            {
                profileImg: 'img/avatar_2.jpg',
                name: 'Michele',
                lastAccess: '10:15',
                visibile: true,
                historicalMessage: [
                    {
                        message: 'Lasciami stare o chiamo la polizia',
                        time: new Date().toLocaleDateString(),
                        type: 'ricevuto',
                    },
                    {
                        message: 'Ma perchè',
                        time: new Date().toLocaleDateString(),
                        type: 'inviato',
                    }
                ],
            },
            {
                profileImg: 'img/avatar_3.jpg',
                name: 'Francesco',
                lastAccess: '9:32',
                visibile: true,
                historicalMessage: [
                    {
                        message: 'Ti va di chiamarmi?',
                        time: new Date().toLocaleDateString(),
                        type: 'ricevuto',
                    },
                    {
                        message: 'Non ho credito',
                        time: new Date().toLocaleDateString(),
                        type: 'inviato',
                    }
                ],
            },
            {
                profileImg: 'img/avatar_4.jpg',
                name: 'Jhonny',
                lastAccess: '6:46',
                visibile: true,
                historicalMessage: [
                    {
                        message: 'Dove vai a dicembre?',
                        time: new Date().toLocaleDateString(),
                        type: 'ricevuto',
                    },
                    {
                        message: 'Dove vuoi che vada, in zona rossa',
                        time: new Date().toLocaleDateString(),
                        type: 'inviato',
                    }

                ],
            },
            {
                profileImg: 'img/avatar_5.jpg',
                name: 'Franca',
                lastAccess: '10:01',
                visibile: true,
                historicalMessage: [
                    {
                        message: 'Che fai stasera?',
                        time: new Date().toLocaleDateString(),
                        type: 'ricevuto',
                    },
                    {
                        message: 'Cinema, poi ristorante... ah no',
                        time: new Date().toLocaleDateString(),
                        type: 'inviato',
                    }

                ],
            },
            {
                profileImg: 'img/avatar_6.jpg',
                name: 'Donatella',
                lastAccess: '10:52',
                visibile: false,
                historicalMessage: [
                    {
                        message: 'Come ho dormito bene',
                        time: new Date().toLocaleDateString(),
                        type: 'ricevuto',
                    },
                    {
                        message: 'Sai quanto me ne frega',
                        time: new Date().toLocaleDateString(),
                        type: 'inviato',
                    }

                ],
            },
            {
                profileImg: 'img/avatar_8.jpg',
                name: 'Federico',
                lastAccess: '10:29',
                visibile: true,
                historicalMessage: [
                    {
                        message: 'Marianna va in campagna',
                        time: new Date().toLocaleDateString(),
                        type: 'ricevuto',
                    },
                    {
                        message: 'Come devo interpretare questo messaggio?',
                        time: new Date().toLocaleDateString(),
                        type: 'inviato',
                    }

                ],
            },
            {
                profileImg: 'img/avatar_io.jpg',
                name: 'Giorgia',
                lastAccess: '9:59',
                visibile: true,
                historicalMessage: [
                    {
                        message: 'Chi è jessico calcetto?',
                        time: new Date().toLocaleDateString(),
                        type: 'ricevuto',
                    },
                    {
                        message: 'La mia amante',
                        time: new Date().toLocaleDateString(),
                        type: 'inviato',
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
                time: new Date().toLocaleDateString(),
                type: 'inviato',
            })

            this.message = ''
        },
        replyMessage(){
            this.contactArr[this.counterIndexContact].historicalMessage.push(
                {
                    message: 'Lasciami stare',
                    time: new Date().toLocaleDateString(),
                    type: 'ricevuto',
                }
            )
        },
        timeOut(){
            setTimeout(()=> {this.replyMessage()}, 3000)
        },
        filterContact() {
            this.contactArr.forEach((contatto) => {
                if(contatto.name.toLowerCase().includes(this.searchInput.toLowerCase())){
                    contatto.visibile = true
                }else{
                    contatto.visibile = false
                }
            })

        },
        active(){ 
            this.activeEmoji = !this.activeEmoji
        },
    }     
})
