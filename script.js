// Afficher ou cacher les sections principales
function afficher(id) {
    const div = document.getElementById(id);

    // Fermer toutes les autres sections
    const toutes = document.querySelectorAll('main .contenu');
    toutes.forEach(function(section) {
        if (section.id !== id) {
            section.style.display = "none";
        }
    });

    // Ouvrir ou fermer la section cliquée
    if (div.style.display === "block") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
}

// Afficher ou cacher les modules de formation
function afficherModule(id) {
    const module = document.getElementById(id);
    const header = module.previousElementSibling;
    const fleche = header.querySelector('.fleche');

    // Fermer tous les autres modules
    const tousModules = document.querySelectorAll('.module-contenu');
    const toutesfleches = document.querySelectorAll('.fleche');

    tousModules.forEach(function(m) {
        if (m.id !== id) {
            m.style.display = "none";
        }
    });

    toutesfleches.forEach(function(f) {
        if (f !== fleche) {
            f.style.transform = "rotate(0deg)";
        }
    });

    // Ouvrir ou fermer le module cliqué
    if (module.style.display === "block") {
        module.style.display = "none";
        fleche.style.transform = "rotate(0deg)";
    } else {
        module.style.display = "block";
        fleche.style.transform = "rotate(180deg)";
    }
}