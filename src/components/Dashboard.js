import React from 'react';
import DistributorCard from './DistributorCard';
import { distributors } from '../services/mockData';

const Dashboard = () => (
  <div>
    {distributors.map((distributor, index) => (
      <DistributorCard key={index} distributor={distributor} />
    ))}
  </div>
);

export default Dashboard;
