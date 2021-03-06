import { Cart } from './cart';
import { Book } from './book';

describe('Cart', () => {
  it('should add book', () => {
    const cart = new Cart();

    const xp = new Book('eXtreme Programming Explained', 'Kent Beck');

    const leanStartup = new Book('Lean Startup', 'Eric Ries');

    cart.addBook(xp);

    cart.addBook(leanStartup);

    const bookList = cart.getBookList();

    expect(bookList).toEqual([xp, leanStartup]);
    // create cart
    // add book
    // add another book
    // get book list
    // check contain both books in same order
  });

  it.todo('should remove book');

  it.todo('should get total price');
});
