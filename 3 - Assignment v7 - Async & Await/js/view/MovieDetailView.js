class MovieListView {
    constructor(controller){
        this.controller = controller;
        this.itemTemplate = document.getElementById("movie-detail-template").innerHTML;
        this.viewport = document.getElementById("viewport");        
        this.viewport.addEventListener('click',(event)=>this.listViewBtnListener(event));
    }

    listViewBtnListener(event){
        event.preventDefault();
        const targetEle = event.target;        
                
        if(targetEle && targetEle.parentNode.classList.contains('list-view-button')){              
            this.controller.changeListView();
        }
    }

    getItemTemplate(object){
        const result = this.itemTemplate
        .replace("{{this.title}}",object.title)
        .replace("{{this.poster}}",`https://image.tmdb.org/t/p/w400/${object.poster}`)
        .replace("{{this.overview}}",object.overview)
        .replace("{{this.id}}",object.id);
        return result;
    }    

    render(object) {          
        this.viewport.innerHTML = this.getItemTemplate(object);        
    }
}

export default MovieListView;