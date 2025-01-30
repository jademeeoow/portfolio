export const smoothScroll = (event, targetId, setMenuOpen) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, 
        behavior: 'smooth',
      });
      setMenuOpen(false); 
    }
  };
  