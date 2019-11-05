const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

function jsonInject (indexHTML, jsonKey, includes){
  let Text = document.querySelectorAll(indexHTML)
  Text.forEach(function(element, index) {
     element.textContent = siteContent[jsonKey][`${Object.keys(siteContent[jsonKey]).filter(item => item.includes(includes))[index]}`]
     console.log(Text)
})}

jsonInject('nav a','nav','nav')
jsonInject('.main-content h4','main-content','h4')
jsonInject('.cta button','cta','button')
jsonInject('.cta h1','cta','h1');
jsonInject('.main-content p','main-content','content')
jsonInject('.contact h4','contact','h4')
jsonInject('.contact p', 'contact', 'e')
jsonInject('footer p','footer','c')

function imgFill(source, sourceChild ,target){
  let imgTag = document.getElementById(target);
  imgTag.setAttribute('src', siteContent[source][sourceChild])
}
imgFill('nav','img-src','logo-img')
imgFill('cta','img-src','cta-img')
imgFill('main-content','middle-img-src','middle-img')

let linkTag = document.querySelectorAll("a")
linkTag.forEach(element => {
  element.setAttribute('style','color:green;')
});
let theNav = document.querySelector("nav")
theNav.appendChild()