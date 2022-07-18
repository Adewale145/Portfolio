import '../styles/portfoliolist.scss'

export const PortfolioList = (props) => {
    return (
        <li className={props.active ? 'portfolioList active' : 'portfolioList'}
        onClick={() => props.setSelected(props.id)}
        >
            {props.title}
        </li>
    )
}
