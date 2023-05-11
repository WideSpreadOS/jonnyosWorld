
const 
    express = require('express'),
    ejs = require('ejs'),
    app = express(),
    port = process.env.PORT || 5000,
    bodyParser = require('body-parser'),
    expressLayouts = require('express-ejs-layouts'),
    anime = require('animejs')



// Middleware
app.use(bodyParser.json());

// Static
app.use(express.static('public'));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
    res.render('home', {pageTitle: 'Home'})
})

app.get('/landing', (req, res) => {
    res.render('landing', {pageTitle: 'Landing'})
})

app.get('/portfolio', (req, res) => {
    res.render('portfolio', {pageTitle: 'Portfolio'})
})
app.get('/single-project/:name', (req, res) => {
    const name = req.params.name
    // const firstLetter = name[0].toUpperCase()
    // const upperName = firstLetter + name.slice(1)
    let title
    if (name === 'ar-vr') {
        title = 'AR/VR'
        photos = [
            '/images/ar-vr/1.gif',
        ]
    }
    if (name === 'ecommerce') {
        title = 'e-Commerce'
        photos = [
            // '/images/e-commerce/kicks101/1.png',
            // '/images/e-commerce/kicks101/2.png',
            // '/images/e-commerce/kicks101/3.png',
            // '/images/e-commerce/kicks101/4.png',
            // '/images/e-commerce/kicks101/5.png',
            // '/images/e-commerce/kicks101/6.png',
            // '/images/e-commerce/kicks101/7.png',
            // '/images/e-commerce/kicks101/8.png',
            // '/images/e-commerce/kicks101/9.png',
            // '/images/e-commerce/kicks101/10.png',
            // '/images/e-commerce/kicks101/11.png',
            // '/images/e-commerce/kicks101/12.png',
            // '/images/e-commerce/kicks101/13.png',
            // '/images/e-commerce/kicks101/14.png',
            // '/images/e-commerce/kicks101/15.png',
            '/images/e-commerce/kicks101/cell/p/1.png',
            '/images/e-commerce/kicks101/cell/p/2.png',
            '/images/e-commerce/kicks101/cell/p/3.png',
            '/images/e-commerce/kicks101/cell/p/4.png',
            '/images/e-commerce/kicks101/cell/p/5.png',
            '/images/e-commerce/kicks101/cell/p/6.png',
            '/images/e-commerce/kicks101/cell/p/7.png',
            '/images/e-commerce/kicks101/cell/p/8.png',
            '/images/e-commerce/kicks101/cell/p/9.png',
            '/images/e-commerce/kicks101/cell/p/10.png',
            '/images/e-commerce/kicks101/cell/p/11.png',
            '/images/e-commerce/kicks101/cell/l/1.png',
            '/images/e-commerce/kicks101/tablet/p/1.png',
            '/images/e-commerce/kicks101/tablet/p/2.png',
            '/images/e-commerce/kicks101/tablet/p/3.png',
            '/images/e-commerce/kicks101/tablet/p/4.png',
            '/images/e-commerce/kicks101/tablet/p/5.png',
            '/images/e-commerce/kicks101/tablet/l/1.png'
        ]
    }
    if (name === 'widespread') {
        title = 'WideSpread'
        photos = [
            '/images/spreadshield_contacts-list.jpg',
            '/images/spreadshield_2d-map+contacts-list.jpg',
            '/images/spreadshield_touch-interface_2.jpg'
        ]
    }


    res.render('single-project', {pageTitle: 'Portfolio', photos, subPageTitle: title})
})

app.get('/contact', (req, res) => {
    res.render('contact', {pageTitle: 'Contact'})
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})