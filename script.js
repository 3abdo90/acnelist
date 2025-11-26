// Acnelist Script
// Load products from JSON
async function loadProducts() {
  const container = document.getElementById('products-container');
  if (!container) return;
  
  try {
    const response = await fetch('./data/products.json');
    const products = await response.json();
    
    products.forEach(product => {
      const card = `
        <div class="bg-white p-6 rounded-lg shadow-md product-card hover:shadow-lg transition">
          <h3 class="text-xl font-bold mb-2">${product.name}</h3>
          <p class="text-gray-600 mb-4">${product.desc}</p>
          <p class="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>
          <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      `;
      container.innerHTML += card;
    });
  } catch (error) {
    console.error('Error loading products:', error);
    container.innerHTML = '<p class="text-red-600">Error loading products</p>';
  }
}

// Load blog posts from JSON
async function loadBlog() {
  const container = document.getElementById('blog-container');
  if (!container) return;
  
  try {
    const response = await fetch('./data/blog.json');
    const posts = await response.json();
    
    posts.forEach(post => {
      const postEl = `
        <div class="bg-white p-6 rounded-lg shadow-md blog-post hover:shadow-lg transition">
          <h3 class="text-2xl font-bold mb-2">${post.title}</h3>
          <p class="text-gray-600 mb-4">${post.content}</p>
          <a href="#" class="text-blue-600 hover:text-blue-800 font-semibold">Read More →</a>
        </div>
      `;
      container.innerHTML += postEl;
    });
  } catch (error) {
    console.error('Error loading blog:', error);
    container.innerHTML = '<p class="text-red-600">Error loading blog posts</p>';
  }
}

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadBlog();
  });
} else {
  loadProducts();
  loadBlog();
}
