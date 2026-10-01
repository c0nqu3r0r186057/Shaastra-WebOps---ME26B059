//Defining add, subtract, and reset for the Counter mechanism
var Counter = {
    count: 0,
    
    add:function(){
        //random jokes
        if (this.count==6 || this.count==7){
            alert('Six Seven!!!')
        }
        else if(this.count == 10){
            alert('keep going, good josh')
        }
        else if(this.count == 0){
            alert('Come on, hit those buttons to see changes')
        }


        //Functionality
        if (this.count==2026){
            alert('You \'ve found the easter egg. Rejoice Peasant')
            return this.count
        }
        else{
            this.count = this.count + 1
            return this.count
        }
    },

    subtract:function(){
        if (this.count>0){
            this.count = this.count - 1
            return this.count
        }
        else {
            return this.count
        }
    },

    reset:function(){
        this.count = 0
        return this.count
    }
}

//Main part of code
var counter_display = document.getElementById('Counter')

//Setting Counter to 0 initially to start with
counter_display.innerHTML = 0

//Displaying increased count on click of increase button
document.getElementById('increase').onclick=function(){
    counter_display.innerHTML = Counter.add()
}

//Displaying decreased count on click of decrease button
document.getElementById('decrease').onclick=function(){
    counter_display.innerHTML = Counter.subtract()
}

//Displaying the reset counter
document.getElementById('reset').onclick=function(){
    counter_display.innerHTML = Counter.reset()
}
