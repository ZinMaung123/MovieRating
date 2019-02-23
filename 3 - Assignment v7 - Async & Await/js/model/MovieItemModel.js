import APIDataModel from "./APIModel.js";

class Movie extends APIDataModel{
    constructor(id,title,poster,overview,link){
        super();
        this.id = id;
        this.title = title;
        this.poster = poster;
        this.overview = overview;
        this.link =link;        
    }
    

    getDetailApiUrl(movie_id,key){
        return this.generateApiPath(this.detail_path, movie_id, key);
    }

    getVideosApiUrl(movie_id, key){
        return this.generateApiPath(this.videos_path, movie_id, key);
    }

    generateApiPath(rawUrl, movie_id, key){
        return this.rootURL + rawUrl.replace("{movie_id}",movie_id).replace("<<api_key>>",key);

    }

    async fetchMovieDetail(movie_id,key){
        // return fetch(this.getDetailApiUrl(movie_id,key))
        //     .then(res => res.json())
        //     .then(data=> this.updateData(data));

        //Detail Information
        const res = await fetch(this.getDetailApiUrl(movie_id,key));
        const jsonRes = await res.json();

        //List of videos
        const fetchVideoResult = await fetch(this.getVideosApiUrl(movie_id, key));
        const jsonVideoRes = await fetchVideoResult.json();
        const videoArray = jsonVideoRes.results;
        return this.updateData(jsonRes, videoArray);
    }

    updateData(data, videos){
        console.log(data);
        this.id = data.id;
        this.title = data["original_title"];
        this.poster = data["poster_path"];
        this.overview = data["overview"];
        this.videos = videos;
        return this;
    }

}

export default Movie;