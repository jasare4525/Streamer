export const navigate = (e) => {
    //function to listen for clicks on the buttons
    if(e.target.className == 'fas fa-home'){
        window.location.replace('index.html')

    }
    else if(e.target.className == 'fas fa-user' || e.target.className == 'close' || e.target.className == 'lin') {
        //we will display a modal when the user button is clicked
        // this modal will allow the user set a profile picture, account name and choose their favorite movie categories
        document.querySelector('.account-modal').classList.toggle('toggle')
        document.body.classList.toggle('toggle')
    }
    else if(e.target.className == 'fa-cogs'){
        // will desgin a modal to display the settings


    }
    else if(e.target.className == 'fa-envelope'){
        //code here to display notifications or messages received from us
        window.location.replace('inbox.html')
    }
    
}