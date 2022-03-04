function Nasa(date, explanation, title, hdurl) {

    this.date = date;
    this.explanation = explanation;
    this.title = title;
    this.hdurl = hdurl;
}  



const loadEvent = async _ => {
    
    const nasaCard = (nasa) => {
            
        return `
        <div class="card">
            <img>${nasa.hdurl}</img
            <h2>${nasa.title}</h2>
            <p>${nasa.explanation}</p>
            <p>${nasa.date}</p>
        </div>
        `
    }
    
    const nasaCards = (sect) => {
    
        return`
            <section class="Nasa-Cards>${sect}</section>
        `
    }
        
    
    //Get data

    const nasaApiKey = 'd8rG7d4dYIisXPSU8KBH17ipMYR7pPGj1tjRgNqD';
    
    const requestedDate = "2022-02-01";
    
    const nasaPic = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=${requestedDate}`);

    
    const nasaArr = await nasaPic.json();
    
    //console.log(nasaArr);

    const rootElement = document.getElementById('root')

    const division = document.createElement('div')
        division.className = 'Nasa'
        document.getElementById('root').appendChild(division)

    rootElement.insertAdjacentHTML('beforeend', nasaCards())


    //Process data

    /*let pictures = nasaArr.map(function(nasa) {

        return new Nasa(nasa.date, nasa.explanation, nasa.title, nasa.hdurl)

    });
        console.log(pictures)*/

        
        

}
window.addEventListener('load', loadEvent) 