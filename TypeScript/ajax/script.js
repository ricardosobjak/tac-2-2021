const URL = 'https://jsonplaceholder.typicode.com/photos';

//XMLHttpRequest ou fetch

fetch(URL).then((response) => {
  return response.text()
})
.then((textBuffer) => {
  console.log(textBuffer);

  const postsArray = JSON.parse(textBuffer);

  const fotosDiv = document.getElementById('fotos');

  postsArray.forEach(e => {
    const div = document.createElement('div');
    
    const img = document.createElement('img');
    img.src = e.thumbnailUrl;

    const span = document.createElement('span');
    span.innerText = e.title;

    div.appendChild(img);
    div.appendChild(span);

    fotosDiv.appendChild(div);
  })
});
