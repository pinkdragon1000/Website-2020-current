// Shared utility functions for array manipulation

/**
 * Groups an array into chunks of a specified size
 * @param {Array} array - The array to group
 * @param {number} size - The size of each group
 * @returns {Array} Array of grouped arrays
 */
export function groupArrayBySize(array, size = 2) {
  const result = [];
  const arrayCopy = [...array];
  while (arrayCopy.length > 0) {
    result.push(arrayCopy.splice(0, size));
  }
  return result;
}

/**
 * Groups consecutive array items that share the same property value
 * @param {Array} array - The array to group
 * @param {string} propertyKey - The property to group by
 * @returns {Array} Array of grouped arrays
 */
export function groupByConsecutiveProperty(array, propertyKey) {
  const grouped = [];
  let currentGroup = [];
  
  array.forEach((item, i) => {
    if (i === 0) {
      currentGroup.push(item);
    } else if (item[propertyKey] === array[i - 1][propertyKey]) {
      currentGroup.push(item);
    } else {
      grouped.push([...currentGroup]);
      currentGroup = [item];
    }
  });
  
  if (currentGroup.length > 0) {
    grouped.push(currentGroup);
  }
  
  return grouped;
}
