document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('bg-white', 'bg-opacity-70', 'backdrop-blur-md', 'shadow-md');
        } else {
            header.classList.remove('bg-white', 'bg-opacity-70', 'backdrop-blur-md', 'shadow-md');
        }
    });

    // Hero image rotation
    const heroImage = document.getElementById('hero-image');
    if (heroImage) {
        const images = [
            '/placeholder.svg?height=600&width=1200',
            '/placeholder.svg?height=600&width=1200',
            '/placeholder.svg?height=600&width=1200',
            '/placeholder.svg?height=600&width=1200',
        ];
        let currentImage = 0;
        setInterval(() => {
            currentImage = (currentImage + 1) % images.length;
            heroImage.style.opacity = '0';
            setTimeout(() => {
                heroImage.src = images[currentImage];
                heroImage.style.opacity = '1';
            }, 500);
        }, 5000);
    }

    // Statistics counter animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.getAttribute('data-count'));
                let current = 0;
                const timer = setInterval(() => {
                    current += Math.ceil(count / 100);
                    if (current > count) {
                        clearInterval(timer);
                        current = count;
                    }
                    target.textContent = current;
                }, 20);
                observer.unobserve(target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));

    // Shop page product list
    const productList = document.getElementById('product-list');
    if (productList) {
        const products = [
            { id: 1, name: 'Educational Toy Set', price: 29.99, image: '/placeholder.svg?height=200&width=200' },
            { id: 2, name: 'Kids Science Kit', price: 39.99, image: '/placeholder.svg?height=200&width=200' },
            { id: 3, name: 'Art Supplies Bundle', price: 24.99, image: '/placeholder.svg?height=200&width=200' },
            { id: 4, name: 'Interactive Learning Tablet', price: 99.99, image: '/placeholder.svg?height=200&width=200' },
            { id: 5, name: 'Storybook Collection', price: 34.99, image: '/placeholder.svg?height=200&width=200' },
            { id: 6, name: 'Musical Instrument Set', price: 49.99, image: '/placeholder.svg?height=200&width=200' },
        ];

        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'bg-white rounded-lg shadow-md overflow-hidden';
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h2 class="text-xl font-semibold mb-2">${product.name}</h2>
                    <p class="text-gray-600 mb-4">$${product.price.toFixed(2)}</p>
                    <button class="bg-main-blue text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            `;
            productList.appendChild(productElement);
        });
    }
});

// Add to cart functionality (placeholder)
function addToCart(productId) {
    console.log(`Product ${productId} added to cart`);
    alert('Product added to cart!');
}