// Write your code here
import {ResponsiveContainer, PieChart, Legend, Pie, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  return (
    <div className="chart-container">
      <h1 className="chart-label">Vaccination by age</h1>
      <PieChart width={1000} height={300}>
        <Legend iconType="circle" />
        <Pie
          data={vaccinationByAge}
          dataKey="count"
          nameKey="age"
          cx="50%"
          cy="50%"
          startAngle={0}
          endAngle={360}
          outerRadius={100}
        >
          <Cell fill="#2d87bb" />
          <Cell fill="#a3df9f" />
          <Cell fill="#64c2a6" />
        </Pie>
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
