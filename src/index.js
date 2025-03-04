import './style.css';
import DisplayDAta from './modules/displaycountry.js';

const data = new DisplayDAta();

const keyEnter = () => {
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('keypress', (e) => {
    if (e.target.key === 'Enter') {
      data.fetchData();
      searchInput.value = '';
    }
  });
};

keyEnter();
