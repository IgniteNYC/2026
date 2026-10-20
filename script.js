// ============================================
// Microsoft Ignite NYC 2026 - JavaScript
// ============================================

// ============================================
// Mobile Navigation Toggle
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });

    // ============================================
    // Smooth Scroll Enhancement
    // ============================================

    // Add smooth scroll behavior for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // Navbar Scroll Effect
    // ============================================

    const navbar = document.querySelector('.navbar');
    let lastScrollY = 0;

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;

        // Add shadow effect when scrolling
        if (scrollY > 10) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScrollY = scrollY;
    });

    // ============================================
    // Reset Scroll Position on Page Load
    // ============================================

    // Always start at the top of the page
    window.scrollTo(0, 0);

    // ============================================
    // Notification System
    // ============================================

    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles if not already present
        if (!document.querySelector('style[data-notification]')) {
            const style = document.createElement('style');
            style.setAttribute('data-notification', '');
            style.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 16px 20px;
                    border-radius: 6px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    z-index: 1000;
                    animation: slideIn 0.3s ease-out;
                    max-width: 400px;
                }

                @keyframes slideIn {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @keyframes slideOut {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                }

                .notification-success {
                    background-color: #10b981;
                    color: white;
                }

                .notification-error {
                    background-color: #ef4444;
                    color: white;
                }

                .notification-info {
                    background-color: #3b82f6;
                    color: white;
                }

                .notification-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 16px;
                }

                .notification-close {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 24px;
                    cursor: pointer;
                    padding: 0;
                    min-width: 24px;
                }

                .notification-close:hover {
                    opacity: 0.8;
                }

                @media (max-width: 640px) {
                    .notification {
                        left: 20px;
                        right: 20px;
                        max-width: none;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        // Add to page
        document.body.appendChild(notification);

        // Close button handler
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        });

        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOut 0.3s ease-out';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // ============================================
    // Intersection Observer for Animations
    // ============================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const elementsToObserve = document.querySelectorAll(
        '.track-card, .speaker-card, .stat-card, .timeline-item'
    );

    elementsToObserve.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // ============================================
    // Parallax Effect (optional, subtle)
    // ============================================

    const parallaxElements = document.querySelectorAll('[style*="background-image"]');
    
    if (parallaxElements.length > 0 && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            parallaxElements.forEach(el => {
                const scrollPosition = window.scrollY;
                const elementOffset = el.offsetTop;
                const distance = scrollPosition - elementOffset;
                
                if (distance > -1000 && distance < 1000) {
                    const parallaxValue = distance * 0.5;
                    el.style.backgroundPosition = `center ${parallaxValue}px`;
                }
            });
        });
    }

    // ============================================
    // Lazy Loading Enhancement
    // ============================================

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ============================================
    // Track Explore Links (placeholder functionality)
    // ============================================

    const trackLinks = document.querySelectorAll('.btn-link');
    trackLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const track = this.closest('.track-card');
            const trackName = track ? track.querySelector('h3').textContent : 'this track';
            showNotification(`Loading more information about ${trackName}...`, 'info');
            
            // In a real application, this would navigate to a track page
            // window.location.href = `/sessions/${trackName.toLowerCase()}`;
        });
    });

    // ============================================
    // Keyboard Navigation
    // ============================================

    // Allow keyboard navigation for interactive elements
    document.addEventListener('keydown', (e) => {
        // ESC to close mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });

    // ============================================
    // Performance Monitoring (optional)
    // ============================================

    // Log when page is fully loaded
    window.addEventListener('load', () => {
        if (window.performance && window.performance.timing) {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log('Page load time: ' + pageLoadTime + 'ms');
        }
    });

    // ============================================
    // Social Media Links
    // ============================================

    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Open in new tab
            e.preventDefault();
            const url = this.getAttribute('href');
            window.open(url, '_blank', 'width=600,height=400');
        });
    });

    // ============================================
    // Speakers Carousel
    // ============================================

    const speakersCarousel = document.getElementById('speakersCarousel');
    if (speakersCarousel) {
        // Wait for images to load to get accurate card width
        setTimeout(() => {
            const speakerCards = Array.from(speakersCarousel.querySelectorAll('.speaker-card'));
            const originalCount = speakerCards.length;
            
            // Duplicate cards for infinite scroll
            speakerCards.forEach(card => {
                speakersCarousel.appendChild(card.cloneNode(true));
            });
            
            let scrollIndex = 0;
            let carouselInterval = null;
            
            function scrollCarousel() {
                const cards = speakersCarousel.querySelectorAll('.speaker-card');
                if (cards.length === 0) return;
                
                const cardWidth = cards[0].offsetWidth;
                const gapWidth = 32; // 2rem gap
                const cardWithGap = cardWidth + gapWidth;
                
                scrollIndex++;
                const scrollPosition = scrollIndex * cardWithGap;
                
                speakersCarousel.scrollLeft = scrollPosition;
                
                // Reset to beginning when reaching duplicated section
                if (scrollIndex >= originalCount) {
                    setTimeout(() => {
                        speakersCarousel.style.scrollBehavior = 'auto';
                        speakersCarousel.scrollLeft = 0;
                        speakersCarousel.style.scrollBehavior = 'smooth';
                        scrollIndex = 0;
                    }, 100);
                }
            }
            
            function startCarousel() {
                if (!carouselInterval) {
                    carouselInterval = setInterval(scrollCarousel, 3000);
                }
            }
            
            function stopCarousel() {
                if (carouselInterval) {
                    clearInterval(carouselInterval);
                    carouselInterval = null;
                }
            }
            
            // Start auto-scroll
            startCarousel();
            
            // Pause on mouseover
            speakersCarousel.addEventListener('mouseenter', () => {
                stopCarousel();
            });
            
            // Resume on mouseleave
            speakersCarousel.addEventListener('mouseleave', () => {
                startCarousel();
            });
        }, 500);
    }
});

// ============================================
// Utility Functions
// ============================================

/**
 * Get query parameters from URL
 */
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

/**
 * Check if user prefers dark mode
 */
function prefersDarkMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * Debounce function for optimized event handlers
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}