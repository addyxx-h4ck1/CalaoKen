const response = fetch ('packageA.json')

const myfunc = async () => {
    try {
        const data = await response;
        const dataJson = await data.json();
        const newArray = dataJson.images;
        
        const parent = document.querySelector('.col-1')
        newArray.forEach(element => {

            const div = document.createElement('div')
            div.setAttribute('class', 'image-card')
            
            
            const a = document.createElement('a')
            a.setAttribute(`href`, `${element.url}`)
           
            const image = document.createElement('img')
            image.setAttribute(`src`, `${element.url}`)

            const notes = document.createElement('span')
            notes.textContent = (`${element.notes}`)

            div.appendChild(a)
            a.appendChild(image)
            a.appendChild(notes)
            parent.appendChild(div)
        });

    } catch (error) {
        console.log(error);
    }
}
myfunc();