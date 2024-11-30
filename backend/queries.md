
## Implementation backend 2

1. `SELECT * FROM employees`

2. `SELECT COUNT(*) AS total_managers
    FROM employees
    WHERE job_title = 'Manager';`

3. `SELECT name, salary
    FROM employees
    WHERE department IN ('Sales', 'Marketing');`

4. `SELECT AVG(salary) AS average_salary
    FROM employees
    WHERE joined_date >= DATE_SUB(CURDATE(), INTERVAL 5 YEAR);`

5. `SELECT e.name, SUM(s.sales) AS total_sales
    FROM employees e
    JOIN sales_data s ON e.employee_id = s.employee_id
    GROUP BY e.employee_id
    ORDER BY total_sales DESC
    LIMIT 5;`

6. `SELECT e.name, e.salary, d.avg_salary
    FROM employees e
    JOIN (
        SELECT department, AVG(salary) AS avg_salary
        FROM employees
        GROUP BY department
        HAVING avg_salary > (SELECT AVG(salary) FROM employees)
    ) d ON e.department = d.department;
    `

7. `SELECT e.name, SUM(s.sales) AS total_sales,
        RANK() OVER (ORDER BY SUM(s.sales) DESC) AS ranking
    FROM employees e
    JOIN sales_data s ON e.employee_id = s.employee_id
    GROUP BY e.employee_id
    ORDER BY ranking;
    `
