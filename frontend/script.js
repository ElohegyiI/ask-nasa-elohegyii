function Nasa(url, title, explanation, date) {

    this.hdurl = url;
    this.title = title;
    this.explanation = explanation;
    this.date = date;
}  



const loadEvent = async _ => {
    
    const nasaCard = (url, title, explanation, date) => {
            
        return `
        <div class="card">
            <img src="${url}"></img>
            <h2>${title}</h2>
            <p>${explanation}</p>
            <p>${date}</p>
        </div>
        `
    }
    //console.log(nasaCard)


    const nasaCards = (sect) => {
    
        return`
            <section class="Nasa-Cards"></section>
        `;
    }
        //console.log(nasaCards)
    
    //Get data

    const nasaApiKey = 'd8rG7d4dYIisXPSU8KBH17ipMYR7pPGj1tjRgNqD';
    
    const requestedDate = "2022-03-07"
    
    const nasaPic = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&date=${requestedDate}`);

    
    const nasaArr = await nasaPic.json();
    
    console.log(nasaArr);

    const rootElement = document.getElementById('root')

    rootElement.insertAdjacentHTML('beforeend', nasaCards())
    
    rootElement.insertAdjacentHTML('beforeend', nasaCard())
    
    

    /*const division = document.createElement('div')
        division.className = 'Nasa'
        document.getElementById('root').appendChild(nasaCards).appendChild(division)

        console.log(division)*/

    //Process data

    let pictures = Array.from(nasaArr).map(function(url, title, explanation, date) {

        return new Nasa(url, title, explanation, date)

    });

       

        console.log(pictures)

        
        

}


window.addEventListener('load', loadEvent) 