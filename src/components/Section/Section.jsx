import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )   
}

Section.prototype = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}