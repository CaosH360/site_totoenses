class mobileNavbar{
    constructor(mobileMenu,navList,navLinks){
        this.mobileMenu = document.querySelector (mobileMenu);
        this.navList = document.querySelector (navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);


    }

    handleclick(){
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
    }

    addclickevent(){
        this.mobileMenu.eddEventlistener("click", this.handleClick);
    }

    init(){
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new mobileNavbar (
    ".mobile-menu",
    ".nav-list",
    ".nav-list-li"
);
