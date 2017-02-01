/* Task Description */
/* 
	*	Create a module for working with books
		*	The module must provide the following functionalities:
			*	Add a new book to category
				*	Each book has unique title, author and ISBN
				*	It must return the newly created book with assigned ID
				*	If the category is missing, it must be automatically created
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories
				*	Categories are sorted by ID
		*	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
			*	When adding a book/category, the ID is generated automatically
		*	Add validation everywhere, where possible
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
			*	Author is any non-empty string
			*	Unique params are Book title and Book ISBN
			*	Book ISBN is an unique code that contains either 10 or 13 digits
			*	If something is not valid - throw Error
*/
function solve() {
	var library = (function () {
		function validateTitleAndCategory(name) {
			let regex = /[A-za-z0-9/\D]+/g;
			if (!name.match(regex)) {
				throw new Error('Enter correct name');
			}
		}

		function validateAuthor(name) {
			if (name === '') {
				throw new Error('Enter name');
			}
		}

		function validateISBN(isbn) {
			if (!/\d{10,13}/.test(isbn)) {
				throw new Error('Enter correct isbn');
			}
		}

		var books = [];
		var categories = [];

		function listBooks() {
			let book = arguments[0];
			if (!book) {
				return books;
			}
			if (book.category) {
				return books.filter(x => x.category === book.category);
			}
			if (book.author) {
				return books.filter(x => x.author === book.author);
			}
			books.sort((a, b) => a.ID - b.ID);
			return books;
		}

		function addBook(book) {
			book.ID = books.length + 1;

			books.forEach(b => {
				if (b.title === book.title || b.isbn === book.isbn) {
					throw new Error('Book title and ISBN must be unique!');
				}
			});

			if (book.title.length < 2 || book.title.length > 100) {
				throw new Error('Enter correct name');
			}
			if (book.title === 'undefined' || book.author === 'undefined' || book.category === 'undefined' || book.isbn === 'undefined') {
				throw new Error('Missing information');
			}

			validateAuthor(book.author);
			validateISBN(book.isbn);
			validateTitleAndCategory(book.title);
			validateTitleAndCategory(book.category);

			if (categories.indexOf(book.category) < 0) {
				categories.push(book.category);
			}

			books.push(book);

			return book;
		}

		function listCategories() {
			console.log(categories);
			return categories;
		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	} ());
	return library;
}
module.exports = solve;
