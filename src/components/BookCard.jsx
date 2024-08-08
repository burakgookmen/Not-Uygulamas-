const BookCard = ({
  book,
  handleDelete,
  handleRead,
  handleModel,
  setShowEditModal,
  setEditItem,
}) => {
  return (
    <div className="d-flex border shadow p-3 justify-content-between align-items-center">
      <div>
        <h5
          style={{
            textDecoration: book.isRead ? "line-through" : "none",
          }}
        >
          {book.title}
        </h5>
        <p>{book.date}</p>
      </div>
      <div className="btn-group">
        <button className="btn btn-danger" onClick={() => handleModel(book.id)}>
          Sil
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setEditItem(book);
            setShowEditModal(true);
          }}
        >
          Düzenle
        </button>
        <button className="btn btn-success" onClick={() => handleRead(book)}>
          {book.isRead ? "Okundu" : "Okunmamış"}
        </button>
      </div>
    </div>
  );
};
export default BookCard;
