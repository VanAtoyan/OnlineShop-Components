import { BasketList } from "./basket-list";
export const ProductList = ({ data, moveToCart }) => {
    return (
      <>
        <header className="bg-gray-800 text-white py-4">
          <h1 className="text-center text-3xl font-bold">Online Shop</h1>
        </header>
  
        <div className="px-4 py-6">
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((item) => (
              <div
                key={item.id}
                className="border border-gray-700 rounded-lg shadow-md p-4 flex flex-col items-center bg-gray-800 hover:shadow-lg"
              >
                <div className="mb-4">
                  <img
                    src={item.photo}
                    alt={item.title}
                    className="h-32 w-32 object-cover rounded"
                  />
                </div>
                <p className="font-medium text-lg mb-2 text-white">{item.title}</p>
                <p className="text-gray-400 mb-2">${item.price}</p>
                <small className="text-gray-500 mb-4">{item.category}</small>
                <button
                  onClick={() => moveToCart(item)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add to Basket
                </button>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  