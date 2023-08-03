export class Router {
    principal = document.querySelector('.principal')
    secondImg = document.querySelector('.bg2-img')
    thirdImg = document.querySelector('.bg3-img')
    body = document.querySelector('body')
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }
    

    router(event) {
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "",event.target.href)
        this.handle()
    }
    
    handle () {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]
        fetch(route).then(data => data.text()).then(html => this.principal.innerHTML = html)  
    
        if (route === '/pages/universe.html') {
            this.body.classList.add('bg2-img')
            this.body.classList.remove('bg3-img')
            
        }  
        else if (route === '/pages/exploration.html') {
            this.body.classList.add('bg3-img')
            this.body.classList.remove('bg2-img')
        } 

        else {
            this.body.classList.remove('bg3-img')
            this.body.classList.remove('bg2-img')
        } 
    }
    
}
