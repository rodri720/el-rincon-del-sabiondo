const validate = (book) => {
  let errors = {};

  if (!book.title) {
    errors.title = "El título es requerido";
  }
   if (book.title.length < 30) {
     errors.title = "El título no debe tener menos de 3 caracteres";
   }
  if (book.title.length > 30 ) {
    errors.title = "El título no debe exceder los 30 caracteres";
  }

  if (!book.description) {
    errors.description = "La descripción es requerida";
  }

  if (!book.datePublication) {
    errors.datePublication = "La fecha de publicación es requerida";
  }

  if (!book.categories) {
    errors.categories = "Las categorías son requeridas";
  }

  if (!book.price) {
    errors.price = "El precio es requerido";
  }
  return errors;

};

export default validate;