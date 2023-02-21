function muncul(x){
    const span = x.getElementsByTagName('span')[0];
    const a = x.getElementsByTagName('a')[0];
    const h1 = x.getElementsByTagName('h1')[0];
    const p = x.getElementsByTagName('div')[0];
    const svg = x.getElementsByTagName('svg')[0];
    const open = false;

    // console.log(a.classList.contains('bg-white'))
    // console.log(span.classList.contains('rotate-90'))
    
    if(a.classList.contains('bg-white') == true){
        a.classList.remove('bg-white');
        // a.classList.add('rotate-90');
        a.classList.add('bg-gradient-to-r', 'from-cyan-500', 'to-blue-700');
    
        x.getElementsByTagName('span')[0].style.transform = "rotate(90deg)";
        span.classList.add('text-white');
    
        h1.classList.remove('text-black');
        h1.classList.add('text-white');
        
    }else{
        a.classList.add('bg-white');
        a.classList.remove('bg-gradient-to-r', 'from-cyan-500', 'to-blue-700');
    
        x.getElementsByTagName('span')[0].style.transform = "rotate(0deg)";
        span.classList.remove('text-white');
    
        h1.classList.add('text-black');
        h1.classList.remove('text-white');
    }
}

// function out(x){
//     const span = x.getElementsByTagName('span')[0];
//     const a = x.getElementsByTagName('a')[0];
//     const h1 = x.getElementsByTagName('h1')[0];
//     const p = x.getElementsByTagName('div')[0];

//     a.classList.remove('bg-white');
//     a.classList.add('bg-gradient-to-r', 'from-cyan-500', 'to-blue-800');

//     span.classList.add('rotate-90');
//     span.classList.add('text-white');

//     h1.classList.remove('text-black');
//     h1.classList.add('text-white');
    
//     p.classList.remove('hidden');
//     p.classList.add('block');
// }