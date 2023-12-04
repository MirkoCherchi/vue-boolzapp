'use strict';

// Vue application creation
const { DateTime } = luxon;

const { createApp } = Vue

  createApp({
    // Data application
    data() {
      return {
        contacts: [
    {
        name: 'Michele',
        avatar: './img/avatar_1.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: './img/avatar_2.jpg',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: './img/avatar_3.jpg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: './img/avatar_4.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: './img/avatar_5.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: './img/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: './img/avatar_7.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: './img/avatar_8.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
        
    }
],
contactActive: null,
newMessage: '',
listContact: '',
dropDownMessage: null,
randomResponse: [
    'A volte sono le persone che nessuno immagina che possano fare certe cose quelle che fanno cose che nessuno può immaginare.',
    'La fantasia è più importante del sapere, perché il sapere è limitato.',
    'Chi dice che è impossibile non dovrebbe disturbare chi ce la sta facendo.',
    'C\'è una forza motrice più forte del vapore, dell’elettricità e dell’energia atomica: la volontà.',
    'La misura dell\'intelligenza è data dalla capacità di cambiare quando è necessario.',
    'La logica ti porta da A a B, l’immaginazione ti porta ovunque.',
    'Gli occhi sono lo specchio dell’anima… cela i tuoi se non vuoi che ne scopra i segreti.',
    'Imparerai a tue spese che nel lungo tragitto della vita incontrerai tante maschere e pochi volti.',
    'Ma guardi signore è facilissimo, le insegno io ad esser pazza. Basta gridare la verità in faccia a tutti, loro non ci crederanno e ti prenderanno per pazza.',
    'Non credo di aver capito bene',
    'Questa app è favolosa',
],
ultimateAcces: 'Ultimo accesso oggi alle 12:00',
showDropdown: false,
fontZoomed: false,

        
  }
  
},

    // Application methods
     methods: {
        fontZoomIn() {
        this.fontZoomed = !this.fontZoomed;
    },

        orderChat() {
      this.contacts.sort((a, b) => {
        const lastMessageA = a.messages[a.messages.length - 1];
        const lastMessageB = b.messages[b.messages.length - 1];

        const dateA = DateTime.fromFormat(lastMessageA.date, 'HH:mm');
        const dateB = DateTime.fromFormat(lastMessageB.date, 'HH:mm');

        return dateB - dateA;
      });
    },
        
        contactActivated(contact) {
            this.contactActive = contact;
        },


         contactMessages() {
            return this.contactActive ? this.contactActive.messages : [];
        },

        insertNewMessage() {
            if (this.newMessage.trim() !== '') {
                const time = DateTime.now();
                const timeFormatted = time.toFormat('HH:mm');
                this.contactActive.messages.push({
                    date: timeFormatted,
                    message: this.newMessage,
                    status: 'received',
                });
                this.$nextTick(() => {
                this.scrollChatToBottom();
                });
                
                const setValue = this.newMessage

                this.newMessage = '';
                this.orderChat();
                this.ultimateAcces = 'Sta scrivendo...';
               

             setTimeout(() => {
                let responseMessage = '';

                if (setValue.trim().toLowerCase() === 'ciao') {
                    responseMessage = 'Ciao Mirko';
                } else if (setValue.trim().toLowerCase() === 'come va?') {
                    responseMessage = 'Bene Mirko! e tu?';
                } else {
                    
                    const randomIndex = Math.floor(Math.random() * this.randomResponse.length);
                    responseMessage = this.randomResponse[randomIndex];
                }

                this.contactActive.messages.push({
                    date: timeFormatted,
                    message: responseMessage,
                    status: 'sent',
                });
                this.$nextTick(() => {
                this.scrollChatToBottom();
                });

                this.ultimateAcces = 'Online';
                setTimeout(() => {
                    this.ultimateAcces = `Ultimo accesso oggi alle ${time.toFormat('HH:mm')}`;
                }, 2000);
            }, 1000);
            
        }

        },

        scrollChatToBottom() {
    const chatContainer = this.$refs.chatContainer;
    if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
},
        

        dropDown(message) {
        if (this.dropDownMessage === message) {
            this.dropDownMessage = null;
        } else {
            this.dropDownMessage = message;
        }
    },

    isDropdownOpen(message) {
        return this.dropDownMessage === message;
    },

    deleteMessage(message) {
        
        const index = this.contactActive.messages.indexOf(message);
        if (index !== -1) {
            this.contactActive.messages.splice(index, 1);
        }
    },

    
        filteredContacts() {
            this.contacts.forEach((user) => {
                if (user.name.toLowerCase().includes(this.listContact)) {
                    user.visible = true;
                } else {
                    user.visible = false;
                      
                }
            })
    
        },

        deleteMessages() {
        if (this.contactActive) {
            this.contactActive.messages = [];
            this.showDropdownMenu = false;
        }
    },

        deleteChat() {
    if (this.contactActive) {
        
        const index = this.contacts.indexOf(this.contactActive);

        if (index !== -1) {
            this.contacts.splice(index, 1);

            if (this.contacts.length > 0) {
                this.contactActive = this.contacts[0];
           
            } else {
                this.contactActive = null;
            }

            this.showDropdownMenu = false;
        }
    }
},

    }, 


     mounted() {
        
    },
    watch: {
    contactActive() {
        this.$nextTick(() => {
            this.scrollChatToBottom();
        });
    },
},

   

}).mount('#app');