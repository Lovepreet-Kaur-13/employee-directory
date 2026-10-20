import express from "express";
import employees, {
  getEmployeeById,
  getEmployees,
  getRandomEmployee,
} from "#db/employees";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello employess!");
});

app.get("/employees", (req, res) => {
  const employees = getEmployees();
  res.send(employees);
});

app.get("/employees/random", (req, res) => {
  const randomEmployee = getRandomEmployee();
  res.send(randomEmployee);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const employeeExists = getEmployeeById(+id);
  if (!employeeExists) {
    return res.status(400).send("employee not exist with this id");
  }
  res.send(employeeExists);
});

export default app;
