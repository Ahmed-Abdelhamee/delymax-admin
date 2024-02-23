
import { JComment } from './comment';

/* eslint-disable no-shadow */
export enum OrderType {
  Shop = 'Shop',
  Shipping = 'Shipping',
  Pharmacy = 'Pharmacy'
}

export enum IssueStatus {
  NEW= '0',
  PREPARE = '1',
  STORED = '2',
  DISPATCHING = '3',
  DONE = '4'
}

export const IssueStatusDisplay = {
  [IssueStatus.NEW]: 'New Order',
  [IssueStatus.PREPARE]: 'Preparing',
  [IssueStatus.STORED]: 'Stored',
  [IssueStatus.DISPATCHING]: 'Dispatching',
  [IssueStatus.DONE]: 'Done'
};

export enum IssuePriority {
  LOWEST = 'Lowest',
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  HIGHEST = 'Highest'
}

export const IssuePriorityColors = {
  [IssuePriority.HIGHEST]: '#CD1317',
  [IssuePriority.HIGH]: '#E9494A',
  [IssuePriority.MEDIUM]: '#E97F33',
  [IssuePriority.LOW]: '#2D8738',
  [IssuePriority.LOWEST]: '#57A55A'
};

/* eslint-enable no-shadow */
