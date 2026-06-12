# Beginner Explanatory Guide: FINSERV-4136: Build dashboard KPI calculator service

> **Task Type**: Service Task  
> **Domain/Focus**: Backend Development, JavaScript

---

## 1. The Goal (In-Depth Beginner Explanation)

### The Core Problem
In the context of our application, we are tasked with building a service that calculates Key Performance Indicators (KPIs) for a dashboard. Currently, the application lacks a systematic way to compute essential business metrics such as revenue growth rate, customer churn, average order value, and conversion rates. Without these metrics, stakeholders cannot effectively assess the business's performance or make informed decisions. 

The absence of a KPI calculator means that users are left with raw data without any meaningful insights. This is problematic because businesses rely on KPIs to gauge their health and growth. For instance, if a company does not know its customer churn rate, it cannot identify how many customers it is losing over time, which is critical for retention strategies. Therefore, implementing the `KPICalculator` is crucial for transforming raw metrics into actionable insights, ultimately enhancing the decision-making process for the business.

### Jargon Buster (Key Terms Explained)
* **KPI (Key Performance Indicator)**: A measurable value that demonstrates how effectively a company is achieving key business objectives. For example, if a company aims to increase sales, its KPI might be the total revenue generated in a specific period.
* **Churn Rate**: The percentage of customers who stop using a product during a certain timeframe. For example, if a company starts the month with 100 customers and ends with 90, the churn rate is 10%.
* **Growth Rate**: A measure of the increase in a company's revenue or other metrics over a specific period, expressed as a percentage. For instance, if a company’s revenue was $100,000 last year and is $120,000 this year, the growth rate is 20%.
* **Average Order Value (AOV)**: The average amount of money each customer spends per transaction. If a store has total sales of $1,000 from 50 orders, the AOV is $20.

### Expected Outcome
After implementing the `KPICalculator`, the system should be able to compute and return various KPIs in a structured format. 

**Before**: The application only processes raw data without any calculations or insights, leaving users without critical business metrics.

**After**: The application will provide calculated KPIs such as revenue growth rate, customer churn, average order value, and conversion rates, allowing users to visualize and understand their business performance effectively.

---

## 2. Related Coding Concepts & Syntax (50% Theory, 50% Practice)

### Concept 1: Functions in JavaScript
#### 📘 Theoretical Overview (50%)
* **Why it exists**: Functions are fundamental building blocks in JavaScript that allow us to encapsulate code for reuse. They help in organizing code into manageable sections, making it easier to read, maintain, and debug. Without functions, we would have to write repetitive code, leading to errors and inefficiencies.
* **Key Mechanisms**: Functions can take inputs (parameters), perform operations, and return outputs. They can be defined using function declarations or expressions. Understanding how to define and invoke functions is crucial for implementing the KPI calculations.

#### 💻 Syntax & Practical Examples (50%)
* **Language Syntax**:
  ```javascript
  function functionName(parameter1, parameter2) {
      // Code to execute
      return result; // Optional return statement
  }
  ```
* **Real-World Application**:
  ```javascript
  function calculateGrowthRate(previousRevenue, currentRevenue) {
      if (previousRevenue === 0) return 0; // Avoid division by zero
      return ((currentRevenue - previousRevenue) / previousRevenue) * 100;
  }
  
  // Example usage
  const growthRate = calculateGrowthRate(100000, 120000);
  console.log(growthRate); // Outputs: 20
  ```

---

## 3. Step-by-Step Logic & Walkthrough

1. **Step 1: Locate and Analyze the Target File**
   * Navigate to the `kpiCalculator.js` file in the `src` folder. This file will contain the core logic for calculating KPIs.
   * Inspect the class definition and the `process` method, as this is where we will implement our KPI calculations.

2. **Step 2: Input Verification & Validation**
   * Before performing calculations, ensure that the input data is valid. Check for null or undefined values and handle them appropriately to avoid runtime errors.

3. **Step 3: Core Implementation / Modification**
   * Implement the methods `calculateGrowthRate()`, `calculateChurnRate()`, and `calculateAOV()` within the `KpiCalculator` class. Each method should take the necessary parameters and return the calculated KPI.
   * For example, `calculateGrowthRate(previousRevenue, currentRevenue)` should compute the growth rate based on the provided revenues.

4. **Step 4: Output Verification & Testing**
   * After implementing the calculations, run the existing tests in `kpiCalculator.test.js` to ensure that all unit tests pass. This will verify that your implementation is correct and that the system behaves as expected.

---

## 4. Detailed Walkthrough of Test Cases

### Test Case 1: Standard / Success Case
* **Description**: This test checks if the `process` method can handle valid input data.
* **Inputs**:
  ```json
  {
      "previousRevenue": 100000,
      "currentRevenue": 120000
  }
  ```
* **Step-by-Step Execution Trace**:
  1. The `process` method receives the input data containing previous and current revenue.
  2. The method checks if the input is valid (not null).
  3. The `calculateGrowthRate` method is called with the provided revenues.
  4. The growth rate is calculated and returned.
* **Expected Output**: The expected output is a numerical value representing the growth rate, which should be 20%.

### Test Case 2: Edge Case / Validation Fail
* **Description**: This test checks how the system handles a null input.
* **Inputs**:
  ```json
  null
  ```
* **Step-by-Step Execution Trace**:
  1. The `process` method receives a null input.
  2. The method immediately checks for null and returns null without further processing.
  3. No calculations are performed, and the execution is halted early.
* **Expected Output**: The expected output is null, indicating that the input was invalid and no processing occurred.