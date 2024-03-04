const addMedia = document.querySelector('.article-content');
const addButton = document.querySelector('.add')
const addImage = document.querySelector('.add-image')
const fileInput = document.getElementById('fileInput')
const addTitle = document.querySelector('.add-title')
const addParagraph = document.querySelector('.add-paragraph')
const addDescription = document.querySelector('.add-description')
const publishButton = document.querySelector('.submit-button')

//pour gerer l'animation de bouton ou on clique les icones apparaissent
addButton.addEventListener('click', () => {
    
    if (addMedia.classList.contains('clicked')){
        addMedia.classList.remove('clicked')
    } else {
        addMedia.classList.add('clicked')
    }
})

//pour gerer l'ajout d'image
addImage.addEventListener('click', () => {
    fileInput.click()
})

fileInput.addEventListener('change', function() {
    let clickCounter = 0;
    clickCounter++;
    if(clickCounter === 1){
        let file = this.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var imageElement = document.createElement('img');
                imageElement.src = e.target.result;
                document.querySelector('.article-image').innerHTML = ''; // Clear previous content
                document.querySelector('.article-image').appendChild(imageElement);
            };
            reader.readAsDataURL(file);
        }
    } else if (clickCounter === 2){
        let file = this.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var imageElement = document.createElement('img');
                imageElement.src = e.target.result;
                document.querySelector('.article-image2').innerHTML = ''; // Clear previous content
                document.querySelector('.article-image2').appendChild(imageElement);
            };
            reader.readAsDataURL(file);
        }
    }
    
});

let textArea = document.createElement('textarea')
textArea.setAttribute('placeholder', 'Entrez votre texte ici...');

let textArea2 = document.createElement('textarea')
textArea2.setAttribute('placeholder', 'Entrez votre texte ici...');

let textArea3 = document.createElement('textarea')
textArea3.setAttribute('placeholder', 'Entrez votre texte ici...');


let textAreaCounter = 0
addParagraph.addEventListener('click', () => {
    textAreaCounter++
    if (textAreaCounter === 1){
        document.querySelector('.first-paragraph').appendChild(textArea);
    }
    else if(textAreaCounter === 2){
        document.querySelector('.second-paragraph').appendChild(textArea2);
    }
    else if(textAreaCounter === 3){
        document.querySelector('.third-paragraph').appendChild(textArea3)
    }
})

let quotationTextArea = document.createElement('textarea')
quotationTextArea.setAttribute('placeholder', 'Entrez votre grand titre ici...');

addTitle.addEventListener('click', () => {
    document.querySelector('.quotation').appendChild(quotationTextArea);
})

const descriptionArea = document.createElement('textarea')
descriptionArea.setAttribute('placeholder', 'Entrez votre description ici...');

addDescription.addEventListener('click', () => {
    document.querySelector('.article-description').appendChild(descriptionArea);
})


//fonction permettant de generer la date de publication
function setDate(){
    let datePublication = new Date();
    let mois = datePublication.toLocaleString('default', { month: 'short' });
    let jour = datePublication.getDate();
    let annee = datePublication.getFullYear();
    return mois + ' ' + jour + ', ' + annee;
}

//fonctionner permettant de generer un id unique pour chaque article
function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function createArticle(){
    //selectionner des elements
    const articleTitle = document.querySelector('.article-title input')
    const articleImage = document.querySelector('.article-image img')
    const articleImage2 = document.querySelector('.article-image2 img')
    const firstParagraph = document.querySelector('.first-paragraph textarea')
    const secondParagraph = document.querySelector('.second-paragraph textarea')
    const thirdParagraph = document.querySelector('.third-paragraph textarea')
    const quotation = document.querySelector('.quotation textarea')
    const articleDescription = document.querySelector('.article-description textarea')
    
    //recuperer les donnees de ces elements
    const title =  articleTitle.value
    const image = articleImage.src
    const image2 = articleImage2.src
    const paragraph1 = firstParagraph.value
    const paragraph2 = secondParagraph.value
    const paragraph3 = thirdParagraph.value
    const quote = quotation.value
    const description = articleDescription.value
    let date = setDate()

    //creer un objet article a partir de ces donnees recuperees
    const article = {
        id: generateUniqueId(), //generer un id unique pour chaque article
        title: title,
        image: image,
        image2: image2,
        paragraph1: paragraph1,
        paragraph2: paragraph2,
        paragraph3: paragraph3,
        quote: quote,
        description: description,
        date: date
    }
    // appeler la fonction saveArticle pour sauvegarder l'article dans le local storage
    saveArticle(article)

}

//sauvegarde de l'article dans le local storage
function saveArticle(article){
    let articles = JSON.parse(localStorage.getItem('articles')) || []
    articles.push(article)
    localStorage.setItem('articles', JSON.stringify(articles))
}



publishButton.addEventListener('click', () => {
    createArticle()
})




/*
console.log(document.querySelector('.daily-digest-articles'))

function previewArticle(article){

    const previewContainer = document.getElementById('daily-digest-articles')

    const articleContainer = document.createElement('div')
    articleContainer.classList.add('article')

    const articleLeft = document.createElement('div')
    articleLeft.classList.add('article-left')

    articleContainer.appendChild(articleLeft)

    const publicationDate = document.createElement('span')
    publicationDate.textContent = 'Publié le 12/12/2021'

    articleLeft.appendChild(publicationDate)

    articleLeftBotton = document.createElement('div')
    articleLeftBotton.classList.add('article-left-botton')

    articleLeft.appendChild(articleLeftBotton)

    const articleTitle = document.createElement('h3')
    articleTitle.textContent = article.title

    articleLeftBotton.appendChild(articleTitle)


    const articleSubtitle = document.createElement('p')
    articleSubtitle.textContent = 'la vie rapide early access'

    articleLeftBotton.appendChild(articleSubtitle)

    const articleRight = document.createElement('div')
    articleRight.classList.add('article-right')

    articleContainer.appendChild(articleRight)

    const articleImage = document.createElement('img')
    articleImage.src = article.image

    articleRight.appendChild(articleImage)

    previewContainer.appendChild(articleContainer)
    
}





*/


