const projects = {
            project1: {
                title: "Project Alpha",
                icon: '<img src="assets/logos/dragon.png" alt="Dragon" class="skill-logo">',
                description: "A revolutionary web application that streamlines workflow processes with an intuitive interface and powerful features. This comprehensive solution helps teams collaborate more effectively and manage their tasks with unprecedented efficiency.",
                fullDescription: "Project Alpha represents a paradigm shift in how teams approach workflow management. Built with modern technologies and user-centric design principles, it offers a seamless experience that adapts to any team size or industry. The application features real-time collaboration tools, advanced analytics, and intelligent automation that learns from user behavior to optimize workflows continuously.",
                technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Redis"],
                features: [
                    "Real-time collaboration",
                    "Advanced analytics dashboard",
                    "Intelligent task automation",
                    "Multi-team support",
                    "Custom workflow builder"
                ],
                challenges: [
                    "Scalable real-time architecture",
                    "Complex permission system",
                    "Performance optimization",
                    "Cross-platform compatibility"
                ],
                results: [
                    "40% increase in team productivity",
                    "50,000+ active users",
                    "99.9% uptime achieved",
                    "Featured in TechCrunch"
                ],
                liveDemo: "https://jawadun.github.io/Dragon_repeller/",
                sourceCode: "https://github.com/Jawadun/Dragon_repeller"
            },
            project2: {
                title: "Innovation Hub",
                icon: '<img src="assets/logos/sust.png" alt="Sust_Medical" class="skill-logo">',
                description: "A collaborative platform that connects creators and innovators, fostering creativity and entrepreneurship across various industries and disciplines.",
                fullDescription: "Innovation Hub serves as a digital ecosystem where creative minds converge to share ideas, collaborate on projects, and turn concepts into reality. The platform facilitates meaningful connections between entrepreneurs, designers, developers, and investors, creating a vibrant community focused on innovation.",
                technologies: ["Vue.js", "Firebase", "TypeScript", "Stripe API", "WebRTC"],
                features: [
                    "Idea sharing and collaboration",
                    "Investor matching system",
                    "Virtual coworking spaces",
                    "Project funding tools",
                    "Mentorship programs"
                ],
                challenges: [
                    "Building trust in virtual environment",
                    "Intellectual property protection",
                    "Scalable video conferencing",
                    "Payment processing security"
                ],
                results: [
                    "10,000+ registered innovators",
                    "500+ successful projects launched",
                    "$2M+ in funding facilitated",
                    "Partnerships with 50+ accelerators"
                ],
                liveDemo: "https://your-dragon-repeller-demo-link.com",
                sourceCode: "https://github.com/Jawadun/Sust_medical"
            },
            project3: {
                title: "Design Studio",
                icon: '<img src="assets/logos/pacman.png" alt="Pacman" class="skill-logo">',
                description: "A creative tool suite that empowers designers to create stunning visuals with AI-powered assistance, revolutionizing the design workflow.",
                fullDescription: "Design Studio combines the power of artificial intelligence with intuitive design tools to create a new standard for digital creativity. The platform offers smart suggestions, automated processes, and collaborative features that enhance designer productivity while maintaining creative control.",
                technologies: ["Python", "TensorFlow", "React", "Canvas API", "WebGL"],
                features: [
                    "AI-powered design suggestions",
                    "Automated color palette generation",
                    "Smart layout optimization",
                    "Real-time collaboration",
                    "Version control system"
                ],
                challenges: [
                    "Training custom AI models",
                    "Real-time rendering performance",
                    "Complex canvas operations",
                    "Cross-browser compatibility"
                ],
                results: [
                    "25,000+ designers onboarded",
                    "60% faster design process",
                    "1M+ designs created",
                    "Integration with major design tools"
                ],
                 liveDemo: "https://your-dragon-repeller-demo-link.com",
                sourceCode: "https://github.com/Jawadun/Pacman"
            }
        };

        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Smooth scrolling for navigation links
        function initSmoothScrolling() {
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
        }

        function initContactCopy() {
            document.querySelectorAll('.contact-item').forEach(item => {
                item.addEventListener('click', function() {
                    const text = this.querySelector('h4').textContent;
                    navigator.clipboard.writeText(text).then(() => {
                        // Show a temporary success message
                        const originalText = this.querySelector('h4').textContent;
                        this.querySelector('h4').textContent = 'Copied!';
                        this.querySelector('h4').style.color = '#64ffda';
                        
                        setTimeout(() => {
                            this.querySelector('h4').textContent = originalText;
                            this.querySelector('h4').style.color = '';
                        }, 1000);
                    });
                });
            });
        }

          function downloadCV() {
            
            
             const link = document.createElement('a');
             link.href = 'assets/Jawadun_Noor.pdf';
             link.download = 'Jawadun_Noor.pdf';
             link.click();
        }

        function viewCV() {
            window.open('assets/Jawadun_Noor.pdf', '_blank');
            
        }
        document.addEventListener('mousemove', function(e) {
            const particles = document.querySelectorAll('.particle');
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            particles.forEach((particle, index) => {
                if (index % 3 === 0) {
                    const rect = particle.getBoundingClientRect();
                    const particleX = rect.left + rect.width / 2;
                    const particleY = rect.top + rect.height / 2;
                    
                    const distance = Math.sqrt(
                        Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
                    );
                    
                    if (distance < 100) {
                        particle.style.opacity = '0.8';
                        particle.style.transform = `scale(1.5)`;
                        particle.style.background = 'rgba(100, 255, 218, 0.8)';
                    } else {
                        particle.style.opacity = '0.3';
                        particle.style.transform = `scale(1)`;
                        particle.style.background = 'rgba(100, 255, 218, 0.3)';
                    }
                }
            });
        });


        // Form submission handler
        // function initContactForm() {
        //     const contactForm = document.getElementById('contactForm');
            
        //     contactForm.addEventListener('submit', function(e) {
        //         e.preventDefault();
                
        //         const formData = new FormData(this);
        //         const name = formData.get('name');
        //         const email = formData.get('email');
        //         const message = formData.get('message');
                
        //         if (!name || !email || !message) {
        //             alert('Please fill in all fields');
        //             return;
        //         }
                
        //         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //         if (!emailRegex.test(email)) {
        //             alert('Please enter a valid email address');
        //             return;
        //         }
                
        //         alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
        //         this.reset();
        //     });
        // }

        // Header scroll effect
        function initHeaderScrollEffect() {
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(15, 15, 35, 0.95)';
                } else {
                    header.style.background = 'rgba(15, 15, 35, 0.9)';
                }
            });
        }

        // Scroll animations
        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'slideUp 1s ease-out';
                        
                        // Animate skill progress bars
                        if (entry.target.id === 'skills') {
                            animateSkillBars();
                        }
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.section').forEach(section => {
                observer.observe(section);
            });
        }

        // Animate skill progress bars
        function animateSkillBars() {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach((bar, index) => {
                setTimeout(() => {
                    const width = bar.style.getPropertyValue('--skill-width');
                    bar.style.width = width;
                    bar.style.transition = 'width 1s ease-in-out';
                }, index * 100);
            });
        }

        // Typing effect for hero title
        function initTypingEffect() {
            const heroTitle = document.querySelector('.hero h1');
            const text = heroTitle.textContent;
            heroTitle.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    heroTitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            setTimeout(typeWriter, 500);
        }

        // Project modal functions
        function openProjectModal(projectId) {
            const modal = document.getElementById('projectModal');
            const project = projects[projectId];
            
            if (!project) return;
            
            document.getElementById('modalTitle').textContent = project.title;
            
            const modalBody = document.getElementById('modalBody');
            modalBody.innerHTML = `
                <div class="project-detail-image">${project.icon}</div>
                <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem;">${project.fullDescription}</p>
                
                <div class="project-details">
                    <div class="detail-section">
                        <h4>Technologies Used</h4>
                        <ul>
                            ${project.technologies.map(tech => `<li>${tech}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Key Features</h4>
                        <ul>
                            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Technical Challenges</h4>
                        <ul>
                            ${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="detail-section">
                        <h4>Results & Impact</h4>
                        <ul>
                            ${project.results.map(result => `<li>${result}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="project-links">
                    <a href="${project.liveDemo}" target="_blank" class="project-link">View Live Demo</a>
                    <a href="${project.sourceCode}" target="_blank" class="project-link">View Source Code</a>
                </div>
            `;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeProjectModal() {
            const modal = document.getElementById('projectModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('projectModal');
            if (event.target === modal) {
                closeProjectModal();
            }
        });

        // Initialize photo functionality
        function initPhotoFeature() {
            const profileImage = document.getElementById('.profileImage');
            const placeholder = document.querySelector('.photo-placeholder');
            
            profileImage.addEventListener('load', function() {
                this.style.display = 'block';
                placeholder.style.display = 'none';
            });
            
            profileImage.addEventListener('error', function() {
                this.style.display = 'none';
                placeholder.style.display = 'flex';
            });
            
            placeholder.addEventListener('click', function() {
                alert('Click to upload your photo!\n\nTo add your photo:\n1. Save your photo as "your-photo.jpg"\n2. Place it in the same folder as your HTML file\n3. Refresh the page');
            });
        }

        // Mouse interaction with particles
        document.addEventListener('mousemove', function(e) {
            const particles = document.querySelectorAll('.particle');
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            particles.forEach((particle, index) => {
                if (index % 5 === 0) {
                    const rect = particle.getBoundingClientRect();
                    const particleX = rect.left + rect.width / 2;
                    const particleY = rect.top + rect.height / 2;
                    
                    const distance = Math.sqrt(
                        Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
                    );
                    
                    if (distance < 100) {
                        particle.style.opacity = '0.8';
                        particle.style.transform = `scale(1.5)`;
                    } else {
                        particle.style.opacity = '0.3';
                        particle.style.transform = `scale(1)`;
                    }
                }
            });
        });

        // Initialize all functionality when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            initSmoothScrolling();
            //initContactForm();
            initContactCopy()
            initHeaderScrollEffect();
            initScrollAnimations();
            initTypingEffect();
            initPhotoFeature();
        });