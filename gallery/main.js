const response = fetch ('packageA.json')

const myFunc = async () => {
    try {
        const data = await response;
        const dataJson = await data.json();
        const urlArray = dataJson.images;
       

        const parent = document.querySelector('.main')
        urlArray.forEach(element => {
            const a = document.createElement('a')
            a.setAttribute(`href`, `${element}`)

            const image = document.createElement('img')
            image.setAttribute(`src`, `${element}`)
            image.setAttribute('loading', 'lazy')

            a.appendChild(image)
            parent.appendChild(a)
        });
    } catch (error) {
        console.log(error);
    }
}
myFunc();