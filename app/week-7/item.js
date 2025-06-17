export default function Item({ name, quantity, category }) {
    return (
        <li className="border rounded p-2 shadow-sm">
            <p className="font-semibold">{name}</p>
            <p>Quantity: {quantity}</p>
            <p className="capitalize">Category: {category}</p>
        </li>
    );
}
