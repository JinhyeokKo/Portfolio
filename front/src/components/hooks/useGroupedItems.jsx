export default function useGroupedItems(items, itemsPerPage) {
    const grouped = [];

    for (let i = 0; i < items.length; i += itemsPerPage) {
        grouped.push(items.slice(i, i + itemsPerPage));
    }

    return grouped;
}