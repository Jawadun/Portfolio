const projects = {
            project1: {
                title: "Dragon Repeller",
                icon: '<img src="assets/logos/dragon.png" alt="Dragon" class="project-logo">',
                description: "A text based RPG game where players embark on a quest to defeat dragons and save the kingdom. The game features an immersive storyline, character customization, and strategic combat mechanics.",
                fullDescription: "Dragon Repeller is a thrilling text-based RPG that combines storytelling with strategic gameplay. Players create their own characters, explore a richly detailed world, and engage in turn-based battles against formidable dragon foes. The game emphasizes player choice, allowing for multiple paths and outcomes based on decisions made throughout the adventure.",
                technologies: ["HTML", "CSS", "JavaScript"],
                features: [
                    "Turn-based combat system",
                    "Inventory management",
                    "Interactive world exploration",
                    "Achievements and leaderboards"
                ],
                challenges: [
                    "Balancing game mechanics",
                    "Storyline development",
                    "Performance optimization",
                    "User interface design",
                ],
                results: [
                    "Implemented feedback for continuous improvement",
            
                    "Expanded storyline with additional quests"
                ],
                liveDemo: "https://jawadun.github.io/Dragon_repeller/",
                sourceCode: "https://github.com/Jawadun/Dragon_repeller"
            },
            project2: {
                title: "Sust Medical",
                icon: '<img src="assets/logos/sust.png" alt="Sust_Medical" class="project-logo">',
                description: "Sust Medical is a platform designed to connect medical students and professionals, facilitating knowledge sharing, collaboration on research projects, and access to resources. The platform aims to enhance the educational experience for medical students and foster innovation in healthcare.",
                fullDescription: "Sust Medical is a comprehensive platform that bridges the gap between medical students and professionals. It provides a space for sharing ideas, collaborating on research, and accessing valuable resources. The platform includes features like virtual coworking spaces, project funding tools, and mentorship programs to support innovation in healthcare.",
                technologies: ["Flutter", "Firebase", "Dart"],
                features: [
                    "Collaborative platform for students and medical stuffs",
                    "Virtual coworking spaces",
                    "Project funding tools"
                    
                ],
                challenges: [
                    "Using android development environment",
                    "Scalable video conferencing",
                    "Payment processing security"
                ],
                results: [
                    "A nice cool app"
                ],
                liveDemo: "https://jawadun.github.io/Dragon_repeller/",
                sourceCode: "https://github.com/Jawadun/Sust_medical"
            },
            project3: {
                title: "Pacman",
                icon: '<img src="assets/logos/pacman.png" alt="Pacman" class="project-logo">',
                description: "Clone of one of the most populer arcade game in the world-Pacman",
                fullDescription: "Clone of one of the most populer arcade game in the world-Pacman using Java swing as a part of Object oriented programming lab ",
                technologies: ["Java", "Java Swing"],
                features: [
                    "Smooth gameplay",
                    "Adjustable player and enemy speed",
                    "Lightwaight"
                ],
                challenges: [
                    "Use of Object oriented Programming"
                    
                ],
                results: [
                    "Learning OOP",
                    "Great game"
                    
                ],
                 liveDemo: "https://jawadun.github.io/Dragon_repeller/",
                sourceCode: "https://github.com/Jawadun/Pacman"
            },
            project4: {
                title: "E-commerce Backend",
                icon: '<img src="assets/logos/ecom.png" alt="Pacman" class="project-logo">',
                description: "A backend application made for any E commerce platform",
                fullDescription: "A HTTP server made with Go and REST Api from where you can feach and create Json data for an e commerce platform ",
                technologies: ["Go"],
                features: [
                    "REST Api",
                    "First and efficient",
                    "Concurrency"
                ],
                challenges: [
                    "Fundumentals of HTTP, RESTfull api and networking"
                    
                ],
                results: [
                    "Learning Go",
                    
                ],
                 liveDemo: "https://jawadun.github.io/Dragon_repeller/",
                sourceCode: "https://github.com/Jawadun/E-commerce_backend"
            }
        };

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

        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'slideUp 1s ease-out';
                        
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

        window.addEventListener('click', function(event) {
            const modal = document.getElementById('projectModal');
            if (event.target === modal) {
                closeProjectModal();
            }
        });

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