function loadEvent() {

    const rootElement = document.getElementById('root')

    const sect = document.createElement('section')
    sect.setAttribute('id', 'Nasa')
    document.getElementById('root').appendChild(sect)

    const division = document.createElement('div')
    division.className = 'Title'
    document.getElementById('root').appendChild(sect).appendChild(division)

    division.insertAdjacentHTML('beforeend', `
        <h2 id="title"></h2>
        <p id="date"></p>
        <small style="display: block;" id="copyright" ></small>
    `);

    const divisionPic = document.createElement('div')
    divisionPic.className = 'Picture'
    document.getElementById('root').appendChild(sect).appendChild(divisionPic)

    const divisionExpl = document.createElement('div')
    divisionExpl.className = 'Explanation'
    document.getElementById('root').appendChild(sect).appendChild(divisionExpl)

    divisionExpl.insertAdjacentHTML('beforeend', `
        <p id="explan"></p>
        `);

    /*const divisionDate = document.createElement('div')
    divisionDate.className = 'Date'
    document.getElementById('root').appendChild(sect).appendChild(divisionDate)*/

    const divisionDatePick = document.createElement('div')
    divisionDatePick.className = 'Date-Pick'
    document.getElementById('root').appendChild(sect).appendChild(divisionDatePick)

    divisionDatePick.insertAdjacentHTML('beforeend', `
    <form >
        <label for="datepicker">Pick a date:
        <input id="datepicker" type="date" min="" max="" > 
        </label>
    </form>
    `);

    /*const divisionMedia = document.createElement('div')
    divisionMedia.className = 'Media'
    document.getElementById('root').appendChild(sect).appendChild(divisionMedia)*/


    const nasaApiKey = 'd8rG7d4dYIisXPSU8KBH17ipMYR7pPGj1tjRgNqD';

    const url = 'https://api.nasa.gov/planetary/apod?api_key=';

    function fetchData() {
        try {
          fetch(url + nasaApiKey)
          .then(response => response.json())
          .then(json => {
            console.log(json)
            display(json)
          })
        }catch(error){
          console.log(error)
        }
    }
    fetchData()


    const title = document.querySelector(".Title");
    
    const mediaSection = document.querySelector(".Picture");
    
    const info = document.querySelector(".Explanation");


    function display(adat) {

        title.innerHTML = adat.title;

        info.innerHTML = adat.explanation

        const imageSection = `<a id="hdimg" href="" target="-blank">
            <div class="image-div">
                <img id="image_of_the_day" src="" alt="image-by-nasa">
            </div>
            </a>`
            ;

        const videoSection = `<div class="video-div"> 
                <iframe id="videoLink" src=""frameborder="0">
                </iframe>
            </div>`
            ;

        if (adat.media_type = "video") {

            mediaSection.innerHTML = videoSection;
            document.getElementById("videoLink").src = adat.url;
       
        } else {

            mediaSection.innerHTML = imageSection;
            document.getElementById("hdimg").href = adat.hdurl;
            document.getElementById("image_of_the_day").src = adat.url;
        }
        
        
        const dateInput = document.querySelector("#datepicker");
        
        let newDate = "&date=" + dateInput.value + "&";
        
        fetch(url + nasaApiKey + newDate)
        
        const currentDate = new Date().toISOString().slice(0, 10);
        dateInput.max = currentDate;
        dateInput.min = "2000-01-01";
        
            
                dateInput.addEventListener('change',(e) => {
                e.preventDefault();
                display().onload;  
                
                
                });
            
    }


}
window.addEventListener('load', loadEvent)

