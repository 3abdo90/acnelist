// Acnelist Script

// Load products
async function loadProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;
    
    const products = [
        { id: 1, name: 'مرطبات معالجة حب الشباب', price: '99 ريال', desc: 'منتج فعال للغاية' },
        { id: 2, name: 'ضمادة علاجية', price: '75 ريال', desc: 'منتج طبيعي' },
        { id: 3, name: 'غسول مجبر', price: '45 ريال', desc: 'يومي تنظيف' }
    ];
    
    products.forEach(product => {
        const card = `
            <div class="bg-white p-6 rounded-lg shadow-md product-card">
                <h3 class="text-xl font-bold mb-2">${product.name}</h3>
                <p class="text-gray-600 mb-4">${product.desc}</p>
                <p class="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>
                <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    اشتر الآن
                </button>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Load blog posts
async function loadBlog() {
    const container = document.getElementById('blog-container');
    if (!container) return;
    
    const posts = [
        { id: 1, title: 'أسباب حب الشباب', content: 'مقالة تعليمية حول الأسباب' },
        { id: 2, title: 'العلاج الطبيعي', content: 'طرق طبيعية لعلاج حب الشباب' }
    ];
    
    posts.forEach(post => {
        const postEl = `
            <div class="bg-white p-6 rounded-lg shadow-md blog-post">
                <h3 class="text-2xl font-bold mb-2">${post.title}</h3>
                <p class="text-gray-600">${post.content}</p>
            </div>
        `;
        container.innerHTML += postEl;
    });
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
