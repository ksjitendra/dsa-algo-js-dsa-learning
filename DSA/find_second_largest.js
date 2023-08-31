function findSecondLargestSalary(salaryObject) {
    // Extract the unique salary values from the object
    const salaries = Object.values(salaryObject);
  
    // Remove duplicate salaries and sort in descending order
    const uniqueSalaries = Array.from(new Set(salaries)).sort((a, b) => b - a);
  
    // Check if there is a second largest salary
    if (uniqueSalaries.length >= 2) {
      return uniqueSalaries[1]; // Return the second largest salary
    } else {
      return null; // No second largest salary found
    }
  }
  
  // Example usage
  const salaries = { salary: 2000, salary: 3000, salary: 5000, salary: 50000 };
  const secondLargestSalary = findSecondLargestSalary(salaries);
  console.log(secondLargestSalary); // Output: 5000

  
  function findSecondLargestSalary(salaryObject) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (let key in salaryObject) {
      const salary = salaryObject[key];
  
      if (salary > largest) {
        secondLargest = largest;
        largest = salary;
      } else if (salary > secondLargest && salary < largest) {
        secondLargest = salary;
      }
    }
  
    return secondLargest !== -Infinity ? secondLargest : null;
  }
  
  // Example usage
  const salaries = { salary1: 2000, salary2: 3000, salary3: 5000, salary4: 50000 };
  const secondLargestSalary = findSecondLargestSalary(salaries);
  console.log(secondLargestSalary); // Output: 5000
  