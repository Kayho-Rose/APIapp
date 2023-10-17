const pickColor = document.getElementById('pick-color')
const schemeSelect = document.getElementById('scheme-select')
const getScheme = document.getElementById('get-scheme')

getScheme.addEventListener('click', function(){
    console.log(pickColor.value.slice(1))
    console.log(schemeSelect.value.toLowerCase())
    fetch(`https://www.thecolorapi.com/scheme?hex=${pickColor.value.slice(1)}&mode=${schemeSelect.value.toLowerCase()}&count=5`)
        .then(response => response.json())
        .then(data => {
            let colorsDisplay = ''
            const colorArray = data.colors
            
            for (let color of colorArray){
                colorsDisplay += `
                    <div class='color-feed'>
                        <img class='color' src="${color.image.bare}">
                        <p>${color.hex.value}</p>
                    </div>
            `
            }
            
            document.getElementById('color-palette').innerHTML = colorsDisplay
        })
})

