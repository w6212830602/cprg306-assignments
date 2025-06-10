"use client";
import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const sortedItems = [...itemsData];

    if (sortBy === "name" || sortBy === "category") {
        sortedItems.sort((a, b) => {
            let valueA = a[sortBy].toUpperCase();
            let valueB = b[sortBy].toUpperCase();
            return valueA.localeCompare(valueB);
        });

        return (
            <section className="p-4">
                <div className="mb-4">
                    <label className="mr-2 font-semibold">Sort By:</label>
                    <select
                        value={sortBy}
                        onChange={handleSortChange}
                        className="border px-2 py-1 rounded"
                    >
                        <option value="name">Name</option>
                        <option value="category">Category</option>
                        <option value="group">Group by Category</option>
                    </select>
                </div>

                <ul className="space-y-2">
                    {sortedItems.map((item) => (
                        <Item
                            key={item.id}
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                        />
                    ))}
                </ul>
            </section>
        );
    }

    const grouped = sortedItems.reduce((groups, item) => {
        if (!groups[item.category]) {
            groups[item.category] = [];
        }
        groups[item.category].push(item);
        return groups;
    }, {});

    const sortedCategories = Object.keys(grouped).sort();

    return (
        <section className="p-4">
            <div className="mb-4">
                <label className="mr-2 font-semibold">Sort By:</label>
                <select
                    value={sortBy}
                    onChange={handleSortChange}
                    className="border px-2 py-1 rounded"
                >
                    <option value="name">Name</option>
                    <option value="category">Category</option>
                    <option value="group">Group by Category</option>
                </select>
            </div>

            {sortedCategories.map((category) => (
                <div key={category} className="mb-6">
                    <h2 className="text-xl font-semibold capitalize mb-2">
                        {category}
                    </h2>
                    <ul className="space-y-2">
                        {grouped[category]
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((item) => (
                                <Item
                                    key={item.id}
                                    name={item.name}
                                    quantity={item.quantity}
                                    category={item.category}
                                />
                            ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
