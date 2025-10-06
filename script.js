(function () {
    "use strict";

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
