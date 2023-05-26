import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';

const data = [
  {
    subject: 'Assignment 1',
    A: 60,
    fullMark: 60,
  },
  {
    subject: 'Assignment 2',
    A: 60,
    fullMark: 60,
  },
  {
    subject: 'Assignment 3',
    A: 60,
    fullMark: 60,
  },
  {
    subject: 'Assignment 4',
    A: 49,
    fullMark: 60,
  },
  {
    subject: 'Assignment 5',
    A: 60,
    fullMark: 60,
  },
  {
    subject: 'Assignment 6',
    A: 60,
    fullMark: 60,
  },
  {
    subject: 'Assignment 7',
    A: 60,
    fullMark: 60,
  },
  {
    subject: 'Assignment 8',
    A: 60,
    fullMark: 60,
  },
];

const Example = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 60]} />
        <Radar name="AssignMent Mark" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Example;
