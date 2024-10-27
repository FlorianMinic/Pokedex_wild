// NavBar.tsx

interface NavBarProps {
    onPrevious: () => void;
    onNext: () => void;
    showPrevious: boolean;
    showNext: boolean;
  }
  
  function NavBar({ onPrevious, onNext, showPrevious, showNext }: NavBarProps) {
    return (
      <div>
        {/* Affiche le bouton "Précédent" si showPrevious est vrai */}
        {showPrevious && (
          <button onClick={onPrevious}>Précédent</button>
        )}
        {/* Affiche le bouton "Suivant" si showNext est vrai */}
        {showNext && (
          <button onClick={onNext}>Suivant</button>
        )}
      </div>
    );
  }
  
  export default NavBar;
  