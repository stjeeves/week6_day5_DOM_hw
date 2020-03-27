document.addEventListener('DOMContentLoaded', () => {
     const newForm = document.querySelector('#new_form');
     newForm.addEventListener('submit', handleFormSubmit);

    const deleteAllButton = document.querySelector('#delete_all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

           //grab stuff from the DOM

        const handleFormSubmit = function (event) {
            event.preventDefault();
            const list = document.querySelector('#games_list');
            const li = document.createElement('li');
            li.textContent = li.textContent = `Title: ${this.game_title.value} Genre: ${this.game_genre.value} Platform: ${this.game_platform.value}`
            list.appendChild(li)
            document.getElementById("new_form").reset();
        };

    
    const handleDeleteAllClick = function (event) {
        const gamesList = document.querySelector('#games_list');
        gamesList.innerHTML = '';
    }

    

    
        
    
  



