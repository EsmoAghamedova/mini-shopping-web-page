import { useTheme } from '../context/ThemeContext';



export default function Footer() {

  const { background, textColor } = useTheme();
  return (
    <footer className="bg-black text-white p-4 text-center" style={{ backgroundColor: background, color: textColor }}>
      <p>&copy; 2025 My Website</p>
      <p>
        Follow me on{' '}
        <a href="https://github.com/EsmoAghamedova" className="text-blue-400" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </footer>
  );
}

