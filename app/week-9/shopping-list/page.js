'use client';

import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(itemName) {
    const cleanedName = itemName
      .split(',')[0]
      .replace(/[^\p{L}\s]/gu, '')
      .trim()
      .toLowerCase();
    setSelectedItemName(cleanedName);
  }

  return (
    <main className="p-4 flex flex-col md:flex-row gap-4">
      <div className="md:w-1/2">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="md:w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
