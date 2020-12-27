import { FaMedal, FaCalendarAlt, FaStarOfLife } from "react-icons/fa";

export const sublinks = [
    {
        page: 'festivals',
        links: [
            {label: 'all', icon: <FaStarOfLife />, url: '/festivals/most-popular'},
            {label: 'most popular', icon: <FaMedal />, url: '/festivals/most-popular'},
            {label: 'calendar', icon: <FaCalendarAlt />, url: '/festivals/most-popular'},
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