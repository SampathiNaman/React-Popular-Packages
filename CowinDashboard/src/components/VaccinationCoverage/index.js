// Write your code here
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  Bar,
} from 'recharts'

import './index.css'

const capitalizeLegend = legend =>
  legend[0].toUpperCase().concat(legend.slice(1))

const formatNumber = number => (number > 1000 ? `${number / 1000}K` : number)

const VaccinationCoverage = props => {
  const {last7DaysVaccination} = props
  return (
    <div className="chart-container">
      <h1 className="chart-label">Vaccination Coverage</h1>
      <BarChart data={last7DaysVaccination} width={1000} height={300}>
        <XAxis dataKey="vaccineDate" tick={{stroke: '#6c757d'}} />
        <YAxis tick={{stroke: '#6c757d'}} tickFormatter={formatNumber} />
        <Legend formatter={capitalizeLegend} />
        <Bar
          dataKey="dose1"
          name="dose1"
          fill="#5a8dee"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="dose2"
          name="dose2"
          fill="#f54394"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
