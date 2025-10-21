(function () {
    "use strict";

    var heroLanding = document.querySelector(".hero-landing");
    var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    var launchHero = function () {
        if (!heroLanding) {
            return;
        }
        heroLanding.classList.add("play");
        heroLanding.classList.remove("prepare");
    };

    if (heroLanding) {
        if (prefersReduced) {
            heroLanding.classList.remove("prepare");
        } else {
            if (document.readyState === "complete") {
                requestAnimationFrame(launchHero);
            } else {
                window.addEventListener("load", function () {
                    requestAnimationFrame(launchHero);
                });
            }
        }
    }

    var promoOverlay = document.querySelector("#promo-overlay");
    var promoClose = promoOverlay ? promoOverlay.querySelector(".promo-close") : null;
    var promoDismissed = false;

    var showPromo = function () {
        if (!promoOverlay || promoDismissed) {
            return;
        }
        promoOverlay.classList.add("is-active");
        promoOverlay.setAttribute("aria-hidden", "false");
        document.body.classList.add("promo-open");
    };

    var hidePromo = function () {
        if (!promoOverlay) {
            return;
        }
        promoOverlay.classList.remove("is-active");
        promoOverlay.setAttribute("aria-hidden", "true");
        document.body.classList.remove("promo-open");
        promoDismissed = true;
    };

    if (promoOverlay) {
        window.addEventListener("load", function () {
            window.setTimeout(showPromo, 500);
        });

        promoOverlay.addEventListener("click", function (event) {
            if (event.target === promoOverlay) {
                hidePromo();
            }
        });

        if (promoClose) {
            promoClose.addEventListener("click", hidePromo);
        }

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                hidePromo();
            }
        });
    }

    if (prefersReduced) {
        document.querySelectorAll("[data-animate]").forEach(function (node) {
            node.classList.add("is-visible");
        });
        return;
    }

    var animatedNodes = document.querySelectorAll("[data-animate]");
    if (!("IntersectionObserver" in window) || animatedNodes.length === 0) {
        animatedNodes.forEach(function (node) {
            node.classList.add("is-visible");
        });
        return;
    }

    var assignChildDelays = function (node) {
        if (node.dataset.animate === "stagger") {
            var children = node.querySelectorAll(":scope > *");
            children.forEach(function (child, index) {
                child.style.setProperty("--stagger-index", index);
            });
        }
        if (node.dataset.animate === "timeline") {
            var items = node.querySelectorAll(".process-steps li");
            items.forEach(function (item, index) {
                item.style.setProperty("--timeline-index", index);
            });
        }
    };

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
                return;
            }
            var target = entry.target;
            target.classList.add("is-visible");
            observer.unobserve(target);
        });
    }, {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px"
    });

    animatedNodes.forEach(function (node) {
        assignChildDelays(node);
        observer.observe(node);
    });
})();
