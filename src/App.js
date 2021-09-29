import './App.css';

const employees = [
  {name: 'John', officePercentage: 0.5, homePercentage: 0.5, missedReservationsPercentage: 0.06},
  {name: 'Jane', officePercentage: 0.7, homePercentage: 0.3, missedReservationsPercentage: 0.02},
  {name: 'Joe', officePercentage: 0.4, homePercentage: 0.6, missedReservationsPercentage: 0.03},
  {name: 'Jack', officePercentage: 0.8, homePercentage: 0.2, missedReservationsPercentage: 0.01},
  {name: 'Jill', officePercentage: 0.6, homePercentage: 0.4, missedReservationsPercentage: 0.04},
  {name: 'Juan', officePercentage: 0.2, homePercentage: 0.8, missedReservationsPercentage: 0.05},
  {name: 'Jenny', officePercentage: 0.3, homePercentage: 0.7, missedReservationsPercentage: 0.06},
];

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 5
      }}
  />
);

const EmployeeCard = ({ employee }) => (
  <div className="employee-card">
    <div className="employee-card-name">
      {employee.name}
    </div>
    <div className="employee-card-percentages">
      <div className="employee-card-percentage">
        <div className="employee-card-percentage-label">
          Office
        </div>
        <div className="employee-card-percentage-value">
          {employee.officePercentage}
        </div>
      </div>
      <div className="employee-card-percentage">
        <div className="employee-card-percentage-label">
          Home
        </div>
        <div className="employee-card-percentage-value">
          {employee.homePercentage}
        </div>
      </div>
      <div className="employee-card-percentage">
        <div className="employee-card-percentage-label">
          Missed Reservations
        </div>
        <div className="employee-card-percentage-value">
          {employee.missedReservationsPercentage}
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div id="page-component">
    <main>
      <div id="page-container">
        <h1>Employees</h1>
        <br />
        <ColoredLine color="black" />
        {employees?.map((employee) => {
          return (
            <>
            <br />
            <EmployeeCard employee={employee} />
            <br />
            <ColoredLine color="black" />
            </>
            
          )
        })}
      </div>
    </main>
  </div>
  );
}

export default App;
