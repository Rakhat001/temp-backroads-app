import imgTour1 from './images/tour-1.jpeg'
import imgTour2 from './images/tour-2.jpeg'
import imgTour3 from './images/tour-3.jpeg'
import imgTour4 from './images/tour-4.jpeg'



export const pageLinks = [
    { id: 1, href: '#home', text: 'home' },
    { id: 2, href: '#about', text: 'about' },
    { id: 3, href: '#services', text: 'services' },
    { id: 4, href: '#tours', text: 'tours' }
]

export const social_Media_Links = [
    { id: 1, href: 'https://www.twitter.com', className: "fab fa-facebook" },
    { id: 2, href: 'https://www.twitter.com', className: "fab fa-twitter" },
    { id: 3, href: 'https://www.twitter.com', className: "fab fa-squarespace" }
]

export const toursArticles = [
    {
        id: 1, imgSource: imgTour1, 
        tourDate: 'august 26th, 2020', 
        tourTitle: 'Tibet Adventure', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        tourCityName: 'china',
        tourDuration: '6 days',
        tourPrice: 'from $2100'
    },
    {
        id: 2, imgSource: imgTour2, 
        tourDate: 'october 1th, 2020', 
        tourTitle: 'best of java', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        tourCityName: 'indonesia',
        tourDuration: '11 days',
        tourPrice: 'from $1400'
    },
    {
        id: 3, imgSource: imgTour3, 
        tourDate: 'september 15th, 2020', 
        tourTitle: 'explore hong kong', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        tourCityName: 'hong kong',
        tourDuration: '8 days',
        tourPrice: 'from $5000'
    },
    {
        id: 4, imgSource: imgTour4, 
        tourDate: 'december 5th, 2019', 
        tourTitle: 'kenya highlights', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        tourCityName: 'kenya',
        tourDuration: '20 days',
        tourPrice: 'from $3300'
    }
]