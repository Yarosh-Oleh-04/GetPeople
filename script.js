xml = new XMLHttpRequest

xml.open('GET', 'https://api.hebron-academy.com/itacademyhebron/api/hebron100/get_people/')
xml.send()
xml.onreadystatechange = function() {
    if (xml.readyState == 4 && xml.status == 200){
        let data = JSON.parse(this.responseText)
        for (i = 0; i < data.people.length; i++){
            var div = document.createElement('div')
            div.className = 'people'
            document.body.appendChild(div)
           div.innerHTML += '<img src="https://api.hebron-academy.com/itacademyhebron/api/media/' + data.people[i].image + '">'
           div.innerHTML += '<p>' + data.people[i].name
           div.innerHTML += '<p>' + data.people[i].position
           div.innerHTML += '<a target="blank" href="' + data.people[i].facebook + '">' + 'Facebook'
        }
    }
}
