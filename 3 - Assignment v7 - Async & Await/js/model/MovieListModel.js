import APIDataModel from "./APIModel.js";


class MovieListModel extends APIDataModel {
   
    getUpcomingApiUrl(key){
        return this.rootURL + this.upcoming_path.replace("<<api_key>>",key);
    }

    async fetchUpcomingMovie(key){
        // return fetch(this.getUpcomingApiUrl(key))
        //     .then(res => res.json())
        //     .then(data=> data.results);

        const res = await fetch(this.getUpcomingApiUrl(key));
        const jsonRes = await res.json();
        return jsonRes.results;
    }

   
    
}

export default MovieListModel;