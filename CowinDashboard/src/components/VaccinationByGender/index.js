// Write your code here
import {ResponsiveContainer, PieChart, Legend, Pie, Cell} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props
  return (
    <div className="chart-container">
      <h1 className="chart-label">Vaccination by gender</h1>
      <PieChart width={1000} height={300}>
        <Legend iconType="circle" />
        <Pie
          data={vaccinationByGender}
          dataKey="count"
          nameKey="gender"
          cx="50%"
          cy="50%"
          startAngle={180}
          endAngle={0}
          innerRadius={50}
          outerRadius={100}
        >
          <Cell fill="#f54394" />
          <Cell fill="#5a8dee" />
          <Cell fill="#2cc6c6" />
        </Pie>
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
