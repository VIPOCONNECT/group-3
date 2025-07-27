// ===== NAVBAR FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    // תיקון בעיות תצוגה במובייל
    fixMobileDisplay();
    
    // הפעלת לחיצה על הכרטיסיות
    setupFeatureCards();
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            
            // Create mobile menu if it doesn't exist
            if (!document.querySelector('.mobile-menu')) {
                const mobileMenu = document.createElement('div');
                mobileMenu.className = 'mobile-menu';
                
                // Clone nav links
                const navLinksClone = navLinks.cloneNode(true);
                mobileMenu.appendChild(navLinksClone);
                
                // Clone auth buttons
                const authButtonsClone = authButtons.cloneNode(true);
                mobileMenu.appendChild(authButtonsClone);
                
                // Append to navbar
                document.querySelector('.navbar').appendChild(mobileMenu);
                
                // Add styles
                mobileMenu.style.position = 'absolute';
                mobileMenu.style.top = '100%';
                mobileMenu.style.left = '0';
                mobileMenu.style.width = '100%';
                mobileMenu.style.backgroundColor = '#fff';
                mobileMenu.style.padding = '20px';
                mobileMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                mobileMenu.style.display = 'none';
                mobileMenu.style.flexDirection = 'column';
                mobileMenu.style.gap = '20px';
                
                // Style nav links
                navLinksClone.style.display = 'flex';
                navLinksClone.style.flexDirection = 'column';
                navLinksClone.style.gap = '15px';
                
                // Style auth buttons
                authButtonsClone.style.display = 'flex';
                authButtonsClone.style.gap = '10px';
            }
            
            // Toggle mobile menu
            const mobileMenu = document.querySelector('.mobile-menu');
            mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===== COUNTDOWN TIMER =====
function updateCountdown() {
    const now = new Date();
    const endDate = new Date();
    endDate.setDate(now.getDate() + 3); // 3 days from now
    
    const timeLeft = endDate - now;
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    
    const timeLeftElement = document.querySelector('.time-left');
    if (timeLeftElement) {
        if (days > 0) {
            timeLeftElement.textContent = `נותרו ${days} ימים`;
        } else if (hours > 0) {
            timeLeftElement.textContent = `נותרו ${hours} שעות`;
        } else {
            timeLeftElement.textContent = `נותרו ${minutes} דקות`;
        }
    }
}

// Update countdown on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
    // Update countdown every minute
    setInterval(updateCountdown, 60000);
});

// ===== PROGRESS BAR ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bar on page load
    const progressBar = document.querySelector('.progress');
    if (progressBar) {
        setTimeout(() => {
            progressBar.style.transition = 'width 1.5s ease';
            progressBar.style.width = '65%';
        }, 500);
    }
});

// ===== PRODUCT IMAGE HOVER EFFECT =====
document.addEventListener('DOMContentLoaded', function() {
    const productImage = document.getElementById('product-image');
    if (productImage) {
        productImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        productImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});

// ===== FEATURE CARDS ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    // Animate cards on scroll
    window.addEventListener('scroll', function() {
        featureCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Set initial state
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger scroll event to check initial view
    window.dispatchEvent(new Event('scroll'));
});

// ===== WHATSAPP BUTTON PULSE EFFECT =====
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.querySelector('.whatsapp-button');
    if (whatsappButton) {
        setInterval(() => {
            whatsappButton.classList.add('pulse');
            
            setTimeout(() => {
                whatsappButton.classList.remove('pulse');
            }, 1000);
        }, 3000);
    }
});

// Add pulse animation to CSS
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes pulse {
            0% {
                box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
            }
            70% {
                box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
            }
            100% {
                box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
            }
        }
        
        .whatsapp-button.pulse {
            animation: pulse 1s;
        }
    `;
    document.head.appendChild(style);
});

// ===== הפעלת לחיצה על הכרטיסיות =====
function setupFeatureCards() {
    // בדיקה אם המכשיר הוא מובייל
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        const featureCards = document.querySelectorAll('.feature-card');
        
        featureCards.forEach(card => {
            // הוספת אירוע לחיצה לכל כרטיסיה
            card.addEventListener('click', function() {
                // בדיקה אם הכרטיסיה כבר פתוחה
                const isActive = this.classList.contains('active');
                
                // סגירת כל הכרטיסיות הפתוחות
                featureCards.forEach(c => {
                    c.classList.remove('active');
                });
                
                // אם הכרטיסיה לא הייתה פתוחה, פתיחתה
                if (!isActive) {
                    this.classList.add('active');
                }
            });
            
            // הוספת אינדיקציה שאפשר ללחוץ
            const indicator = document.createElement('div');
            indicator.className = 'click-indicator';
            indicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
            card.appendChild(indicator);
        });
        
        // הוספת סגנון לאינדיקציה
        const style = document.createElement('style');
        style.innerHTML = `
            .click-indicator {
                position: absolute;
                bottom: 5px;
                left: 0;
                right: 0;
                text-align: center;
                color: var(--primary);
                font-size: 0.8rem;
                opacity: 0.8;
            }
            
            .feature-card.active .click-indicator i {
                transform: rotate(180deg);
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== תיקון תצוגה במובייל =====
function fixMobileDisplay() {
    // בדיקה אם המכשיר הוא מובייל
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // וידוא שכל הטקסטים מוצגים כראוי
        const allTextElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button');
        allTextElements.forEach(el => {
            el.style.textAlign = 'right';
            el.style.direction = 'rtl';
            el.style.unicodeBidi = 'embed';
            el.style.wordBreak = 'break-word';
        });
        
        // תיקון תצוגת קופסאות - הצגה בשורה אחת במובייל
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            card.style.minWidth = '250px';
            card.style.flex = '0 0 auto';
            card.style.margin = '0 10px';
        });
        
        // שאר הכרטיסיות נשארות כרגיל
        const otherCards = document.querySelectorAll('.step-card, .audience-card');
        otherCards.forEach(card => {
            card.style.width = '100%';
            card.style.maxWidth = '100%';
            card.style.margin = '0 0 20px 0';
        });
        
        // תיקון תצוגת טבלת מחירים
        const priceRows = document.querySelectorAll('.price-row');
        priceRows.forEach(row => {
            row.style.display = 'flex';
            row.style.flexDirection = 'row';
            row.style.justifyContent = 'space-between';
            row.style.padding = '10px 0';
        });
        
        // תיקון תצוגת אייקונים
        const icons = document.querySelectorAll('.icon i');
        icons.forEach(icon => {
            icon.style.display = 'inline-block';
        });
        
        // הוספת סגנונות גלובליים
        const style = document.createElement('style');
        style.innerHTML = `
            @media (max-width: 768px) {
                body {
                    min-width: 320px !important;
                    overflow-x: hidden !important;
                    width: 100% !important;
                }
                
                .container {
                    width: 100% !important;
                    padding: 0 15px !important;
                    overflow-x: hidden !important;
                }
                
                .features, .steps, .audience-cards {
                    display: flex !important;
                    flex-direction: column !important;
                    align-items: center !important;
                    width: 100% !important;
                }
                
                .feature-card, .step-card, .audience-card {
                    width: 100% !important;
                    max-width: 100% !important;
                    margin-bottom: 20px !important;
                }
                
                .price-row {
                    display: flex !important;
                    flex-direction: row !important;
                    justify-content: space-between !important;
                }
                
                .price-label, .price-value {
                    width: auto !important;
                    text-align: right !important;
                }
                
                .price-value {
                    text-align: left !important;
                }
            }
        `;
        document.head.appendChild(style);
    }
}
