export default function Item({ itemObj }) {
  let { name, quantity, category } = itemObj;

  return (
    <li className="bg-gray-100 p-4 m-2 border rounded">
      <h3 className="text-lg font-bold text-black">{name}</h3>
      <p className="text-black">Quantity: {quantity}</p>
      <p className="text-black">Category: {category}</p>
    </li>
  );
}
