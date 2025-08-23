const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting) {
        const animClass = el.dataset.anim;
        if (animClass) {
          el.classList.remove("opacity-0");
          el.classList.add(`animate__${animClass}`);
          observer.unobserve(el);
        }
      } else {
        const animClass = el.dataset.anim;
        if (animClass) {
          el.classList.add("opacity-0");
          el.classList.remove(`animate__${animClass}`);
        }
      }
    });
  },
  { threshold: 0.6 }
);

const animClasses = [
  "fadeInDown",
  "fadeInUp",
  "fadeInLeft",
  "fadeInRight",
  "fadeIn",
  "zoomIn",
  "bounceIn",
  "slideInDown",
  "slideInUp",
  "slideInLeft",
  "slideInRight",
];

function observeElementsWithClass() {
  animClasses.forEach((anim) => {
    document.querySelectorAll(`.ob_${anim}`).forEach((el) => {
      if (!el.dataset.anim) {
        el.dataset.anim = anim;
        observer.observe(el);
      }
    });
  });
}

observeElementsWithClass();

const mutationObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType !== 1) return;

      animClasses.forEach((anim) => {
        if (node.classList.contains(`ob_${anim}`)) {
          if (!node.dataset.anim) {
            node.dataset.anim = anim;
            observer.observe(node);
          }
        }
      });

      animClasses.forEach((anim) => {
        node.querySelectorAll &&
          node.querySelectorAll(`.ob_${anim}`).forEach((child) => {
            if (!child.dataset.anim) {
              child.dataset.anim = anim;
              observer.observe(child);
            }
          });
      });
    });
  });
});

mutationObserver.observe(document.body, {
  childList: true,
  subtree: true,
});
