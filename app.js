Vue.createApp({
    data(){
        return {
            goals:[],
            enteredValue:''
        };
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue= '';
        }
    }

}).mount('#app');

// const buttonEl =document.querySelector('button');
// const inputEL=document.querySelector('input');
// const listEl=document.querySelector('ul');

// function addGoal(){
//     const enteredValue= inputEL.value;
//     const listItemEL=document.createElement('li');
//     listItemEL.textContent=enteredValue;
//     listEl.appendChild(listItemEL);
//     inputEL.value='';
// }

// buttonEl.addEventListener('click',addGoal);