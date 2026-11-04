function toggleDropdown(buttonElement) {
    // Target only the content inside this specific dropdown container
    const content = buttonElement.closest('.dropdown').querySelector('.dropdown-content');
    const img = buttonElement.closest('.dropdown').querySelector('.dropbtn img');
    
    // Toggle only this dropdown
    content.classList.toggle('show');
    
    // Rotate the chevron icon
    img.classList.toggle('show');
}

/* https://share.gemini.google/mGbYq3pPKYgV

ma hetkel ei leia spetsiifilisemat JSi. pean кüsima kas võin kasutada.

*/