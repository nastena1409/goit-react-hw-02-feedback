import PropTypes from 'prop-types';
import { StatisticList, StatisticItem } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>    
            <StatisticList>
                <StatisticItem>Good: {good}</StatisticItem>
                <StatisticItem>Neutral: {neutral}</StatisticItem>
                <StatisticItem>Bad: {bad}</StatisticItem>
                <StatisticItem>Total: {total}</StatisticItem>
                <StatisticItem>Positive feedback: {total>0 ? positivePercentage : 0}%</StatisticItem>
            </StatisticList>
        </>
    
    )
}