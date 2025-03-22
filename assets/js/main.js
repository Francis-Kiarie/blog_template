// Grab elements
const selectElement = selector =>{
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Please check your selector ${selector}`);
};
//Nav styles on scrolla
const scrolHeader = () =>{
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15){
        headerElement.classList.add('activated');
    }else{
        headerElement.classList.remove('activated');
    }
}
window.addEventListener('scroll', scrolHeader);
// Open menu & search pop-up

// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper