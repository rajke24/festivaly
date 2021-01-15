import { FaMedal, FaCalendarAlt, FaStarOfLife } from "react-icons/fa";

export const sublinks = [
    {
        page: 'festivals',
        links: [
            {label: 'all', icon: <FaStarOfLife />, url: '/festivals/all'},
            {label: 'most popular', icon: <FaMedal />, url: '/festivals/top'},
            {label: 'calendar', icon: <FaCalendarAlt />, url: '/festivals/calendar'},
        ]
    },
    {
        page: 'concerts',
        links: [
            {label: 'most popular', icon: <FaMedal />, url: '/festivals/most-popular'},
            {label: 'most popular', icon: <FaMedal />, url: '/festivals/most-popular'},
            {label: 'most popular', icon: <FaMedal />, url: '/festivals/most-popular'},
            {label: 'most popular', icon: <FaMedal />, url: '/festivals/most-popular'},
        ]
    },
    {
        page: 'artists',
        links: [
            {label: 'most popular', icon: <FaMedal />, url: '/festivals/most-popular'},
            {label: 'most popular', icon: <FaMedal />, url: '/festivals/most-popular'},
            {label: 'most popular', icon: <FaMedal />, url: '/festivals/most-popular'},
        ]
    },
]