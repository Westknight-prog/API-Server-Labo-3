module.exports = 
    class nouvelle extends require('./model'){
        constructor(categorie,titre,texte,imageUrl){
            super();
            this.Categorie = categorie !== undefined? categorie:"";
            this.Titre = titre !== undefined? titre:"";
            this.Texte = texte !== undefined? texte:"";
            this.ImageUrl = imageUrl !== undefined? imageUrl:"";
            this.Date = Date.now();
            
            
            this.addValidator("Categorie","string");
            this.addValidator("Titre","string");
            this.addValidator("Texte","string");
            this.addValidator("ImageUrl","url");
        }
    }