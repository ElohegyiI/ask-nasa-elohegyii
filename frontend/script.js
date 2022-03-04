function loadEvent() {
    
    
    /*function Nasa(date, explanation, title, hdurl) {
        
        this.date = date;
        this.explanation = explanation;
        this.title = title;
        this.hdurl = hdurl;
    }*/ 
    
    const rootElement = document.getElementById('root')
    
    const sect = document.createElement('section')
        sect.setAttribute('id', 'Nasa-Cards')
        document.getElementById('root').appendChild(sect)

    /*const division = document.createElement('div')
        division.className = 'Nasa'
        document.getElementById('root').appendChild(sect).appendChild(division)*/



            
        /*return `
        <div class="card">
            <img>${Nasa.hdurl}</img
            <h2>${Nasa.title}</h2>
            <p>${Nasa.explanation}</p>
            <p>${Nasa.date}</p>
        </div>
        `*/
    
    
    
    
        

        
    
        
    
    //Get data

    /*const nasaApiKey = 'd8rG7d4dYIisXPSU8KBH17ipMYR7pPGj1tjRgNqD';
    
    const requestedDate = "2022-02-01";
    
    const nasaPic = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=${requestedDate}`);

    
    const nasaArr = await nasaPic.json();*/
    
    //console.log(nasaArr);


    //rootElement.insertAdjacentHTML('beforeend', nasaCards())


    //Process data

    /*let pictures = nasaArr.map(function(nasa) {

        return new Nasa(nasa.date, nasa.explanation, nasa.title, nasa.hdurl)

    });
        console.log(pictures)*/

        
        

}
window.addEventListener('load', loadEvent) 