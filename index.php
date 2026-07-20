
<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Goa IT Service | Corporate Infrastructure & Managed Networking Solutions</title>
    <meta name="description" content="Professional IT networking, enterprise CCTV integration, hardware lifecycle solutions, and premium infrastructure management across Goa by Hanumant Vinayak Mone.">
    
    <!-- Open Graph Metadata Platforms -->
    <meta property="og:title" content="Goa IT Service | Corporate Infrastructure & Managed Networks">
    <meta property="og:description" content="High-tier enterprise IT engineering, structure cabling, cloud migration, and 24/7 SLA operations.">
    <meta property="og:type" content="website">
    
    <!-- Fonts & Framework Engines -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

    <style>
        /* CSS Architectural Design System Tokens */
        :root[data-bs-theme="dark"] {
            --bg-base: #060d19;
            --bg-card: rgba(11, 29, 64, 0.45);
            --border-card: rgba(255, 255, 255, 0.08);
            --color-primary: #0A2F6B;
            --color-navy: #0B1D40;
            --color-accent: #FF9800;
            --text-primary: #f8fafc;
            --text-muted: #94a3b8;
            --shadow-main: 0 12px 40px 0 rgba(0, 0, 0, 0.4);
            --hero-bg-mesh: radial-gradient(circle at 85% 20%, rgba(10, 47, 107, 0.35) 0%, transparent 60%),
                            radial-gradient(circle at 15% 80%, rgba(255, 152, 0, 0.08) 0%, transparent 50%);
        }

        :root[data-bs-theme="light"] {
            --bg-base: #f4f7fa;
            --bg-card: rgba(255, 255, 255, 0.85);
            --border-card: rgba(11, 29, 64, 0.08);
            --color-primary: #0A2F6B;
            --color-navy: #0B1D40;
            --color-accent: #E67E22;
            --text-primary: #0f172a;
            --text-muted: #64748b;
            --shadow-main: 0 12px 32px 0 rgba(11, 29, 64, 0.06);
            --hero-bg-mesh: radial-gradient(circle at 85% 20%, rgba(10, 47, 107, 0.08) 0%, transparent 60%);
        }
		
		:root[data-bs-theme="dark"] .form-select option {
			background: #0B1D40;
			color: #ffffff;
		}

		:root[data-bs-theme="light"] .form-select option {
			background: #ffffff;
			color: #000000;
		}

        html, body {
            margin: 0; padding: 0; width: 100%; min-height: 100vh;
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-base);
            color: var(--text-primary);
            overflow-x: hidden;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        h1, h2, h3, h4, h5, h6 { font-family: 'Poppins', sans-serif; font-weight: 600; }

        .main-layout-wrapper { position: relative; width: 100%; display: block; padding-top: 85px; }

        /* Premium Glassmorphic Cards */
        .glass-panel-card {
            background: var(--bg-card);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid var(--border-card);
            border-radius: 16px;
            box-shadow: var(--shadow-main);
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
        }
        .glass-panel-card:hover {
            transform: translateY(-8px);
            border-color: rgba(255, 152, 0, 0.4);
        }

        /* Fixed Navigation Framework */
        .custom-navbar {
            background: rgba(6, 13, 25, 0.85);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border-bottom: 1px solid var(--border-card);
        }
        .brand-node {
            background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
            color: #fff; width: 42px; height: 42px; display: flex;
            align-items: center; justify-content: center; border-radius: 12px; font-size: 1.25rem;
        }
        .accent-glow { color: var(--color-accent); }

        /* Mega Dropdown Layer styling */
        .mega-dropdown {
            background: var(--bg-base) !important;
            border-top: 4px solid var(--color-accent) !important;
            border-radius: 0 0 16px 16px !important;
        }
        .mega-links li { padding: 6px 0; color: var(--text-muted); font-size: 0.9rem; transition: all 0.2s; }
        .mega-links li:hover { color: var(--color-accent); padding-left: 4px; cursor: pointer; }

        /* Hero Container Area */
        .hero-container-mesh { background: var(--hero-bg-mesh); min-height: 80vh; display: flex; align-items: center; padding: 60px 0; }

        .action-btn-matrix {
            background: linear-gradient(135deg, var(--color-primary), #1b4ea5);
            color: #fff; border: none; padding: 0.8rem 2rem; border-radius: 30px; font-weight: 600;
            box-shadow: 0 4px 14px rgba(10, 47, 107, 0.4); transition: all 0.3s ease; text-decoration: none;
        }
        .action-btn-matrix:hover { transform: scale(1.03); color: #fff; }

        .action-btn-accent {
            background: linear-gradient(135deg, var(--color-accent), #e68a00);
            color: #fff; border: none; padding: 0.8rem 2rem; border-radius: 30px; font-weight: 600;
            transition: all 0.3s ease; text-decoration: none;
        }
        .action-btn-accent:hover { transform: scale(1.03); color: #fff; }

        .metric-numeric-display {
            font-size: 3.5rem; font-weight: 700;
            background: linear-gradient(45deg, var(--text-primary), var(--color-accent));
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }

        .filter-btn-node {
            background: transparent; border: 1px solid var(--border-card); color: var(--text-primary);
            padding: 0.5rem 1.6rem; border-radius: 24px; margin: 4px; transition: all 0.3s;
        }
        .filter-btn-node.active, .filter-btn-node:hover { background: var(--color-accent); color: #fff; border-color: var(--color-accent); }

        /* Floating Overlays */
        .floating-telecom-matrix { position: fixed; bottom: 24px; right: 24px; z-index: 1040; display: flex; flex-direction: column; gap: 12px; }
        .comms-node-circle {
            width: 54px; height: 54px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
            color: #fff; font-size: 1.4rem; box-shadow: 0 6px 20px rgba(0,0,0,0.3); transition: all 0.3s ease; text-decoration: none;
        }
        .comms-node-circle:hover { transform: scale(1.1) rotate(8deg); color: #fff; }
        .node-whatsapp { background-color: #25D366; }
        .node-telephony { background-color: var(--color-primary); }

        .form-glass-control { background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border-card); color: var(--text-primary) !important; border-radius: 10px; padding: 0.75rem 1rem; }
        .form-glass-control:focus { background: rgba(255, 255, 255, 0.08); border-color: var(--color-accent); box-shadow: none; }

        .accordion-item { background: var(--bg-card) !important; border: 1px solid var(--border-card) !important; margin-bottom: 12px; border-radius: 12px !important; overflow: hidden; }
        .accordion-button { background: transparent !important; color: var(--text-primary) !important; box-shadow: none !important; }
        .accordion-button:not(.collapsed) { color: var(--color-accent) !important; border-bottom: 1px solid var(--border-card); }
    </style>
    
    <!-- Schema.org Data Mapping Profile -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Goa IT Service",
      "alternateName": "Formerly Sharvani Computer Service and Training",
      "telephone": "+917020156012",
      "email": "goaitservice@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "H.No.157(A), Pistewada, Nanoda, Latambarcem",
        "addressLocality": "Bicholim",
        "addressRegion": "Goa",
        "addressCountry": "IN"
      }
    }
    </script>
</head>
<body>

<!-- Navigation Grid Menu -->
<nav class="navbar navbar-expand-lg fixed-top custom-navbar">
    <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#home">
            <div class="brand-node me-2"><i class="fa-solid fa-network-wired"></i></div>
            <span class="brand-text">Goa <span class="accent-glow">IT Service</span></span>
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav ms-auto align-items-lg-center">
                <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                <li class="nav-item dropdown position-static">
                    <a class="nav-link dropdown-toggle" href="#services" role="button" data-bs-toggle="dropdown">Services</a>
                    <div class="dropdown-menu mega-dropdown p-4 w-100 border-0 shadow-lg">
                        <div class="row g-4">
                            <div class="col-md-3">
                                <h6 class="dropdown-header text-warning mb-2"><i class="fa-solid fa-route me-2"></i> Networking</h6>
                                <ul class="list-unstyled mega-links">
                                    <li>LAN Setup & Wifi Optimization</li>
                                    <li>Router Configurations & Firewalls</li>
                                    <li>Fiber Network Infrastructure</li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <h6 class="dropdown-header text-warning mb-2"><i class="fa-solid fa-shield-halved me-2"></i> CCTV Systems</h6>
                                <ul class="list-unstyled mega-links">
                                    <li>IP Camera Matrix Deployments</li>
                                    <li>DVR / NVR Integrations</li>
                                    <li>24/7 Remote Monitoring Panels</li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <h6 class="dropdown-header text-warning mb-2"><i class="fa-solid fa-laptop-medical me-2"></i> Hardware Lifecycle</h6>
                                <ul class="list-unstyled mega-links">
                                    <li>Laptop & Desktop Diagnostics</li>
                                    <li>Printer Overhaul & Maintenances</li>
                                    <li>Advanced Data Recovery Arrays</li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <h6 class="dropdown-header text-warning mb-2"><i class="fa-solid fa-cloud-arrow-up me-2"></i> Cloud Deployments</h6>
                                <ul class="list-unstyled mega-links">
                                    <li>Microsoft Azure & Office 365</li>
                                    <li>Automated DR Backup Plans</li>
                                    <li>Annual Maintenance Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                <li class="nav-item"><a class="nav-link" href="#faq">FAQ</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                <li class="nav-item ms-lg-2 d-none d-lg-block">
                    <button class="btn theme-toggle-btn border-0 text-white-50" id="themeEngineNode"><i class="fa-solid fa-moon"></i></button>
                </li>
                <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
                    <a href="tel:+917020156012" class="btn action-btn-matrix"><i class="fa-solid fa-phone me-1"></i> Call Specialist</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<main class="main-layout-wrapper" id="home">
<section class="hero-container-mesh d-flex align-items-center" style="min-height:88vh;">

    <div class="container">

        <div class="row justify-content-center">

            <div class="col-lg-10 text-center" data-aos="zoom-in">

                <span class="badge border border-warning text-warning px-4 py-2 rounded-pill fw-semibold mb-4"
                    style="background:rgba(255,152,0,.08);font-size:.82rem;letter-spacing:.6px;">

                    FORMERLY SHARVANI COMPUTER SERVICE & TRAINING

                </span>

                <h1 class="display-2 fw-bold mb-4 lh-1">

                    Reliable <span class="text-warning">IT Solutions</span> <br> Across Goa

                </h1>

                <p class="lead text-secondary mx-auto mb-5"
                   style="max-width:780px;font-size:1.25rem;line-height:1.8;">

					We provide networking, CCTV installation, Wi-Fi setup,
                    cloud solutions, computer repairs, and annual IT maintenance
                    for homes, offices, hotels, schools and businesses across Goa.

                </p>

                <div class="d-flex justify-content-center flex-wrap gap-3 mb-5">

                    <a href="tel:+917020156012"
                       class="btn action-btn-matrix px-5 py-3">

                        <i class="fa-solid fa-phone me-2"></i>

                        Call Now

                    </a>

                    <a href="https://wa.me/919922022662"
                       target="_blank"
                       class="btn action-btn-accent px-5 py-3">

                        <i class="fab fa-whatsapp me-2"></i>

                        WhatsApp

                    </a>
                </div>
            </div>
        </div>
    </div>

</section>


    <!-- Metrics Engine Trace -->
    <section class="py-5 bg-dark bg-opacity-30">
        <div class="container">
            <div class="row g-4">
                <div class="col-md-3 col-6" data-aos="fade-up" data-aos-delay="100">
                    <div class="glass-panel-card text-center p-4">
                        <div class="metric-numeric-display" data-metric-target="15">0</div>
                        <div class="text-muted small text-uppercase fw-semibold">Years Experience</div>
                    </div>
                </div>
                <div class="col-md-3 col-6" data-aos="fade-up" data-aos-delay="200">
                    <div class="glass-panel-card text-center p-4">
                        <div class="metric-numeric-display" data-metric-target="850">0</div>
                        <div class="text-muted small text-uppercase fw-semibold">Projects Completed</div>
                    </div>
                </div>
                <div class="col-md-3 col-6" data-aos="fade-up" data-aos-delay="300">
                    <div class="glass-panel-card text-center p-4">
                        <div class="metric-numeric-display" data-metric-target="600">0</div>
                        <div class="text-muted small text-uppercase fw-semibold">Happy Clients</div>
                    </div>
                </div>
                <div class="col-md-3 col-6" data-aos="fade-up" data-aos-delay="400">
                    <div class="glass-panel-card text-center p-4">
                        <div class="metric-numeric-display">24/7</div>
                        <div class="text-muted small text-uppercase fw-semibold">On-Call Support</div>
                    </div>
            </div>
        </div>
    </section>


<!--// About Us-->
<section id="about" class="py-5">
    <div class="container py-4">
        <div class="row g-5 align-items-center">

            <div class="col-lg-6" data-aos="fade-right">

                <h6 class="text-warning text-uppercase fw-bold mb-2">
                    // About Us
                </h6>

                <h2 class="mb-4">
                    Your Trusted IT Partner in Goa
                </h2>

                <p class="text-muted">
                    Goa IT Service provides reliable IT solutions for homes,
                    offices, hotels, schools, shops, and businesses across Goa.
                    Led by <strong>Hanumant Vinayak Mone</strong>, we specialize in
                    networking, CCTV installation, Wi-Fi setup, cloud solutions,
                    computer repairs, and annual maintenance services.
                </p>

                <div class="row g-4 mt-2">

                    <div class="col-sm-6">

                        <h5>
                            <i class="fa-solid fa-bullseye text-warning me-2"></i>
                            Our Mission
                        </h5>

                        <p class="text-muted small">
                            To provide reliable, affordable, and professional IT
                            solutions with fast service and complete customer
                            satisfaction.
                        </p>

                    </div>

                    <div class="col-sm-6">

                        <h5>
                            <i class="fa-solid fa-eye text-warning me-2"></i>
                            Our Vision
                        </h5>

                        <p class="text-muted small">
                            To become one of Goa's most trusted IT service providers
                            by delivering quality work, honest advice, and dependable
                            support.
                        </p>

                    </div>

                </div>

            </div>

            <div class="col-lg-6" data-aos="fade-left">

                <div class="glass-panel-card p-4 border-start border-4 border-warning">

                    <h4 class="mb-3">
                        Why Choose Goa IT Service?
                    </h4>

                    <ul class="list-unstyled mb-0">

                        <li class="mb-3">
                            <i class="fa-solid fa-circle-check text-warning me-2"></i>
                            15+ years of industry experience
                        </li>

                        <li class="mb-3">
                            <i class="fa-solid fa-circle-check text-warning me-2"></i>
                            Fast and reliable on-site support
                        </li>

                        <li class="mb-3">
                            <i class="fa-solid fa-circle-check text-warning me-2"></i>
                            Affordable solutions for homes and businesses
                        </li>

                        <li class="mb-3">
                            <i class="fa-solid fa-circle-check text-warning me-2"></i>
                            Genuine products and quality workmanship
                        </li>

                        <li>
                            <i class="fa-solid fa-circle-check text-warning me-2"></i>
                            Friendly support before and after every installation
                        </li>

                    </ul>

                </div>

            </div>

        </div>
    </div>
</section>


<!-- Our Services -->
<section id="services" class="py-5 bg-dark bg-opacity-20">
    <div class="container py-4">

        <div class="text-center mb-5" data-aos="fade-up">
            <h6 class="text-warning text-uppercase fw-bold">// Our Services</h6>
            <h2 class="mb-2">IT Solutions for Homes & Businesses</h2>
            <p class="text-muted">
                We provide complete IT services to keep your home or business running smoothly.
            </p>
        </div>

        <div class="row g-4">

            <!-- Networking -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div class="glass-panel-card p-4 h-100">

                    <div class="brand-node mb-3">
                        <i class="fa-solid fa-network-wired"></i>
                    </div>

                    <h4>Networking Solutions</h4>

                    <p class="text-muted small">
                        LAN setup, Wi-Fi installation, router configuration,
                        fiber networking, network racks, and complete office
                        networking solutions.
                    </p>

                </div>
            </div>

            <!-- CCTV -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div class="glass-panel-card p-4 h-100">

                    <div class="brand-node mb-3"
                        style="background:linear-gradient(135deg,#e74c3c,var(--color-accent));">

                        <i class="fa-solid fa-video"></i>

                    </div>

                    <h4>CCTV Installation</h4>

                    <p class="text-muted small">
                        CCTV camera installation, DVR & NVR setup,
                        remote mobile viewing, maintenance,
                        and security solutions for homes and businesses.
                    </p>

                </div>
            </div>

            <!-- Cloud -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div class="glass-panel-card p-4 h-100">

                    <div class="brand-node mb-3"
                        style="background:linear-gradient(135deg,#2ecc71,var(--color-primary));">

                        <i class="fa-solid fa-cloud-arrow-up"></i>

                    </div>

                    <h4>Computer & Cloud Services</h4>

                    <p class="text-muted small">
					Microsoft Azure platform execution, Microsoft 365, hardware diagnostic, cloud backup, email setup, data recovery and Annual Maintenance Contracts (AMC).
                    </p>

                </div>
            </div>

        </div>

    </div>
</section>


	
	<!-- Our Projects -->
<section id="portfolio" class="py-5">
    <div class="container py-4">

        <div class="text-center mb-5" data-aos="fade-up">

            <h6 class="text-warning text-uppercase fw-bold">
                // Our Projects
            </h6>

            <h2>Some of Our Recent Work</h2>

            <p class="text-muted">
                Here are some of the IT solutions we have delivered for homes and businesses across Goa.
            </p>

            <div class="d-flex flex-wrap justify-content-center mt-4">

                <button class="filter-btn-node active" data-portfolio-filter="all">
                    All Projects
                </button>

                <button class="filter-btn-node" data-portfolio-filter="net">
                    Networking
                </button>

                <button class="filter-btn-node" data-portfolio-filter="cctv">
                    CCTV
                </button>

                <button class="filter-btn-node" data-portfolio-filter="sys">
                    Computer & Cloud
                </button>

            </div>

        </div>

        <div class="row g-4 justify-content-center">

            <!-- Networking -->
            <div class="col-lg-4 col-md-6 log-item"
                 data-log-category="net"
                 data-aos="fade-up">

                <div class="glass-panel-card overflow-hidden">

                    <div style="height:200px;
                        background:linear-gradient(135deg,var(--color-navy),#0a2f6b);
                        display:flex;
                        align-items:center;
                        justify-content:center;">

                        <i class="fa-solid fa-network-wired fa-4x text-warning opacity-75"></i>

                    </div>

                    <div class="p-4">

                        <h5>Office Network Setup</h5>

                        <p class="text-muted small mb-0">
                            Complete LAN, Wi-Fi, router configuration, and structured networking for offices and commercial spaces.
                        </p>

                    </div>

                </div>

            </div>

            <!-- CCTV -->
            <div class="col-lg-4 col-md-6 log-item"
                 data-log-category="cctv"
                 data-aos="fade-up"
                 data-aos-delay="100">

                <div class="glass-panel-card overflow-hidden">

                    <div style="height:200px;
                        background:linear-gradient(135deg,#111,var(--color-navy));
                        display:flex;
                        align-items:center;
                        justify-content:center;">

                        <i class="fa-solid fa-video fa-4x text-warning opacity-75"></i>

                    </div>

                    <div class="p-4">

                        <h5>CCTV Security Installation</h5>

                        <p class="text-muted small mb-0">
                            CCTV camera installation with DVR/NVR setup and mobile monitoring for homes, offices, and shops.
                        </p>

                    </div>

                </div>

            </div>

            <!-- Computer & Cloud -->
            <div class="col-lg-4 col-md-6 log-item"
                 data-log-category="sys"
                 data-aos="fade-up"
                 data-aos-delay="200">

                <div class="glass-panel-card overflow-hidden">

                    <div style="height:200px;
                        background:linear-gradient(135deg,#1e293b,#050b14);
                        display:flex;
                        align-items:center;
                        justify-content:center;">

                        <i class="fa-solid fa-server fa-4x text-warning opacity-75"></i>

                    </div>

                    <div class="p-4">

                        <h5>Azure Cloud System Migration</h5>

                        <p class="text-muted small mb-0">
                            On-premises storage to secure cloud infrastructure tenant migration phase framework and annual maintenance services.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    </div>
</section>


	
<!-- Customer Reviews -->
<section class="py-5 bg-dark bg-opacity-30">
    <div class="container py-4">

        <div class="text-center mb-5">
            <h6 class="text-warning text-uppercase fw-bold">
                // Customer Reviews
            </h6>

            <h2>What Our Customers Say</h2>

            <p class="text-muted">
                We are proud to help homes and businesses across Goa with reliable IT services.
            </p>
        </div>

        <div class="swiper verificationSlider pb-5">

            <div class="swiper-wrapper">

                <!-- Review 1 -->
                <div class="swiper-slide p-2">

                    <div class="glass-panel-card p-5 text-center">

                        <i class="fa-solid fa-quote-left text-warning display-6 mb-3 d-block"></i>

                        <p class="fs-5 text-light mb-4">
                            "Excellent networking service. The team completed our office setup on time, and everything has been working perfectly. Highly recommended!"
                        </p>

                        <h5 class="mb-1">
                            Business Owner
                        </h5>

                        <span class="text-muted small">
                            Verna, Goa
                        </span>

                    </div>

                </div>

                <!-- Review 2 -->
                <div class="swiper-slide p-2">

                    <div class="glass-panel-card p-5 text-center">

                        <i class="fa-solid fa-quote-left text-warning display-6 mb-3 d-block"></i>

                        <p class="fs-5 text-light mb-4">
                            "Our CCTV cameras were installed neatly, and we can now monitor everything from our mobile phones. The service was professional and affordable."
                        </p>

                        <h5 class="mb-1">
                            Hotel Manager
                        </h5>

                        <span class="text-muted small">
                            North Goa
                        </span>

                    </div>

                </div>

                <!-- Review 3 -->
                <div class="swiper-slide p-2">

                    <div class="glass-panel-card p-5 text-center">

                        <i class="fa-solid fa-quote-left text-warning display-6 mb-3 d-block"></i>

                        <p class="fs-5 text-light mb-4">
                            "Very quick response. My computer was repaired the same day, and all my important data was safely recovered."
                        </p>

                        <h5 class="mb-1">
                            Home Customer
                        </h5>

                        <span class="text-muted small">
                            Bicholim, Goa
                        </span>

                    </div>

                </div>

            </div>

            <div class="swiper-pagination"></div>

        </div>

    </div>
</section>	

  
<!-- Frequently Asked Questions -->
<section id="faq" class="py-5">
    <div class="container py-4">

        <div class="text-center mb-5" data-aos="fade-up">
            <h6 class="text-warning text-uppercase fw-bold">
                // Frequently Asked Questions
            </h6>

            <h2>Got Questions? We've Got Answers.</h2>

            <p class="text-muted">
                Here are answers to some common questions about our IT services.
            </p>
        </div>

        <div class="row justify-content-center">

            <div class="col-lg-8" data-aos="fade-up">

                <div class="accordion" id="faqEngineTree">

                    <!-- FAQ 1 -->
                    <div class="accordion-item">

                        <h2 class="accordion-header">

                            <button class="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq1">

                                What is included in your Annual Maintenance Contract (AMC)?

                            </button>

                        </h2>

                        <div id="faq1"
                             class="accordion-collapse collapse show"
                             data-bs-parent="#faqEngineTree">

                            <div class="accordion-body text-muted">

                                Our AMC includes regular maintenance, software updates,
                                basic troubleshooting, network checks, CCTV health checks,
                                and priority support whenever you need assistance.

                            </div>

                        </div>

                    </div>

                    <!-- FAQ 2 -->
                    <div class="accordion-item">

                        <h2 class="accordion-header">

                            <button class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq2">

                                Can I view my CCTV cameras on my mobile phone?

                            </button>

                        </h2>

                        <div id="faq2"
                             class="accordion-collapse collapse"
                             data-bs-parent="#faqEngineTree">

                            <div class="accordion-body text-muted">

                                Yes. We configure your CCTV system so you can securely
                                view live and recorded footage from your smartphone,
                                wherever you are.

                            </div>

                        </div>

                    </div>

                    <!-- FAQ 3 -->
                    <div class="accordion-item">

                        <h2 class="accordion-header">

                            <button class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq3">

                                Do you provide on-site service anywhere in Goa?

                            </button>

                        </h2>

                        <div id="faq3"
                             class="accordion-collapse collapse"
                             data-bs-parent="#faqEngineTree">

                            <div class="accordion-body text-muted">

                                Yes. We provide on-site IT support across Goa for homes,
                                offices, hotels, schools, shops, and businesses.

                            </div>

                        </div>

                    </div>

                    <!-- FAQ 4 -->
                    <div class="accordion-item">

                        <h2 class="accordion-header">

                            <button class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq4">

                                Do you repair laptops and desktop computers?

                            </button>

                        </h2>

                        <div id="faq4"
                             class="accordion-collapse collapse"
                             data-bs-parent="#faqEngineTree">

                            <div class="accordion-body text-muted">

                                Yes. We repair desktops, laptops, printers, networking
                                equipment, and also provide software installation,
                                virus removal, and data recovery services.

                            </div>

                        </div>

                    </div>

                    <!-- FAQ 5 -->
                    <div class="accordion-item">

                        <h2 class="accordion-header">

                            <button class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#faq5">

                                How can I request a quote?

                            </button>

                        </h2>

                        <div id="faq5"
                             class="accordion-collapse collapse"
                             data-bs-parent="#faqEngineTree">

                            <div class="accordion-body text-muted">

                                You can call us, send a WhatsApp message, or fill out
                                the enquiry form on this website. We'll get back to you
                                with a free quote as soon as possible.

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
</section>

    <!-- Interactive Engagement Section -->
    <section id="contact" class="py-5 bg-dark bg-opacity-10">
        <div class="container py-4">
            <div class="row g-5">
                
				<!-- Contact Details -->
            <div class="col-lg-5" data-aos="fade-right">

                <h6 class="text-warning text-uppercase fw-bold mb-2">
                    // Contact Us
                </h6>

                <h2 class="mb-4">
                    Get in Touch
                </h2>

                <p class="text-muted mb-4">
                    Need help ? Contact us today for a free
                    consultation and quote.
                </p>

                <div class="d-flex align-items-start mb-4">

                    <div class="brand-node me-3">
                        <i class="fa-solid fa-location-dot"></i>
                    </div>

                    <div>
                        <h6 class="mb-1">Address</h6>
                        <span class="text-muted small">
                            H.No.157(A), Pistewada, Nanoda,
                            Latambarcem, Bicholim, Goa
                        </span>
                    </div>

                </div>

                <div class="d-flex align-items-start mb-4">

                    <div class="brand-node me-3">
                        <i class="fa-solid fa-envelope"></i>
                    </div>

                    <div>
                        <h6 class="mb-1">Email</h6>
                        <span class="text-muted small">
                            goaitservice@gmail.com
                        </span>
                    </div>

                </div>

                <div class="d-flex align-items-start mb-4">

                    <div class="brand-node me-3">
                        <i class="fa-solid fa-phone"></i>
                    </div>

                    <div>
                        <h6 class="mb-1">Phone</h6>
                        <span class="text-muted small">
                            +91 7020156012<br>
                            +91 9922022662
                        </span>
                    </div>

                </div>

                <div class="d-flex align-items-start">

                    <div class="brand-node me-3">
                        <i class="fa-solid fa-clock"></i>
                    </div>

                    <div>
                        <h6 class="mb-1">Business Hours</h6>
                        <span class="text-muted small">
                            Monday - Saturday<br>
                            9:00 AM - 7:00 PM
                        </span>
                    </div>

                </div>

            </div>
				
<!-- WhatsApp Form -->
            <div class="col-lg-7" data-aos="fade-left">

                <div class="glass-panel-card p-4">

                    <h4 class="mb-3">
                        Send Us an Enquiry
                    </h4>

                    <p class="text-muted mb-4">
                        Fill in the form below and we'll contact you shortly.
                    </p>

                    <!-- Keep your existing WhatsApp form here without any changes -->

					<form id="whatsappForm" class="row g-3">

							<div class="col-md-6">
								<label class="form-label">Full Name *</label>
								<input
								type="text"
								name="name"
								class="form-control form-glass-control"
								placeholder="Enter your full name"
								required>
							</div>

    <div class="col-md-6">
        <label class="form-label">Mobile Number *</label>
        <input
            type="tel"
            name="mobile"
            class="form-control form-glass-control"
            placeholder="Enter your mobile number"
            pattern="[0-9]{10}"
            required>
    </div>

    <div class="col-12">
        <label class="form-label">Service Required *</label>

        <select
            name="service"
            class="form-select form-glass-control"
            required>

            <option value="">Select a Service</option>

            <option>Networking Solutions</option>
            <option>LAN Setup</option>
            <option>WiFi Installation</option>
            <option>Router Configuration</option>
            <option>Managed Networks</option>
            <option>Rack Installation</option>
            <option>Fiber Networking</option>

            <option>CCTV Installation</option>
            <option>IP Camera Installation</option>
            <option>DVR / NVR Setup</option>
            <option>Remote Monitoring</option>

            <option>Laptop Repair</option>
            <option>Desktop Repair</option>
            <option>Printer Repair</option>
            <option>Data Recovery</option>
            <option>Virus Removal</option>

            <option>Microsoft Azure</option>
            <option>Office 365</option>
            <option>Cloud Backup</option>
            <option>Email Setup</option>

            <option>Annual Maintenance Contract</option>
            <option>Corporate IT Support</option>

            <option>Other</option>

        </select>
    </div>

    <div class="col-12">
        <label class="form-label">Additional Message</label>

        <textarea
            name="message"
            rows="5"
            class="form-control form-glass-control"
            placeholder="Tell us about your requirement..."></textarea>
    </div>

    <div class="col-12">

        <button
            type="submit"
            class="btn action-btn-matrix w-100">

            <i class="fab fa-whatsapp me-2"></i>

            Send via WhatsApp

        </button>

    </div>

</form>
</main>
    <!-- Google Map -->
                <br><h6 class="text-warning text-uppercase fw-bold mb-2">
                    // Find us on maps
                </h6>
        <div class="row mt-5" data-aos="zoom-in">

            <div class="col-12">

                <div class="glass-panel-card overflow-hidden" style="height:350px;">

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15367.622506894035!2d73.9118!3d15.5937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfbf38d330fccf%3A0x6a0ef61b1b0164c9!2sBicholim%2C%20Goa!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style="border:0;"
                        loading="lazy"
                        allowfullscreen>
                    </iframe>

                </div>

            </div>

        </div>
<br>
    </div>
</section>



<!-- Footer -->
<footer class="border-top border-secondary border-opacity-10 bg-dark bg-opacity-50 pt-5 pb-3">

    <div class="container">

        <div class="row g-4 mb-4">

            <!-- Company Info -->
            <div class="col-lg-4">

                <h5 class="mb-2">Goa IT Service</h5>

                <p class="text-muted small mb-3">
                    Formerly Sharvani Computer Service & Training
                </p>

                <p class="text-muted small mb-0">
                    Your trusted partner for Networking, CCTV Installation,
                    Computer Repair, Cloud Solutions, and IT Support across Goa.
                </p>

            </div>

            <!-- Services -->
            <div class="col-sm-6 col-lg-4">

                <h6 class="text-white text-uppercase small mb-3">
                    Our Services
                </h6>

                <p class="text-muted small mb-0">
                    Networking • CCTV Installation • Wi-Fi Setup •
                    Computer Repair • Cloud Services •
                    Annual Maintenance Contracts (AMC)
                </p>

            </div>

            <!-- Founder -->
            <div class="col-sm-6 col-lg-4">

                <h6 class="text-white text-uppercase small mb-3">
                    Founder
                </h6>

                <p class="text-warning small mb-2">
                    <i class="fa-solid fa-user-tie me-2"></i>
                    Hanumant Vinayak Mone
                </p>

                <p class="text-muted small mb-0">
                    IT & Networking Specialist
                </p>

            </div>

        </div>

        <hr class="border-secondary border-opacity-25">

        <div class="d-flex flex-wrap justify-content-between align-items-center text-muted small">

            <p class="mb-2 mb-md-0">
                &copy; 2026 Goa IT Service. All Rights Reserved.
            </p>

            <p class="mb-0">
                Serving Homes & Businesses Across Goa.
            </p>

        </div>

    </div>

</footer>



<!-- Floating Overlay Communication Layer -->
<div class="floating-telecom-matrix">
    <a href="https://wa.me/919922022662" target="_blank" class="comms-node-circle node-whatsapp" aria-label="WhatsApp Link"><i class="fa-brands fa-whatsapp"></i></a>
    <a href="tel:+917020156012" class="comms-node-circle node-telephony" aria-label="Phone Link"><i class="fa-solid fa-phone"></i></a>
</div>

<!-- Architecture Runtimes Framework Scripts -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<script>
    document.addEventListener("DOMContentLoaded", function () {
        // 1. Initialize Reveal Animation Library
        AOS.init({ duration: 750, once: true, mirror: false });

        // 2. Initialize Carousel Slider
        const verificationSlider = new Swiper('.verificationSlider', {
            slidesPerView: 1, spaceBetween: 24, loop: true,
            pagination: { el: '.swiper-pagination', clickable: true },
            breakpoints: { 768: { slidesPerView: 2 } }
        });

        // 3. UI System Theme Toggle
        const themeEngineNode = document.getElementById("themeEngineNode");
        if (themeEngineNode) {
            themeEngineNode.addEventListener("click", () => {
                const currentRoot = document.documentElement;
                const evaluatedTheme = currentRoot.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
                currentRoot.setAttribute("data-bs-theme", evaluatedTheme);
                themeEngineNode.querySelector("i").className = evaluatedTheme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";
            });
        }

        // 4. Smooth Counter Progression Engine
        const metricNumericDisplays = document.querySelectorAll("[data-metric-target]");
        const runMetricCounters = () => {
            metricNumericDisplays.forEach(display => {
                const targetValue = +display.getAttribute("data-metric-target");
                const progressionSpeed = targetValue / 40;
                const updateProgression = () => {
                    const currentVal = +display.innerText;
                    if (currentVal < targetValue) {
                        display.innerText = Math.ceil(currentVal + progressionSpeed);
                        setTimeout(updateProgression, 25);
                    } else {
                        display.innerText = targetValue + "+";
                    }
                };
                updateProgression();
            });
        };

        let countersFired = false;
        window.addEventListener("scroll", () => {
            const triggersSection = document.querySelector("[data-metric-target]");
            if(triggersSection && !countersFired) {
                const boundary = triggersSection.getBoundingClientRect();
                if(boundary.top < window.innerHeight) {
                    runMetricCounters();
                    countersFired = true;
                }
            }
        });

        // 5. Portfolio Grid Visibility Filtering Engine
        const filterBtnNodes = document.querySelectorAll(".filter-btn-node");
        const logItems = document.querySelectorAll(".log-item");

        filterBtnNodes.forEach(button => {
            button.addEventListener("click", () => {
                filterBtnNodes.forEach(b => b.classList.remove("active"));
                button.classList.add("active");

                const activeFilter = button.getAttribute("data-portfolio-filter");

                logItems.forEach(item => {
                    if (activeFilter === "all" || item.getAttribute("data-log-category") === activeFilter) {
                        item.style.display = "block";
                        setTimeout(() => item.style.opacity = "1", 40);
                    } else {
                        item.style.opacity = "0";
                        setTimeout(() => item.style.display = "none", 250);
                    }
                });
            });
        });
    });
	

//6.whatsapp message

	document.getElementById("whatsappForm").addEventListener("submit", function(e){

    e.preventDefault();
	
	

    let name = document.querySelector("[name='name']").value.trim();
    let mobile = document.querySelector("[name='mobile']").value.trim();
    let service = document.querySelector("[name='service']").value;
    let message = document.querySelector("[name='message']").value.trim();

    if(name==="" || mobile==="" || service===""){
        alert("Please fill all required fields.");
        return;
    }

    let whatsappMessage =
`🖥️ *Goa IT Service*

━━━━━━━━━━━━━━━━━━━━

📩 *WEBSITE ENQUIRY*

👤 *Name*
${name}

📱 *Mobile*
${mobile}

💼 *Service Required*
${service}

📝 *Additional Message*
${message || "N/A"}

━━━━━━━━━━━━━━━━━━━━

Thank you`
    let whatsappNumber = "919922022662";

    let url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappMessage);

window.open(url, "_blank");

document.getElementById("whatsappForm").reset();

});
	
	
	
	
</script>
</body>
</html>