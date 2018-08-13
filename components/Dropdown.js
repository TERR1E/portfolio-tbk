// class Dropdown {
//   constructor(element) {
//     this.element = element;
//     this.nav = this.element.querySelector('.nav-dd');
//     this.content = this.element.querySelector('.nav-dropdown');
//     this.nav.addEventListener('mouseover', () => { this.toggleContent() });
//     // this.nav.addEventListener('mouseout', () => { this.toggleContent() });
//     this.content.addEventListener('mouseout', () => { this.toggleContent() });

//   }

//   toggleContent() {
//     this.content.classList.toggle('dd-hidden');
//   }
// }

// let dropdowns = document.querySelectorAll('.dropdown');
// dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));