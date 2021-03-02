// Components
const HomeComponent = {
  render: () => {
    return `
      <div id="header">
      <h1> Teaching </h1>
      <img id="uvm-logo" src="../assets/images/uvm_logo.png" alt="University of Vermont logo">
      </div>
      <h5> Fall 2019 </h5>
      <ul class="current">
        <li> <a href="#/math19AtermF19"> MATH 019A: Fundamentals of Calculus I  </a> </li> 
        <li> <a href="#/math19BtermF19"> MATH 019B: Fundamentals of Calculus I  </a> </li>
      </ul>
      <h5> Previous </h5>
       <ul class="previous">
        <li> <a href="#/math19EtermS19"> MATH 019E: Fundamentals of Calculus I (Spring 2019) </a> </li>
        <li> <a href="#/math17BtermF18"> MATH 017B: Applications of Finite Math (Fall 2018) </a> </li>
      </ul>
      <img class="textbook-image" src="../assets/images/calc_textbook.jpg" alt="math textbook">
      <img class="textbook-image" src="../assets/images/math17_textbook.jpg" alt="math textbook">
    `;
  }
} 

const math19F19A = {
  render: () => {
    return renderMath19F19("A");
  }
} 

const math19F19B = {
  render: () => {
    return renderMath19F19("B");
  }
} 

const math19S19 = {
  render: () => {
    return renderMath19S19();
  }
} 

const math17F18 = {
  render: () => {
    return renderMath17F18();
  }
}

const ErrorComponent = {
  render: () => {
    return `
      <section>
        <h1>There was an error finding this page.</h1>
      </section>
    `;
  }
}

// Routes 
const routes = [
  { path: '/', component: HomeComponent, },
  { path: '/math19AtermF19', component: math19F19A, },
  { path: '/math19BtermF19', component: math19F19B, },
  { path: '/math19EtermS19', component: math19S19, },
  { path: '/math17BtermF18', component: math17F18, },
];

const parseLocation = () => location.hash.slice(1)|| '/';
const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;
const router = () => {
  // Find the component based on the current path
  const path = parseLocation();
  // If there's no matching route, get the "Error" component
  const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
  // Render the component in the "app" placeholder
  document.getElementById('app').innerHTML = component.render();
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);